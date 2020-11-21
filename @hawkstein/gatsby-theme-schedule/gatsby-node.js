const fs = require("fs")
const { DateTime } = require("luxon")
const withDefaults = require("./utils/default-options")

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)
  if (!fs.existsSync(contentPath)) {
    reporter.info(
      `Creating missing directory for source data: '${contentPath}'`
    )
    fs.mkdirSync(contentPath, { recursive: true })
  }
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: "ScheduleDay",
      fields: {
        id: { type: "ID!" },
        date: {
          type: "Date!",
          extensions: {
            dateformat: {},
          },
        },
        label: { type: "String!" },
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "ScheduleLocation",
      fields: {
        id: { type: "ID!" },
        name: { type: "String!" },
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "ScheduleEvent",
      fields: {
        id: { type: "ID!" },
        date: {
          type: "Date!",
          extensions: {
            dateformat: {},
          },
        },
        startTime: {
          type: "Date!",
          extensions: {
            dateformat: {},
          },
        },
        location: { type: "String!" },
        description: { type: "String" },
        slug: { type: "String!" },
        path: { type: "String!" },
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "LabelledLink",
      fields: {
        label: { type: "String!" },
        url: { type: "String!" },
      },
    }),
    schema.buildObjectType({
      name: "ScheduleOptions",
      fields: {
        id: { type: "ID!" },
        basePath: { type: "String!" },
        collection: { type: "String!" },
        useCollectionInURLs: { type: "Boolean!" },
        contentPath: { type: "String" },
        heading: { type: "String!" },
        locationsOrder: { type: "[String]" },
        locationsLabel: { type: "String!" },
        locationsSlug: { type: "String!" },
        locationsURL: { type: "String!" },
        scheduleLabel: { type: "String!" },
        scheduleSlug: { type: "String!" },
        scheduleURL: { type: "String!" },
        use24Hour: { type: "Boolean!" },
        navLinks: { type: "[LabelledLink]" },
        footerLinks: { type: "[LabelledLink]" },
        actionLabel: { type: "String" },
        actionURL: { type: "String" },
      },
      interfaces: ["Node"],
    }),
  ]
  createTypes(typeDefs)
}

exports.sourceNodes = async (
  { actions: { createNode }, createContentDigest },
  themeOptions
) => {
  const options = withDefaults(themeOptions)
  await createNode({
    ...options,
    id: "@hawkstein/gatsby-theme-schedule",
    parent: null,
    children: [],
    internal: {
      type: "ScheduleOptions",
      contentDigest: createContentDigest(JSON.stringify(options)),
      description: "Theme options for '@hawkstein/gatsby-theme-schedule'",
    },
  })
}

exports.onCreateNode = async (
  { node, actions, createNodeId, getNode, createContentDigest, reporter },
  themeOptions
) => {
  const { collection, basePath, useCollectionInURLs } = withDefaults(
    themeOptions
  )

  if (node.internal.type !== "Mdx") {
    return
  }
  const fileNode = getNode(node.parent)
  if (fileNode.sourceInstanceName !== collection) {
    return
  }

  const day = DateTime.fromISO(`${node.frontmatter.date}`).startOf("day")
  const [hours, minutes] = `${node.frontmatter.start}`.match(/.{1,2}/g)
  const dayPlusTime = day.plus({ hours, minutes })
  if (!dayPlusTime.isValid) {
    reporter.panic(
      `An invalid DateTime (${dayPlusTime}) was created for ${node.frontmatter.title}.`
    )
  }

  // This is potentially a problem since we are faking the slug property here ourselves
  // Need to check why node.slug is null, when does the mdx node create the slug prop?
  const filename = node.fileAbsolutePath.substring(
    node.fileAbsolutePath.lastIndexOf("/") + 1
  )
  const slug = filename.substring(0, filename.indexOf("."))

  const event = {
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    startTime: dayPlusTime.toISO(),
    location: node.frontmatter.location,
    description: node.frontmatter.description,
    slug,
    path: `${basePath}${useCollectionInURLs ? `${collection}/` : ""}${slug}`,
  }

  const { createNode } = actions
  // Create a node for the day the event is on if it doesn't exist
  const dayId = createNodeId(`${collection}-${event.date}`)
  const dayNode = getNode(dayId)
  if (dayNode === undefined) {
    await createNode({
      id: dayId,
      parent: null,
      date: event.date,
      label: DateTime.fromISO(event.date).weekdayLong,
      children: [],
      internal: {
        type: "ScheduleDay",
        contentDigest: createContentDigest(event.date),
        description: "A day of scheduled events",
      },
    })
  }

  // Create a node for the location the event is at if it doesn't exist
  const locationId = createNodeId(`${collection}-${event.location}`)
  const locationNode = getNode(locationId)
  if (locationNode == undefined) {
    await createNode({
      id: locationId,
      parent: null,
      name: event.location,
      children: [],
      internal: {
        type: "ScheduleLocation",
        contentDigest: createContentDigest(event.location),
        description: "A location where scheduled events take place",
      },
    })
  }

  const eventId = createNodeId(`${collection}-${fileNode.name}`)
  await createNode({
    ...event,
    id: eventId,
    parent: node.id,
    children: [],
    internal: {
      type: "ScheduleEvent",
      contentDigest: createContentDigest(event),
      description: "A scheduled event",
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const {
    basePath,
    useCollectionInURLs,
    collection,
    scheduleURL,
    locationsOrder,
  } = withDefaults(themeOptions)

  const result = await graphql(`
    query {
      allScheduleDay(sort: { fields: date }) {
        nodes {
          label
          date
        }
      }
      allScheduleEvent {
        nodes {
          path
          title
          slug
          startTime
          location
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic(
      "gatsby-theme-schedule: Error querying source data",
      result.errors
    )
    return
  }
  const path = `${basePath}${useCollectionInURLs ? `${collection}/` : ""}`
  const days = result.data.allScheduleDay.nodes
  days.forEach((day) => {
    actions.createPage({
      path: `${path}${day.label.toLowerCase()}`,
      component: require.resolve("./src/templates/day.tsx"),
      context: {
        label: day.label,
        date: day.date,
        locationsOrder,
      },
    })

    const events = result.data.allScheduleEvent.nodes
    events.forEach((event) => {
      actions.createPage({
        path: event.path,
        component: require.resolve("./src/templates/event.tsx"),
        context: {
          title: event.title,
          startTime: event.startTime,
          location: event.location,
          slug: event.slug,
        },
      })
    })
  })

  actions.createRedirect({
    fromPath: `${scheduleURL}`,
    toPath: `${path}${days[0].label.toLowerCase()}`,
    isPermanent: true,
    redirectInBrowser: true,
  })
}

import { useStaticQuery, graphql } from "gatsby"

type LabelledLink = {
  label: string
  url: string
}

type ScheduleOptions = {
  scheduleOptions: {
    basePath: string
    collection: string
    useCollectionInURLs: boolean
    contentPath: string
    heading: string
    locationsOrder: string[]
    locationsLabel: string
    locationsSlug: string
    locationsURL: string
    scheduleLabel: string
    scheduleSlug: string
    scheduleURL: string
    use24Hour: boolean
    navLinks: LabelledLink[]
    footerLinks: LabelledLink[]
    actionLabel: string
    actionURL: string
  }
}

const useScheduleOptions = () => {
  const data = useStaticQuery<ScheduleOptions>(graphql`
    query {
      scheduleOptions(id: { eq: "@hawkstein/gatsby-theme-schedule" }) {
        basePath
        collection
        useCollectionInURLs
        contentPath
        heading
        locationsOrder
        locationsLabel
        locationsSlug
        locationsURL
        scheduleLabel
        scheduleSlug
        scheduleURL
        use24Hour
        navLinks {
          label
          url
        }
        footerLinks {
          label
          url
        }
        actionLabel
        actionURL
      }
    }
  `)

  return data.scheduleOptions
}

export default useScheduleOptions

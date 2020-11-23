## gatsby-theme-schedule

Gatsby Theme Schedule

## Examples

- [Music Festival](https://gatsby-theme-schedule-festival.netlify.com/)
- [Example (in this repo)](https://gatsby-theme-schedule.netlify.com/)

## Getting started

To get started you can either clone this starter [gatsby-schedule-starter](https://github.com/hawkstein/gatsby-schedule-starter) or follow the instructions below.

### Install

```
yarn add @hawkstein/gatsby-theme-schedule
```

or

```
npm install @hawkstein/gatsby-theme-schedule
```

### Install Peer Dependencies

```
yarn add gatsby gatsby-plugin-mdx gatsby-source-filesystem react react-dom @mdx-js/mdx @mdx-js/react gatsby-plugin-mdx @emotion/core @emotion/styled theme-ui gatsby-plugin-theme-ui gatsby-plugin-sharp gatsby-remark-images gatsby-transformer-sharp gatsby-image
```

or

```
npm install gatsby gatsby-plugin-mdx gatsby-source-filesystem react react-dom @mdx-js/mdx @mdx-js/react gatsby-plugin-mdx @emotion/core @emotion/styled theme-ui gatsby-plugin-theme-ui gatsby-plugin-sharp gatsby-remark-images gatsby-transformer-sharp gatsby-image
```

Woah! That's a lot of peer dependencies! Well, this is a Gatsby Theme so chances are you'll be installing these as part of combining this theme with other themes and plugins.

## Setup

### gatsby-config.js

Add `@hawkstein/gatsby-theme-schedule` to your `gatsby-config.js`

```
// gatsby-config.js
module.exports = {
  plugins: ['@hawkstein/gatsby-theme-schedule']
}
```

### Theme options

#### Example

```
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: '@hawkstein/gatsby-theme-schedule',
      options: {
        heading: "Example Event",
        locationsOrder: [`Main Location`, `Location Two`, `Location Three`],
      }
    }
  ]
}
```

| Option              | Default                            | Description                                                                                |
| ------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------ |
| basePath            | "/"                                | The base path which the theme will start at                                                |
| collection          | "events"                           | Name for this specific collection of events                                                |
| useCollectionInURLs | false                              | If set to true then the collection option will be prefixed in front of day and event slugs |
| contentPath         | "src/events"                       | The location of the MDX files which will generate the event pages and day pages            |
| heading             | "Events Schedule"                  | Title used in the header component                                                         |
| locationsOrder      | []                                 | An array of strings, this is used to create a custom sort for your locations               |
| locationsLabel      | "Locations"                        | Label for the locations link in the header                                                 |
| locationsSlug       | "locations"                        | The slug to use as part of the url for the link in the header                              |
| scheduleLabel       | "Schedule"                         | Label for the schedule link in the header                                                  |
| scheduleSlug        | "schedule"                         | The slug to use as part of the url for the link in the header                              |
| use24Hour           | true                               | Should the theme use 24 hour times                                                         |
| navLinks            | []                                 | Array of objects of type { label: string, url: string }                                    |
| footerLinks         | []                                 | Array of objects of type { label: string, url: string }                                    |
| actionLabel         | "Buy Tickets"                      | Label for the call to action button in the header                                          |
| actionURL           | "/buy"                             | URL for the call to action button in the header                                            |
| remarkImageOptions  | { maxWidth: 1200, withWebp: true } | Object to pass to 'gatsby-remark-images' plugin                                            |

### Source data directory setup

To add events create `.mdx` files in the `src/events` directory. The source directory can be adjusted by setting the plugin option `contentPath`.

<!-- prettier-ignore -->
```
|-- src
    |-- events
        |-- my-event.mdx
        |-- my-other-event.mdx
        |-- another-event.mdx
        |-- the-last-event.mdx

```

#### MDX Pages Setup

Pages must include `date` and `start` in the `frontmatter`. You'll probably to include `location` too but if it's omitted from all of the mdx then it will be ignored.

```
// src/events/my-event.mdx
---
date: 6/11/81
start: 18:00
location: Main Location
---

# My Event

Content for the event page. Any valid markdown / mdx will work here!

```

As the .mdx files are parsed by Gatsby, source nodes for all the events days and locations will be generated.

### Theme UI Components

The theme is using `theme-ui` for layout and so anything provided by [theme-ui/components](https://theme-ui.com/components) is going to fit in.

### Shadowing gatsby-theme-schedule Components

The first thing to shadow is your logo.

```
|-- src
    |-- @hawkstein
      |-- gatsby-theme-schedule
        |-- src
          |-- components
            |-- logo.tsx
```

If you would like to customize any part of the theme you can do so by shadowing the theme file. Perhaps `layout.tsx` or its children `header.tsx` or `footer.tsx`.

To do this create the following directory `src/gatsby-plugin-theme-ui` and then create an `index.js`

```javascript
// src/gatsby-plugin-theme-ui/index.js

import baseTheme from "@hawkstein/gatsby-theme-schedule/src/theme.js"

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: "#EEE",
    background: "#000",
  },
}
```

Theme creates a redirect from /schedule to the 1st day of the schedule, if you want this to be implemented by your host then you should use the relevant plugin (e.g. Netlify plugin)

### Theme Options

Theme Options set in `gatsby-config` are available via a custom hook exported as `useScheduleOptions`

## Development

**gatsby-theme-schedules** uses `yarn workspaces` for development. Clone and run `yarn && yarn develop`.

### Thanks!

Thanks for making it this far and checking out my theme, if you have any thoughts or comments then please get in touch.
[@liamhawks](https://twitter.com/liamhawks)
[@hawkstein](https://github.com/hawkstein)

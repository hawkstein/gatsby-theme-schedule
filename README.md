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
yarn add gatsby gatsby-plugin-mdx gatsby-source-filesystem react react-dom @mdx-js/mdx @mdx-js/react
```

or

```
npm install gatsby gatsby-plugin-mdx gatsby-source-filesystem react react-dom @mdx-js/mdx @mdx-js/react
```

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

### Source data directory setup

To add events create `.mdx` files in the `src/events` directory.

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

Pages must include `date` and `start` in the `frontmatter`

```
// src/events/my-event.mdx
---
date: 6/11/81
start: 18:00
---

# My Event

Content for the event page. Any valid markdown / mdx will work here!

```

### theme-ui Components

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

import baseTheme from "@hawkstein/gatsby-theme-schedule/src/theme.js";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: "#FF4081",
    background: "#232323",
  },
};
```

### Theme Options

Theme Options set in `gatsby-config` are available via a custom hook exported as `useScheduleOptions`

## Development

**gatsby-theme-schedules** uses `yarn workspaces` for development. Clone and run `yarn && yarn develop`.

### Thanks!

Thanks for making it this far and checking out my theme, if you have any thoughts or comments then please get in touch.
[@liamhawks](https://twitter.com/liamhawks)
[@hawkstein](https://github.com/hawkstein)

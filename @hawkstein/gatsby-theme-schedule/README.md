# The smallest possible Gatsby theme

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init
# install @hawkstein/gatsby-theme-schedule and it's dependencies
yarn add gatsby react react-dom @hawkstein/gatsby-theme-schedule
```

Then add the theme to your `gatsby-config.js`. We'll use the long-form
here for educational purposes.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "@hawkstein/gatsby-theme-schedule",
      options: {},
    },
  ],
}
```

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```

Note that this site doesn't _do_ anything, so you're seeing a missing
resources error. Create a simple page in `src/pages/index.js` to see a
page on the root url.

```jsx
import React from "react"

export default function Home() {
  return <div>My Site!</div>
}
```

Theme creates a redirect from /schedule to the 1st day of the schedule, if you want this to be implemented by your host then you should use the relevant plugin (e.g. Netlify plugin)

const withDefaults = require("./utils/default-options")

module.exports = (themeOptions) => {
  const { contentPath, collection, remarkImageOptions } = withDefaults(
    themeOptions
  )
  return {
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: collection,
          path: contentPath,
        },
      },
      "gatsby-plugin-theme-ui",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-remark-images",
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: "gatsby-remark-images",
              options: remarkImageOptions,
            },
          ],
        },
      },
    ],
  }
}

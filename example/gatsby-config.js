module.exports = {
  plugins: [
    {
      resolve: `@hawkstein/gatsby-theme-schedule`,
      options: {
        heading: "Example Event",
        locationsOrder: [`Main Location`, `Location Two`, `Location Three`],
        navLinks: [
          {
            label: "Search",
            url: "/search",
          },
        ],
        footerLinks: [
          {
            label: "Privacy",
            url: "/privacy",
          },
          {
            label: "Contact",
            url: "/contact",
          },
        ],
      },
    },
  ],
}

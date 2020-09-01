module.exports = {
  siteMetadata: {
    title: "Ivan Pozderac",
    titleTemplate: "%s · Web Developer",
    description:
      "Frontend designer, developer and engineer on a way to become fullstack JS Web Developer",
    url: "https://ivan-pozderac.from.hr", // No trailing slash allowed!
    image: `${__dirname}/src/assets/images/headerImg.jpg`, // Path to your image you placed in the 'static' folder
    twitterUsername: "@pozda",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `PWD`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/images/pozda-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-buttercms`,
        options: {
          authToken: `d1e76c7d753ccb2484c4cc24d3c706d39cd23bc9`,
          // Optional. Returns values for the supplied content field keys.
          contentFields: {
            keys: [`toolbox`, `projects`, `aboutMe`, `socialLinks`, ``],
            // Optional. Set to 1 to enable test mode for viewing draft content.
            test: 1,
          }
        },
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-flow`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`
  ],
}
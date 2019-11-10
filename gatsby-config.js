module.exports = {
  siteMetadata: {
    title: `International Night 2019`,
    description: `International Night is the Coalition of International Students' flagship event celebrating cultural diversity of the 10,000+ international students at ASU.`,
    author: `@dickwyn`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/scss/App.scss"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `International Night 2019`,
        short_name: `International Night`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `static/images/asucis-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GA_TRACKING_ID}`,
      },
    },
  ],
};

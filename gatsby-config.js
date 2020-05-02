require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `RafaelDavisH`,
    siteTitleAlt: `RafaelDavis | Portfolio & Blog`,
    siteHeadline: `RafaelDavis - Portfolio & Blog`,
    author: "@RafaelDavisH",
    siteDescription: "Personal Portfolio and Blog",
    siteUrl: "https://rafaeldavish.dev/",
    externalLinks: [
      {
        name: "twitter",
        url: "https://twitter.com/RafaelDavisH",
      },
      {
        name: "github",
        url: "https://github.com/RafaelDavisH",
      },
    ],
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
      {
        title: `ModernJSDev`,
        slug: `/modernjsdev`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: process.env.CHANNEL_ID,
        apiKey: process.env.YOUTUBE_MODERNJSDEV_API_KEY,
        maxVideos: 50 // Defaults to 50
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rafaeldavis.dev`,
        stripQueryString: `/blog?tag=foobar`
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RafaelDavisH | Personal Portfolio & Blog`,
        short_name: `RafaelDavisH`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // `gatsby-transformer-sharp`, 
    // `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}

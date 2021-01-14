module.exports = {
  siteMetadata: {
    title: `Emanuel Jaimes`,
    description: `EmJames Site`,
    author: `@emjames`,
    contact: [
      {
        title: 'Github',
        url: 'https://www.github.com/emjames'
      },
      {
        title: 'Telegram',
        url: 'https://telegram.me/jms55'
      },
      {
        title: 'Email',
        url: 'mailto:ej@emjames.com'
      },
      {
        title: 'CV',
        url: 'https://drive.google.com/open?id=1N8LmZhCSLh67-X-FyPZdVhuY7vw8WaQV'
      },
      {
        title: 'Blog',
        url: '/blog/'
      }
    ],
    projects:[
      {
        about: 'Timer the talk',
        title: 'Talk timer',
        url: 'https://emjames.github.io/talk-timer/'
      },
      {
        about: 'Square Layout',
        title: 'Make a square layout',
        url: 'https://emjames.github.io/square-layout/'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // Markdown notes
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          }
        ],
      },
    },
    // `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-dark-mode`,
  ],
}

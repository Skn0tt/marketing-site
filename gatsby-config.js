require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-W3T2VJZ',
        includeInDevelopment: true,
        defaultDataLayer: { platform: 'gatsby' },
        routeChangeEventName: 'gatsby-route-change',
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        auth: {
          htaccess: {
            username: process.env.WPUSERNAME,
            password: process.env.WPPASSWORD,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
          quality: 100,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        query: `query {
                  allWpPost(sort: { date: DESC }, filter: { status: { eq: "publish" } }) {
                    nodes {
                      id
                      link
                      title
                      categories {
                        nodes {
                          name
                          link
                        }
                      }
                      date(formatString: "MM/DD/YYYY")
                      excerpt
                    }
                  }
                }`,
        ref: 'slug',
        index: ['title', 'excerpt'],
        store: [
          'title',
          'excerpt',
          'date',
          'slug',
          'link',
          'categories',
          'featuredImage',
          'id',
        ],
        normalizer: ({ data }) =>
          data.allWpPost.nodes.map(node => ({
            title: node.title,
            excerpt: node.excerpt,
            date: node.date,
            slug: node.link,
            link: node.link,
            categories: node.categories,
            featuredImage: node.featuredImage,
            id: node.id,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Meltano - Build data-powered features in minutes, not days`,
        short_name: `Meltano`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#080216`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
  ],
}

// gatsby cache

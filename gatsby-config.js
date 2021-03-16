module.exports = {
  siteMetadata: {
    title: `wisp`,
    siteUrl: "https://hellowisp.com", // No trailing slash allowed!
    description: `Prevent outbreaks. Discreetly. Herpes and cold sore meds &amp; natural remedies to prevent outbreaks and spreading. Prescribed online by a US licensed physician; delivered discreetly to you. No more awkward doctor visits. All done over secure messaging.`,
    author: `Dylan <dylan@hellowisp.com>`,
    image: "/images/page-image-fallback.jpg", // Path to your image you placed in the 'static' folder
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
    {
      resolve: "gatsby-plugin-zopfli",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wisp Inc`,
        short_name: `wisp`,
        start_url: `/`,
        background_color: `#f7b0c3`,
        theme_color: `#f7b0c3`,
        display: `minimal-ui`,
        icon: `src/images/wisp-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tx8d7yrf6q9p`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `Q3WHi1D_Hui43ZDyn_67mmHwKq2asVAgYHKCC7Z3-Ws`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://images.ctfassets.net",
          "https://syndication.twitter.com",
          "https://www.googletagmanager.com",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager-timeout",
      options: {
        id: "GTM-MQQKFNB",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        timeout: 2500,
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://hellowisp.com`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
            allContentfulPage(filter: {doNotIndex: {ne: true}}) {
              edges {
                node{
                  slug
                }
              }
            }
            allContentfulBlogPost(filter: {slug: {ne: null}}) {
              edges {
                node {
                  slug
                }
              }
            }
            allContentfulProduct(filter: {slug: {ne: null}}) {
              edges {
                node {
                  slug
                }
              }
            }
          }`,
        resolveSiteUrl: ({ site }) => {
          //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({
          site,
          allContentfulPage,
          allContentfulBlogPost,
          allContentfulProduct,
        }) => {
          let pages = []
          allContentfulPage.edges.map(edge => {
            pages.push({
              url: `${site.siteMetadata.siteUrl}/${edge.node.slug}`,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          allContentfulBlogPost.edges.map(edge => {
            pages.push({
              url: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          allContentfulProduct.edges.map(edge => {
            pages.push({
              url: `${site.siteMetadata.siteUrl}/products/${edge.node.slug}`,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          // allContentfulProduct.edges.map(edge => {
          //   pages.push({
          //     url: `${site.siteMetadata.siteUrl}/products/${edge.node.slug}`,
          //     changefreq: `daily`,
          //     priority: 0.7,
          //   })
          // })
          // allContentfulBlogPost.edges.map(edge => {
          //   pages.push({
          //     url: `${site.siteMetadata.siteUrl}/blog/${edge.slug}`,
          //     changefreq: `daily`,
          //     priority: 0.7,
          //   })
          // })
          return pages
        },
      },
    },
    `gatsby-plugin-netlify`,
  ],
}

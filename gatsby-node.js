/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ContentfulPageTitle implements Node {
      backgroundImage: ContentfulAsset
    }
  `
  createTypes(typeDefs)
}

const path = require(`path`)
const urlSlug = require("url-slug")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API createPages. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getPages = makeRequest(
    graphql,
    `
    {
      allContentfulPage {
        edges {
          node {
            id
            title
            slug
            childPages{
              title
            }
          }
        }
      }
      allContentfulProduct {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }

    `
  ).then(result => {
    // Create pages for each page.
    result.data.allContentfulPage.edges.forEach(({ node }) => {
      if (node.childPages) {
        // TODO: Should we actually implement a base parent page with links to child pages?
        // ANSWER: Yes
        console.log(
          `The page "${node.title}" has child pages, so don't create a page`
        )

        return null
      }

      const { slug } = node

      const slugCheck = slug => {
        if (slug === "home") {
          return "/"
        }
        return slug.replace(/^\/|\/$/g, "")
      }

      const actualSlug = slugCheck(slug)

      createPage({
        path: actualSlug,
        component: path.resolve(`src/templates/page.js`),
        context: {
          id: node.id,
        },
      })

      console.log(`Created page for - http://localhost:8000/${actualSlug}`)
    })
    // Create pages for each product.
    result.data.allContentfulProduct.edges.forEach(({ node }) => {
      // Get slug or create from title
      const slug = node.slug || urlSlug(node.title)
      createPage({
        path: `/products/${slug}`,
        component: path.resolve(`src/templates/product.js`),
        context: {
          id: node.id,
        },
      })

      console.log(
        `Created Product detail page for - http://localhost:8000/products/${slug}`
      )
    })
    // Create pages for each blog post.
    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          id: node.id,
        },
      })

      console.log(
        `Created Blog detail page for - http://localhost:8000/blog/${node.slug}`
      )
    })
  })

  // Query for nodes to use in creating pages.
  return getPages
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
// Create static pages using createPage API
const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const tilPostTemplate = path.resolve(`src/templates/postTemplate.js`)
  const result = await graphql(`
        {
          allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
            }
          }
        }
      }
    `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: tilPostTemplate,
      context: {slug: node.fields.slug }, // additional data can be passed via context
    })
  })
}

// Programatically create slugs
exports.onCreateNode = ({node, actions, getNode}) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

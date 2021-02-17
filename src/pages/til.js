import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

const Til = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Til" />
      <Header />
      <div className="post-list">
        {posts.map(post => (
          <div key={post.node.id} className="post-list__item">
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
            <div className="post-list__excerpt">
              <p>{post.node.excerpt}</p>
            </div>
            <Link to={post.node.fields.slug}>{'Continue...'}</Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Til

// Get markdown pages
export const tilPageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contact"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `2rem` }}>
        <Image />
      </div>
      <h1>{data.site.siteMetadata.title}</h1>
      <Contact />
    </Layout>
  )
}

export default IndexPage

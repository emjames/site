import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Header from "../components/header"
import Projects from "../components/projects"

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
  const title = data.site.siteMetadata.title
  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle={title}/>
      <h1>{title}</h1>
      <Contact />
      <Projects />
    </Layout>
  )
}

export default IndexPage

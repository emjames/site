import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/mainImage"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Header from "../components/header"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

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
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: `2rem` }}>
        <Image />
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark Mode
            </label>
          )}
        </ThemeToggler>
      </div>
      <h1>{title}</h1>
      <Contact />
    </Layout>
  )
}

export default IndexPage

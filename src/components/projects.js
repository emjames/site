import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Projects= () => {
  const data = useStaticQuery(graphql`
    query SiteProjectQuery {
      site {
        siteMetadata {
          projects {
            about,
            url,
            title,
          }
        }
      }
    }
  `)

  const links = data.site.siteMetadata.projects;

  console.log(links)

  return (
    <div id="Projects">
      <h3 style={{ marginTop: '1.45em'}}>Projects</h3>
      {
        links.map(link => (
          <div>
              <a style={{padding: '0.3em'}} href={link.url}>{link.title}</a>
              <p style={{paddingLeft: '1em', opacity: '0.7'}}>{link.about}</p>
          </div>
        ))
      }

    </div>
  )
}

export default Projects

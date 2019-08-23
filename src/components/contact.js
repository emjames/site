import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query SiteContactQuery {
      site {
        siteMetadata {
          contact {
            url,
            title
          }
        }
      }
    }
  `)

  const links = data.site.siteMetadata.contact;

  console.log(links)

  return (
    <div id="Contact">
      {
        links.map(link => (
          <a style={{padding: '0.3em'}} href={link.url}>{link.title}</a>
        ))
      }

    </div>
  )
}

export default Contact
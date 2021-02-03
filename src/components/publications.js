import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Parse the authors string into an array
const parseAuthors = (authors) => {
    const siteAuthor = "Emanuel Jaimes";

    // Index of the start of the siteAuthor 
    const startIndex = authors.indexOf(siteAuthor);

    // If no index was found, just return the same string
    if (startIndex < 0) return authors;
    const formattedAuthors = [authors.substr(0, startIndex),
                              siteAuthor,
                              authors.substr(startIndex + siteAuthor.length)];

    return formattedAuthors;
}

const Publications= () => {
  const data = useStaticQuery(graphql`
    query SitePublicationsQuery {
      site {
        siteMetadata {
          publications {
            authors,
            loc,
            url,
            title,
          }
        }
      }
    }
  `)

  const pubs = data.site.siteMetadata.publications;

  return (
    <div id="Publications">
      <h3 style={{ marginTop: '1.45em'}}>Publications</h3>
      {
        pubs.map(pub => (
          <div>
            <p>
              <b>{pub.title}</b>
              <p style={{marginBottom: '0', paddingLeft: '1em', opacity: '0.7'}}>
                  {parseAuthors(pub.authors).map((currAuthor, index) => {
                      // The index of the array returned by parseAuthor is:
                      // 0 = authors on the left of the site author
                      // 1 = site author
                      // 2 = authors on the right of the site author
                      if (index === 1) {
                        // Emphasize the site author
                        return <i>{currAuthor}</i>
                      } else {
                          return currAuthor
                      }
                  })}
              </p>
              <a href={pub.url} style={{paddingLeft: '1em', opacity: '0.7'}}>{pub.url}</a>
            </p>
          </div>
        ))
      }

    </div>
  )
}

export default Publications

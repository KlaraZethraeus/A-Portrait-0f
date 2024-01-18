import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <nav className="flex items-center justify-center p-4 bg-gray-200">
      <ul className="flex list-none space-x-8">
        {data &&
          data.site.siteMetadata.menuLinks.map(link => (
            <li className="pr-8" key={link.name}>
              <Link to={link.link} className="text-black hover:text-green-800">
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Navigation

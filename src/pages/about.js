import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import ResumePage from "../components/resume"

const AboutPage = ({ data }) => {
  console.log(data)

  const about = data.contentfulAbout
  console.log(about?.aboutinfo)
  if (!about) return null

  return (
    <Layout pageTitle="">
      <div>
        <main className="text-gray-800 p-12 font-sans">
          <Link to="/">Back to home</Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mb-8" key={about.id}>
              <h2 className="text-xl font-bold mb-2">{about.abouttitle}</h2>
              {about.img && about.img.url && (
                <img src={about.img.url} alt={about.abouttitle} />
              )}
              {about.aboutinfo && (
                <div className="mb-4">
                  {documentToReactComponents(JSON.parse(about.aboutinfo.raw))}
                </div>
              )}
              {about.shortBio && (
                <div className="mb-4">
                  {documentToReactComponents(JSON.parse(about.shortBio.raw))}
                </div>
              )}
            </div>
            <ResumePage data={data} />
          </div>
        </main>
      </div>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export const query = graphql`
  query AboutPage {
    contentfulAbout(contentful_id: { eq: "2HZdlDsSAntxz6Es4eJvI1" }) {
      id
      aboutslug
      abouttitle
      img {
        url
      }
      list
      aboutinfo {
        raw
      }
      shortBio {
        raw
      }
    }
  }
`

export default AboutPage
// import * as React from "react"
// // import { Link } from "gatsby"
// import Layout from "../components/layout"

// import { StaticImage } from "gatsby-plugin-image"

// const AboutPage = () => {
//   return (
//     <Layout pageTitle="About Me">
//       <p>
//         Hi there! I'm the proud creator of this site, which I built with Gatsby.
//       </p>
//       <StaticImage alt="En bild" src="../images/IMG_0350.jpg" />
//     </Layout>
//     // <main>
//     //   <h1>About Me</h1>
//     //   <Link to="/">Back to Home</Link>
//     //   <p>
//     //     Hi there! I'm the proud creator of this site, which I built with Gatsby.
//     //   </p>
//     // </main>
//   )
// }
// export const Head = () => <title>About Me</title>
// export default AboutPage

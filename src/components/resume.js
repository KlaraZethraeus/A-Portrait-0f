import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"

const ResumePage = ({ data }) => {
  console.log(data)

  if ("allContentfulResume" in data) {
    const Resume = data.allContentfulResume?.nodes
    console.log(Resume)
    // if (!resume) return null
    return (
      <Layout pageTitle="">
        <div>
          <main className="text-gray-800 p-12 font-sans">
            <Link to="/">Back to home</Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Resume.map(resume => (
                <div className="mb-8" key={resume.id}>
                  <h2 className="text-xl font-bold mb-2">
                    {resume.resumetitle}
                  </h2>
                  {resume.resumeinfo && (
                    <div className="mb-4">
                      {documentToReactComponents(
                        JSON.parse(resume.resumeinfo.raw)
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </Layout>
    )
  }

  // Handle the case when data doesn't have 'allContentfulResume'
  return null
}

export const query = graphql`
  query ResumePage {
    allContentfulResume {
      nodes {
        id
        resumeinfo {
          raw
        }
        resumetitle
        resumslug
      }
    }
  }
`

export default ResumePage

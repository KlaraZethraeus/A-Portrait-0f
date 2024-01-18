import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import CategoryPage from "../components/category"

const ProjectPage = ({ data }) => {
  console.log(data)

  const Portfolio = data.allContentfulPortfolio.nodes
  console.log(Portfolio)

  return (
    // <Layout pageTitle="Byt mot contentful title">
    <Layout pageTitle="">
      <div>
        <main className="text-gray-800 p-12 font-sans">
          <h1 className="text-3xl mb-12">
            {/* A Portrait Of */}
            <br />
            {/* <span className="text-indigo-600">text info om portfolion</span> */}
          </h1>
          <CategoryPage data={data} />
          <div>
            {Portfolio.map(portfolio => (
              <div key={portfolio.id}>
                {/* Project */}
                <h2>{portfolio.title}</h2>
                {/* name project */}
                <h3>{portfolio.subtitle}</h3>
                {portfolio.description && (
                  <div>
                    {documentToReactComponents(
                      JSON.parse(portfolio.description.raw)
                    )}
                  </div>
                )}

                {/* kz logo + bild gifter oss + barnen cyklar */}
                {portfolio.image && portfolio.image.file && (
                  <img src={portfolio.image.file.url} alt={portfolio.title} />
                )}
              </div>
            ))}
          </div>
          {/* <p className="mb-12">
            Edit <code className="bg-yellow-200 p-1">src/pages/index.tsx</code>
          </p> */}
        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPage {
    allContentfulPortfolio(limit: 4) {
      nodes {
        id
        title
        subtitle
        description {
          raw
        }
        image {
          file {
            url
          }
        }
        gallery {
          file {
            url
          }
        }
        category
      }
    }
  }
`
export default ProjectPage

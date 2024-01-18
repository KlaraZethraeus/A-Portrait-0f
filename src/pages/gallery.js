import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"

const GalleryPage = ({ data }) => {
  const Portfolio = data.allContentfulPortfolio.nodes

  return (
    <Layout pageTitle="">
      <div>
        <main className="text-gray-800 p-12 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Portfolio.map(portfolio => (
              <div key={portfolio.id} className="mb-8 flex flex-col h-full">
                {/* Project Title */}
                <h2 className="text-lg font-semibold mb-2">
                  {portfolio.title}
                </h2>

                {/* Image */}
                {portfolio.image && portfolio.image.file && (
                  <img
                    src={portfolio.image.file.url}
                    alt={portfolio.title}
                    className="mb-4 object-cover w-full h-48"
                  />
                )}

                {/* Subtitle */}
                <h3 className="text-gray-600 text-sm mb-2">
                  {portfolio.subtitle}
                </h3>

                {/* Description */}
                {portfolio.description && (
                  <div className="mb-4">
                    {documentToReactComponents(
                      JSON.parse(portfolio.description.raw)
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

export const query = graphql`
  query GalleryPage {
    allContentfulPortfolio(limit: 6) {
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
      }
    }
  }
`

export default GalleryPage

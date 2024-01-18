import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
// import CategoryPage from "../components/category"

const IndexPage = ({ data }) => {
  console.log(data)

  const Portfolio = data.allContentfulPortfolio.nodes
  console.log(Portfolio)
  console.log("")
  return (
    <Layout pageTitle="">
      <div>
        {/* <main className="text-gray-800 p-12 font-sans"> */}
        {/* <CategoryPage data={data} /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Portfolio.map(portfolio => (
            <div className="mb-8" key={portfolio.id}>
              <h2 className="text-xl font-bold mb-2">{portfolio.title}</h2>
              {portfolio.image && portfolio.image.file && (
                <img src={portfolio.image.file.url} alt={portfolio.title} />
              )}
              {/* console.log(portfolio.gallery) */}
              {portfolio.gallery.map(gallery => (
                <img src={gallery.file.url} alt={portfolio.title} />
              ))}
              <h3 className="text-gray-600">{portfolio.subtitle}</h3>
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
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allContentfulPortfolio(filter: { node_locale: { eq: "en-US" } }) {
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

export default IndexPage
// import * as React from "react"
// import { Link, graphql } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import Seo from "../components/seo"

// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const posts = data.allMarkdownRemark.nodes

//   if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <Bio />
//         <p>
//           No blog posts found. Add markdown posts to "content/blog" (or the
//           directory you specified for the "gatsby-source-filesystem" plugin in
//           gatsby-config.js).
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout location={location} title={siteTitle}>
//       <Bio />
//       <ol style={{ listStyle: `none` }}>
//         {posts.map(post => {
//           const title = post.frontmatter.title || post.fields.slug

//           return (
//             <li key={post.fields.slug}>
//               <article
//                 className="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     {/* <Link to="/about">About</Link> */}
//                     <Link to={post.fields.slug} itemProp="url">
//                       <span itemProp="headline">{title}</span>
//                     </Link>
//                   </h2>
//                   <small>{post.frontmatter.date}</small>
//                 </header>
//                 <section>
//                   <p
//                     dangerouslySetInnerHTML={{
//                       __html: post.frontmatter.description || post.excerpt,
//                     }}
//                     itemProp="description"
//                   />
//                 </section>
//               </article>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export default BlogIndex

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="All posts" />

// export const pageQuery = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `

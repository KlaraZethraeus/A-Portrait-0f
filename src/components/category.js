import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const CategoryPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const allPosts = data.allContentfulPortfolio.nodes || []

  // Filtrera bort null-värden från kategorier
  const categories = [
    "All",
    ...new Set(allPosts.map(post => post.category).filter(Boolean)),
  ]

  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter(post => post.category === selectedCategory)
  useEffect(() => {
    setSelectedCategory(categories)
  }, [])

  if (allPosts.length === 0) {
    return <p>Loading...</p> // Visa laddningsindikator tills data hämtas
  }

  return (
    // <Layout pageTitle="Category">
    <div>
      <select onChange={e => setSelectedCategory(e.target.value)}>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div>
        {filteredPosts.map((node, index) => (
          <div key={index}>
            <h1>
              <Link to={""}>{node.title}</Link>
            </h1>
            <h3>{node.subtitle}</h3>

            {node.description?.raw &&
              documentToReactComponents(JSON.parse(node.description.raw))}

            <i>Kategori: {node.category}</i>
            <img src={node.gallery[0].file.url} alt="bild" width="400" />
          </div>
        ))}
      </div>
      {/* <StaticImage alt="En bild" src="../images/IMG_0350.jpg" /> */}
    </div>
    // </Layout>
  )
}

export const Head = () => <title>Category</title>

export const query = graphql`
  query CategoryPage {
    allContentfulPortfolio {
      edges {
        node {
          id
          subtitle
          title
          category
          description {
            raw
          }
          gallery {
            file {
              url
            }
          }
          slug
        }
      }
    }
  }
`

export default CategoryPage

// import React, { useState } from "react"
// import { graphql, Link } from "gatsby"
// import Layout from "../components/layout"
// import { StaticImage } from "gatsby-plugin-image"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// const CategoryPage = ({ data }) => {
//   console.log(data)
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const allPosts = data.allContentfulPortfolio.edges
//   const categories = [
//     "All",
//     ...new Set(allPosts.map(post => post.node.category)),
//   ]
//   const filteredPosts =
//     selectedCategory === "All"
//       ? allPosts
//       : allPosts.filter(post => post.node.category === selectedCategory)

//   return (
//     <Layout pageTitle="Category">
//       <select onChange={e => setSelectedCategory(e.target.value)}>
//         {categories.map(category => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//       <div>
//         {filteredPosts.map(({ node }, index) => (
//           <div key={index}>
//             <h1>
//               <Link to={node.slug ?? ""}>{node.title}</Link>
//             </h1>
//             <h3>{node.subtitle}</h3>
//             <p>
//               {node.description?.raw &&
//                 documentToReactComponents(JSON.parse(node.description.raw))}
//             </p>
//             <i>Kategori: {node.category}</i>
//             <img src={node.image.file.url} alt="bild" width="400" />
//           </div>
//         ))}
//       </div>
//       <StaticImage alt="En bild" src="../images/IMG_0350.jpg" />
//     </Layout>
//   )
// }

// export const Head = () => <title>Category</title>

// export const query = graphql`
//   query CategoryPage {
//     allContentfulPortfolio {
//       edges {
//         node {
//           id
//           subtitle
//           title
//           category
//           description {
//             raw
//           }
//           gallery {
//             file {
//               url
//             }
//           }
//           slug
//         }
//       }
//     }
//   }
// `

// export default CategoryPage

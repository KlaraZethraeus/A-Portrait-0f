import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container mx-auto max-w-2xl font-sans">
      {/* title på webbplatsen */}
      <header className="text-gray-700 text-3xl font-bold mb-6 text-center mt-8">
        {data.site.siteMetadata.title}
      </header>
      <Navigation />
      <main className="mb-8">
        {pageTitle && (
          <h1 className="text-rebeccapurple text-2xl">{pageTitle}</h1>
        )}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
// import * as React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import {
//   container,
//   heading,
//   navLinks,
//   navLinkItem,
//   navLinkText,
//   siteTitle,
// } from "./layout.module.css"

// //pagetitle? kaka på kaka
// const Layout = ({ pageTitle, children }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <div className={container}>
//       <header className={siteTitle}>{data.site.siteMetadata.title}</header>
//       <nav>
//         <ul className={navLinks}>
//           <li className={navLinkItem}>
//             <Link to="/">Home</Link>
//           </li>
//           <li className={navLinkItem}>
//             <Link to="/about" className={navLinkText}>
//               About
//             </Link>
//           </li>
//           <li className={navLinkItem}>
//             <Link to="/contact" className={navLinkText}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <main>
//         <h1 className={heading}>{pageTitle}</h1>
//         {children}
//       </main>
//     </div>
//   )
// }
// export default Layout
// import * as React from "react"
// import { Link } from "gatsby"

// const Layout = ({ location, title, children }) => {
//   const rootPath = `${__PATH_PREFIX__}/`
//   const isRootPath = location.pathname === rootPath
//   let header

//   if (isRootPath) {
//     header = (
//       <h1 className="main-heading">
//         <Link to="/">{title}</Link>
//       </h1>
//     )
//   } else {
//     header = (
//       <Link className="header-link-home" to="/">
//         {title}
//       </Link>
//     )
//   }

//   return (
//     <div className="global-wrapper" data-is-root-path={isRootPath}>
//       <header className="global-header">{header}</header>
//       <main>{children}</main>
//       <footer>
//         © {new Date().getFullYear()}, Built with
//         {` `}
//         <a href="https://www.gatsbyjs.com">Gatsby</a>
//       </footer>
//     </div>
//   )
// }

// export default Layout

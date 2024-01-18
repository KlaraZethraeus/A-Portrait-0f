import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import { Link } from "gatsby"

const ContactPage = ({ data }) => {
  console.log(data)

  const Contacts = data.contentfulContact
  console.log(Contacts?.contactinfo)
  if (!Contacts) return null

  return (
    <Layout pageTitle="">
      <div>
        <main className="text-gray-800 p-12 font-sans">
          <Link to="/">Back to home</Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mb-8" key={Contacts.id}>
              <h2 className="text-xl font-bold mb-2">
                {Contacts.contacttitle}
              </h2>
              {Contacts.img && Contacts.img.url && (
                <img src={Contacts.img.url} alt={Contacts.contacttitle} />
              )}
              <h3 className="text-gray-600">{Contacts.subtitle}</h3>
              {Contacts.uppgifter && (
                <div className="mb-4">
                  {documentToReactComponents(
                    JSON.parse(Contacts.uppgifter.raw)
                  )}
                </div>
              )}
              {Contacts.contactinfo && (
                <div className="mb-4">
                  {documentToReactComponents(
                    JSON.parse(Contacts.contactinfo.raw)
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Contact Page</title>

export const query = graphql`
  query ContactPage {
    contentfulContact(contentful_id: { eq: "6HGdw5lIn2tLyRoH0NeuE9" }) {
      id
      contacttitle
      subtitle
      contactslug
      uppgifter {
        raw
      }
      contactinfo {
        raw
      }
      img {
        url
      }
    }
  }
`

export default ContactPage
// import * as React from "react"
// // import { Link } from "gatsby"
// import Layout from "../components/layout"

// const ContactPage = () => {
//   return (
//     <Layout pageTitle="Contact Me">
//       <p>My contact</p>
//     </Layout>
//   )
// }
// export const Head = () => <title>About Me</title>
// export default ContactPage

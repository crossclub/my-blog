import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import twitter from "../assets/img/sns_tw.png"
import instagram from "../assets/img/sns_ins.png"
import "../styles/contact.scss"
// import Bio from "../components/bio"
// import { rhythm } from "../utils/typography"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <div>
        <h1 className={"headline"}>
          <span className={"en"} lang="en">
            Contact
          </span>
          <span className={"jp"}>お問い合わせ</span>
        </h1>
      </div>
      <p style={{ textAlign: "center" }}>
        ご依頼・ご相談は、以下からご連絡ください。
      </p>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

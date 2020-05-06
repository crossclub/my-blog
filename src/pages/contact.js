import React from "react"
// import { Link, graphql } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/contact.scss"
// import Bio from "../components/bio"
// import { rhythm } from "../utils/typography"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <div className={"main_container"}>
        <div className={"page_title"}>
          <h1 className={"headline"}>
            <span className={"en"} lang="en">
              Contact
            </span>
            <span className={"jp"}>お問い合わせ</span>
          </h1>
        </div>
        <p style={{ textAlign: "center" }}>
          ご依頼・ご相談は以下からご連絡ください。
        </p>
        <div className={"center_center"} style={{ textAlign: "center" }}>
          <div className={"twitter"}>
            <a href="https://twitter.com/crossclub_t" target="blank">
              Twitter
            </a>
          </div>
          <div className={"instagram"}>
            <a href="https://www.instagram.com/crossclub_t/" target="blank">
              Instagram
            </a>
          </div>
          <div className={"gmail"}>
            <a href="mailto:crossclub.t21@gmail.com">Gmail</a>
          </div>
        </div>
      </div>
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

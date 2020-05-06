import React from "react"
// import { Link, graphql } from "gatsby"
import { graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const Profile = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Profile" />
      <div className={"main_container"}>
        <div className={"page_title"}>
          <h1 className={"headline"}>
            <span className={"en"} lang="en">
              Profile
            </span>
            <span className={"jp"}>プロフィール</span>
          </h1>
        </div>
        <div className={"container"}>
          <div>
            <h4 className={"headline"}>
              <span className={"en"} lang="en">
                Watanabe Takuma
              </span>
            </h4>
          </div>
          <div>
            <p>
              In 1997, Born in Shimane. <br />
              In 2018, moved to Tokyo. <br />
              In 2020, Participation in ARUTEGA Project
            </p>
          </div>
          <div>
            <h4 className={"headline"}>
              <span className={"en"} lang="en">
                Service
              </span>
            </h4>
            <p>
              larcenymodule |コーポレートサイト
              <br />
              青空珈琲部 |コーポレートサイト
              <br />
              etc..
            </p>
          </div>
          <div>
            <h4 className={"headline"}>
              <span className={"en"} lang="en">
                Job Description
              </span>
            </h4>
            <p>
              ・ Direction in web production <br />
              ・ Web design <br />
              ・ HTML/CSS coding <br />
              ・ smartphone site <br />・ CMS introduction <br />
              ・ EC site creation
              <br />
              etc...
            </p>
          </div>
          <div>
            <h4 className={"headline"}>
              <span className={"en"} lang="en">
                Price
              </span>
            </h4>
            <p>
              サイト内容によって異なる為、
              <br />
              是非一度お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile

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

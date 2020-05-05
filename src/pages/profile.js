import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Profile = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Profile" />
      <div>
        <h1 className={"headline"}>
          <span className={"en"} lang="en">
            Profile
          </span>
          <span className={"jp"}>プロフィール</span>
        </h1>
      </div>
      <div>
        <h4 className={"headline"}>
          <span className={"en"} lang="en">
            Watanabe Takuma
          </span>
        </h4>
      </div>
      <div>
        <p>
          1997年　島根生まれ。 <br />
          2018年　東京に上京。 <br />
          2020年　株式会社ARUTEGAプロジェクト参加
        </p>
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
          larcenymodule　| コーポレートサイト
          <br />
          青空珈琲部　| コーポレートサイト
          <br />
          etc..
        </p>
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

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import crossclublog_s from "../assets/img/crossclublog.jpg"
import larcenymodule from "../assets/img/larcenymodule.jpg"
import configure from "../assets/img/configure.jpg"
import my_portfolio from "../assets/img/my_portfolio.jpg"
import Regenschirm from "../assets/img/Regenschirm.jpg"
import Nourritureetvie from "../assets/img/Nourritureetvie.jpg"
import aozoracoffeeclub from "../assets/img/aozoracoffeeclub.jpg"
// import Bio from "../components/bio"
// import { rhythm } from "../utils/typography"

const Works = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Works" />
      <div>
        <h1 className={"headline"}>
          <span className={"en"} lang="en">
            Works
          </span>
          <span className={"jp"}>サイト一覧</span>
        </h1>
      </div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"work_content"}>
            <a>
              <img src={crossclublog_s} alt="crossclublog" />
            </a>
          </div>
          <div className={"work_content"}>
            <a>
              <img src={crossclublog_s} alt="crossclublog" />
            </a>
          </div>
          <div className={"work_content"}>
            <a>
              <img src={crossclublog_s} alt="crossclublog" />
            </a>
          </div>
          <div className={"work_content"}>
            <a>
              <img src={crossclublog_s} alt="crossclublog" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Works

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

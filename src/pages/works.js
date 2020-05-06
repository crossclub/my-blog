import React from "react"
// import { Link, graphql } from "gatsby"
import { graphql } from "gatsby"
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
  // const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Works" />
      <div className={"main_container"}>
        <div className={"page_title"}>
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
              <figure className={"hover_parent"}>
                <img src={aozoracoffeeclub} alt="aozoracoffeeclub" />
                <figcaption className={"hover_mask"}>
                  <a href="https://aozoracoffeeclub.com/" target="blank">
                    https://aozoracoffeeclub.com/
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className={"work_content"}>
              <figure className={"hover_parent"}>
                <img src={Nourritureetvie} alt="Nourritureetvie" />
                <figcaption className={"hover_mask"}>
                  <a
                    href="https://watakuma21.xsrv.jp/Nourritureetvie/"
                    target="blank"
                  >
                    https://watakuma21.xsrv.jp/Nourritureetvie/
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className={"work_content"}>
              <figure className={"hover_parent"}>
                <img src={Regenschirm} alt="Regenschirm" />
                <figcaption className={"hover_mask"}>
                  <a
                    href="https://watakuma21.xsrv.jp/Regenschirm/"
                    target="blank"
                  >
                    https://watakuma21.xsrv.jp/Regenschirm/
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className={"work_content"}>
              <figure className={"hover_parent"}>
                <img src={my_portfolio} alt="my_portfolio" />
                <figcaption className={"hover_mask"}>
                  <a href="https://watanabetakuma.work" target="blank">
                    https://watanabetakuma.work
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className={"work_content"}>
              <figure className={"hover_parent"}>
                <img src={configure} alt="configure" />
                <figcaption className={"hover_mask"}>
                  <a
                    href="https://watakuma21.xsrv.jp/Configure/"
                    target="blank"
                  >
                    https://watakuma21.xsrv.jp/Configure/
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className={"work_content"}>
              <figure className={"hover_parent"}>
                <img src={larcenymodule} alt="larcenymodule" />
                <figcaption className={"hover_mask"}>
                  <a href="https://larcenymodule.com/" target="blank">
                    https://larcenymodule.com/
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className={"work_content"}>
              <figure className={"hover_parent"}>
                <img src={crossclublog_s} alt="crossclublog" />
                <figcaption className={"hover_mask"}>
                  <a href="https://crossclublog.com/" target="blank">
                    https://crossclublog.com/
                  </a>
                </figcaption>
              </figure>
            </div>
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

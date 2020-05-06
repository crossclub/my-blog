import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="HOME" />
      <div className={"main_container_index"}>
        <div>
          <div class="iphone">
            <div class="iphone-top">
              <span class="camera"></span>
              <span class="sensor"></span>
              <span class="speaker"></span>
            </div>
            <div class="top-bar"></div>
            <div class="iphone-screen">
              <div className={"ball_box"}>
                <div class="container_ball">
                  <div class="ball">P</div>
                  <div class="ball">O</div>
                  <div class="ball">R</div>
                </div>
                <div class="container_ball">
                  <div class="ball">T</div>
                  <div class="ball">F</div>
                  <div class="ball">O</div>
                </div>
                <div class="container_ball">
                  <div class="ball">L</div>
                  <div class="ball">I</div>
                  <div class="ball">O</div>
                </div>
                <div class="container_ball" style={{ marginTop: "40%" }}>
                  <div style={{ textAlign: "center", color: "#fff" }}>
                    <p>サイト覗いていただいてありがとうございます！</p>
                    <p>現在は、東京でWEB制作のお仕事を中心に活動しています。</p>
                    <p>
                      こちらのサイトにて、不定期ではありますが日記の方を書いていくので、
                    </p>
                    <p>時間のあるときに覗いてみてください。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="buttons">
              <span class="on-off"></span>
              <span class="sleep"></span>
              <span class="up"></span>
              <span class="down"></span>
            </div>
            <div class="bottom-bar"></div>
            <div class="iphone-bottom">
              <span></span>
            </div>
          </div>
        </div>
        <div>
          <h4 className={"headline"}>
            <span className={"en"} lang="en">
              Blog
            </span>
          </h4>
        </div>
        <div className={"container"}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

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

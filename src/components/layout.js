import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  // ナビゲーションバーに表示するリンク
  const NavMenuItem = ["Home", "Profile", "Blog", "Works", "Contact"]

  // アクティブになったリンクは色を反転させる
  const ActiveStyles = {
    background: "white",
    color: "rebeccapurple",
    fontWeight: "bold",
  }

  // ナビゲーションリンクの作成
  const NavMenuLiTag = NavMenuItem.map(item => {
    let page_link = ""
    if (item === "Home") {
      page_link = "/"
    } else page_link = "/" + item.toLowerCase() + "/"

    return (
      <li key={page_link} className={"luxbar-item"}>
        <Link to={page_link} activeStyle={ActiveStyles}>
          {item}
        </Link>
      </li>
    )
  })
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: "100%",
        // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header id="luxbar" class="luxbar-fixed">
        <input type="checkbox" class="luxbar-checkbox" id="luxbar-checkbox" />
        <div class="luxbar-menu luxbar-menu-right luxbar-menu-material-cyan">
          <ul class="luxbar-navigation">
            <li class="luxbar-header">
              <Link className="luxbar-brand" to="/">
                Watanabe Takuma
              </Link>
              <label
                class="luxbar-hamburger luxbar-hamburger-doublespin"
                id="luxbar-hamburger"
                for="luxbar-checkbox"
              >
                <span></span>
              </label>
            </li>
            {NavMenuLiTag}
          </ul>
        </div>
      </header>
      <main className={"main_container"}>{children}</main>
    </div>
  )
}

export default Layout

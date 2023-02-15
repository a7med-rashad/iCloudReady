import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { MdShoppingCart } from "react-icons/md"
import { RiFridgeFill } from "react-icons/ri"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"
import { Layout, theme } from "antd"
import CartSider from "./cart_sider"
import KitchenSider from "./kitchen_sider"
const { Header, Footer, Content } = Layout

const Layoutt = ({ children }) => {
  const [cartToggle, setCartToggle] = useState(false)
  const [kitchenToggle, setKitchenToggle] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout className="container">
      <div className="layout_content">
        <Header
          className="header"
          siteTitle={data.site.siteMetadata?.title || `Title`}
          style={{
            display: "steaky",
            zIndex: 100,
            width: "100%",
            height: "100%",
            backgroundColor: "#F8F8F8",
          }}
        >
          <div className="header_brand">
            <Link className="brand_link" to="/">
              Welcome to iCloudReady!
              <p>
                You have started your <span>30 day trial</span>
              </p>
            </Link>
          </div>
          <div className="client">
            <div className="avatars">
              <StaticImage
                className="avatar-img one"
                src="../images/Image18.png"
              />
              <StaticImage
                className="avatar-img two"
                src="../images/Image17.png"
              />
              <StaticImage
                className="avatar-img three"
                src="../images/Image16.png"
              />
              <StaticImage
                className="avatar-img four"
                src="../images/Image15.png"
              />
              <p>+3</p>
            </div>
            <div className="avatar-text">
              <h4>Our architects are here to help</h4>
              <p>Book a free session</p>
            </div>
          </div>
          <div className="header-icons">
            <div className="cart-icon" onClick={() => kitchenToggle? setCartToggle(false): setCartToggle(true)}>
              <MdShoppingCart />
              <div className="cart-number" >
                2
              </div>
            </div>
            <div className="kitchen-icon" onClick={() => cartToggle? setKitchenToggle(false):setKitchenToggle(true)}>
              <RiFridgeFill />
              <div className="kitchen-number">2</div>
            </div>
          </div>
        </Header>
        <Content className="content">{children}</Content>
        <Footer className="footer">
          <span>Got questions?</span> Take a look at our
          <a href="https://www.gatsbyjs.com">FAQs</a>, talk to us on Twitter
          <a href="https://www.gatsbyjs.com">@icloudready </a>or send an email
          to
          <a href="https://www.gatsbyjs.com">team@icloud-ready.com</a>
        </Footer>
      </div>
      <div className="layout-sider">
        <div className={`${cartToggle ? "cart-sider-flex" : "cart-sider-none"}`}>
          <CartSider toggleCart={cartToggle => setCartToggle(cartToggle)} />
        </div>
        <div className={`${kitchenToggle ? "kitchen-sider-flex" : "kitchen-sider-none"}`}>
          <KitchenSider toggleKitchen={kitchenToggle => setKitchenToggle(kitchenToggle)}/>
        </div>
      </div>
    </Layout>
  )
}

export default Layoutt

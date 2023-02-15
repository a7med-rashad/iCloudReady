import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../components/contnet.css"
import { VscLinkExternal } from "react-icons/vsc"
import { TfiPlus } from "react-icons/tfi"
import { BsGem } from "react-icons/bs"
import { BsGearFill } from "react-icons/bs"
import { BiMenuAltRight } from "react-icons/bi"
import Layout from "../components/layout"
import { Card, Space } from "antd"

const IndexPage = () => (
  <>
    <Layout>
      <div className="content-container">
        <div className="content-title">
          <div className="title-text">
            <h1>Get Support</h1>
            <div>
              <BsGem />
            </div>
          </div>
          <div className="title-icon">
            <BiMenuAltRight />
          </div>
        </div>
        <Space direction="horizontal" className="all-cards">
          <div className="card">
            <Space direction="vertical">
              <div className="card-img">
                <StaticImage className="image" src="../images/photo1.png" />
              </div>
              <Space
                direction="vertical"
                className="card-data"
                style={{ backgroundColor: "#0A488F" }}
              >
                <Space direction="vertical" className="card-text">
                  <p className="one">Customer Engagement</p>
                  <p className="two">
                    Get your own mobile app for industry specific
                  </p>
                </Space>
                <Space direction="horizontal" className="card-options">
                  <h4>100 DTSU*</h4>
                  <div className="card-icons">
                    <Link to="/card_1" className="external">
                      <VscLinkExternal />
                    </Link>
                    <div className="plus">
                      <TfiPlus />
                    </div>
                  </div>
                </Space>
              </Space>
            </Space>
          </div>
          <div className="card">
            <Space direction="vertical">
              <div className="card-img">
                <StaticImage className="image" src="../images/photo2.png" />
              </div>
              <Space
                direction="vertical"
                className="card-data"
                style={{ backgroundColor: "#579064" }}
              >
                <Space direction="vertical" className="card-text">
                  <p className="one">Actionable Insighets</p>
                  <p className="two">Create Dashboards</p>
                </Space>
                <Space direction="horizontal" className="card-options">
                  <h4>100 DTSU*</h4>
                  <div className="card-icons">
                  <Link to="card_2" className="external">
                      <VscLinkExternal />
                    </Link>
                    <div className="plus">
                      <TfiPlus />
                    </div>
                  </div>
                </Space>
              </Space>
            </Space>
          </div>
          <div className="card">
            <Space direction="vertical">
              <div className="card-img">
                <StaticImage className="image" src="../images/photo3.png" />
              </div>
              <Space
                direction="vertical"
                className="card-data"
                style={{ backgroundColor: "#950000" }}
              >
                <Space direction="vertical" className="card-text">
                  <p className="one">Employees Productivity</p>
                  <p className="two">
                    KPI Builder , Work Conf,Create Oracle Requests
                  </p>
                </Space>
                <Space direction="horizontal" className="card-options">
                  <h4>50 DTSU*</h4>
                  <div className="card-icons">
                  <Link to="/card_3" className="external">
                      <VscLinkExternal />
                    </Link>
                    <div className="plus">
                      <TfiPlus />
                    </div>
                  </div>
                </Space>
              </Space>
            </Space>
          </div>
          <div className="card">
            <Space direction="vertical">
              <div className="card-img">
                <StaticImage className="image" src="../images/photo4.png" />
              </div>
              <Space
                direction="vertical"
                className="card-data"
                style={{ backgroundColor: "#8F6C0A" }}
              >
                <Space direction="vertical" className="card-text">
                  <p className="one">Operations Excellence</p>
                  <p className="two">Tenant/lessee Managment</p>
                </Space>
                <Space direction="horizontal" className="card-options">
                  <h4>100 DTSU*</h4>
                  <div className="card-icons">
                  <Link to="/card_4" className="external">
                      <VscLinkExternal />
                    </Link>
                    <div className="plus">
                      <TfiPlus />
                    </div>
                  </div>
                </Space>
              </Space>
            </Space>
          </div>
        </Space>
        <div className="down-data">
          <div className="down-1">
            <div>
              <BsGearFill />
            </div>
            <p>
              Remaining DTSUs : <span>200</span>
            </p>
          </div>
          <div className="down-2">
            <div>
              <BsGearFill />
            </div>
            <p>
              Consumed DTSUs : <span>350</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </>
)
export default IndexPage

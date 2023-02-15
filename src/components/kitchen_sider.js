import React from "react"
import "./sider.css"
import "./layout.css"
import { motion } from "framer-motion"
import { CgClose } from "react-icons/cg"
import { MdShoppingCart } from "react-icons/md"

const KitchenSider = ({toggleKitchen}) => {
  return (
    <>
      <div className="sider-header">
        <div className="sider-icon" onClick={() => toggleKitchen(false)}>
          <CgClose />
        </div>
        <p>Your Run Kitchen</p>
        <div>
          <div className="sider-number">0</div>
        </div>
      </div>
      <div className="sider-content_k">
        <div className="empty-icon">
          <MdShoppingCart />
        </div>
        <h4>Your run cart is empty!</h4>
        <p className="empty-text">start add your requests here</p>
      </div>
    </>
  )
}

export default KitchenSider

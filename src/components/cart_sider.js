import React from "react"
import "./sider.css"
import "./layout.css"
import { Button, Divider, InputNumber } from "antd"
import { CgClose } from "react-icons/cg"
import { FiBox } from "react-icons/fi"
import { FaTrash } from "react-icons/fa"


const CartSider = ({toggleCart}) => {


  return (
    <>
      <div className="sider-header">
        <div className="sider-icon" onClick={() => toggleCart(false)} >
          <CgClose />
        </div>
        <p>Your Run Cart</p>
        <div>
          <div className="sider-number">0</div>
        </div>
      </div>
      <Divider />
      <div className="sider-content">
        <div className="title">
          <p>Product</p>
          <div>
            <p>Qty.</p>
            <p>Remove</p>
          </div>
        </div>
        <Divider />
        <div className="product">
          <div className="product-text">
            <div className="product-icon">
              <FiBox />
            </div>
            <div>
              <h5>Smart Checklist</h5>
              <p>Default Title, 12.00 DTSU</p>
            </div>
          </div>
          <InputNumber
            min={1}
            max={10}
            className="input-number"
            defaultValue={2}
          />
          <div className="trash-icon">
            <FaTrash />
          </div>
        </div>
        <Divider />
        <div className="product">
        <div className="product-text">
            <div className="product-icon">
              <FiBox />
            </div>
            <div>
              <h5>Smart Checklist</h5>
              <p>Default Title, 12.00 DTSU</p>
            </div>
          </div>
          <InputNumber
            min={1}
            max={10}
            className="input-number"
            defaultValue={2}
          />
          <div className="trash-icon">
            <FaTrash />
          </div>
        </div>
        <Divider plain></Divider>
        <div className="sider-data">
          <h5>Subtotal</h5>
          <p>1.00 DTSUs</p>
        </div>
        <div className="sider-data">
          <h5>New Payment</h5>
          <p>No, Inclusive in your package</p>
        </div>
        <Divider plain></Divider>
        <div className="sider-data">
          <h5>Total Units Consumed</h5>
          <p>1.00 DTSUs</p>
        </div>
        <div className="buttons">
        <Button
          className="primary-button"
          type="primary"
          shape="round"
          size="large"
          block
        >
          Checkout
        </Button>
        <Button
          type="primary"
          className="primary-button"
          shape="round"
          block
          ghost
        >
          Back to Run Information
        </Button>
        </div>
      </div>
    </>
  )
}

export default CartSider

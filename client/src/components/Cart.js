import React from "react"
import { useCart } from "../hooks"
import Icon from "../lib/Icon"
import "../styles/Cart.css"

export default props => {
  const { visible, toggle, cart, total, items, change } = useCart()

  const update = (e, id, quantity) => {
    e.preventDefault()
    change(id, quantity)
  }

  return (
    <div className={visible ? "cart open" : "cart"}>
      <div className="toggle" onClick={toggle}>
        {visible ? (
          <Icon icon="times" />
        ) : (
          <div>
            <Icon icon="shopping-cart" />
            <span>{items}</span>
          </div>
        )}
      </div>
      <div className="cart-products">
        {cart.map(product => (
          <div key={"cart-product" + product.id} className="item">
            <img src={product.pic} alt="whoops" />
            <div className="info">
              <p>{product.brand}</p>
              <p className="title">{product.shoe}</p>
              <p>Size {product.size}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <div className="price">
              <p>${product.price.toFixed(2)}</p>
              <button onClick={e => update(e, product.id, -1)}>-</button>
              <button onClick={e => update(e, product.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="subtotal">
        <div className="total">
          <h3>Subtotal</h3>
          <p>${total}</p>
        </div>
        <button
          onClick={e => alert(`Checkout - Subtotal: ${total}`)}
          className="checkout"
        >
          Checkout
        </button>
      </div>
    </div>
  )
}
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

const ADD_TO_CART = "cart/ADD_TO_CART"
const CART_OPEN = "cart/CART_OPEN"
const CART_CLOSE = "cart/CART_CLOSE"
const CART_TOGGLE = "cart/CART_TOGGLE"
const GET_CART = "cart/GET_CART"
const CHANGE_QUANTITY = "cart/CHANGE_QUANTITY"

const initialState = {
  cart: [],
  open: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: createCart(state.cart, action.payload) }
    case CART_OPEN:
      return { ...state, open: true }
    case CART_CLOSE:
      return { ...state, open: false }
    case CART_TOGGLE:
      return { ...state, open: !state.open }
    case GET_CART:
      return { ...state, cart: action.payload }
    case CHANGE_QUANTITY:
      return {
        ...state,
        cart: updateQuantity(
          state.cart,
          action.payload.id,
          action.payload.amount
        )
      }
    default:
      return state
  }
}

function updateQuantity(arr, id, amount) {
  let quantity = arr.find(i => i.id === id).quantity

  if (quantity === 1 && amount === -1) {
    arr = arr.filter(item => item.id !== id)
  } else {
    arr = arr.map(item => {
      if (id === item.id) {
        item.quantity = item.quantity + amount
        return item
      } else {
        return item
      }
    })
  }

  window.localStorage.setItem("cart", JSON.stringify(arr))

  return arr
}

function createCart(arr, item) {
  if (!arr.find(i => i.id === item.id)) {
    arr.push(item)
  }

  const cart = arr.map(product => {
    if (!product.quantity) {
      product.quantity = 0
    }

    if (product.id === item.id) {
      product.quantity += 1
    }

    return product
  })

  window.localStorage.setItem("cart", JSON.stringify(cart))

  return cart
}

const getCart = () => {
  const cart = JSON.parse(window.localStorage.getItem("cart")) || []

  return {
    type: GET_CART,
    payload: cart
  }
}

const openCart = () => {
  return {
    type: CART_OPEN
  }
}

const closeCart = () => {
  return {
    type: CART_CLOSE
  }
}

const toggleCart = () => {
  return {
    type: CART_TOGGLE
  }
}

const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

const changeQuantity = (id, amount) => {
  return {
    type: CHANGE_QUANTITY,
    payload: {
      id,
      amount
    }
  }
}

export function useCart() {
  const cart = useSelector(appState => appState.cartState.cart)
  const visible = useSelector(appState => appState.cartState.open)
  const dispatch = useDispatch()
  const total = cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)
  const items = cart.reduce((a, b) => a + b.quantity || 0, 0)
  const open = () => dispatch(openCart())
  const close = () => dispatch(closeCart())
  const toggle = () => dispatch(toggleCart())
  const add = item => dispatch(addToCart(item))
  const change = (id, amount) => dispatch(changeQuantity(id, amount))

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  return {
    cart,
    visible,
    add,
    open,
    close,
    toggle,
    total,
    items,
    change
  }
}
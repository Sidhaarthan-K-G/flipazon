import { createContext } from 'react'
import { useState } from 'react'
export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartItem, setCartitem] = useState([])

  const addtocart = (product) => {
    const newProduct = {
      ...product,
      qty: 1,
    }
    setCartitem((prev) => [...prev, newProduct])
  }
  const increaseQty = (id) => {
    setCartitem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    )
  }
  const decreaseQty = (id) => {
    setCartitem((prev) => (
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
    ))
  }
  return (
    <CartContext.Provider value={{ cartItem, addtocart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider

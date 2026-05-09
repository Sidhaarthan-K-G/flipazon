import { createContext } from "react"
import { useState } from "react"
export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartItem, setCartitem] = useState([])
    const addtocart = product => {
        setCartitem(prev => [...prev, product])
    }
    return(
        <CartContext.Provider value={{cartItem, addtocart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider
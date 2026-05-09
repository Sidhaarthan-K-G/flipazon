import './index.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const Cart = () => {
  const { cartItem } = useContext(CartContext)
  return (
    <div>
      {cartItem.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}
export default Cart
import './index.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
const Cart = () => {
  const { cartItem, increaseQty, decreaseQty } = useContext(CartContext)

  return (
    <div className="cart-container">
      {cartItem.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.images[0]} alt={item.title} className="cart-img" />
          <div className="cart-details">
            <p>{item.title}</p>
            <p>${item.price}</p>
            <div className="inc-dec">
              <FaPlusSquare className="cart-btn" onClick={() => increaseQty(item.id)}/>
              <FaMinusSquare className="cart-btn" onClick={() => decreaseQty(item.id)} />
            </div>
            <h3 className="cart-qty">qty: {item.qty}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Cart

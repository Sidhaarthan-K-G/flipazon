import './index.css'
import logo from '../../assets/flipazonlogo2.png'
import { FaSearch, FaShoppingBasket } from 'react-icons/fa'
import Products from '../Products'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem('email')
  const handleAuth = () => {
    if(isLoggedIn){
        localStorage.removeItem('email')
        localStorage.removeItem('pwd')
        navigate('/')
    }
    else{
        navigate('/')
    }
  }
  const home =() =>{
    navigate('/home')
  }
  const products = () => {
    navigate('/products')
  }
  const login = () => {
    navigate('/')
  }
  const cart = () => {
    navigate('/cart')
  }
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="flipazon" className="n-logo" onClick={home} />
        <div className="n-others">
          
          <button type="button" className="btn" onClick={products}>
            Products
          </button>
          <button type="button" className="btn" onClick={cart}>
            <FaShoppingBasket className="fa-shopping" />
          </button>
          <button type="button" className="btn" onClick={handleAuth}>
            {isLoggedIn ? "Login" : "Logout"}
          </button>
        </div>
      </div>
      <hr />
    </>
  )
}
export default Navbar

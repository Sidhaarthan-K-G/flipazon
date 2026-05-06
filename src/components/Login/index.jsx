import logo from '../../assets/flipazonlogo2.png'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      Cookies.set('jwt_token', email, { expires: 1 })
      const token = Cookies.get(email)
      console.log(token)
      navigate('/')
    }
  }
  return (
    <div className="Login">
      <img src={logo} alt="flipazon" className="l-img" />
      <div className="l-login">
        <h1 className="l-heading">Login</h1>
        <form className="l-login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login

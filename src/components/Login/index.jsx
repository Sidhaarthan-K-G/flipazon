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
      localStorage.setItem('email', email)
      localStorage.setItem('pwd', password)
    }
    const storedEmail = localStorage.getItem('email')
    const storedPwd = localStorage.getItem('pwd')
    console.log(storedEmail + ' ' + storedPwd)
    if (storedEmail && storedPwd) {
      navigate('/home')
    }
  }
  return (
    <div className="Login">
      <img src={logo} alt="flipazon" className="l-img" />
      <div className="l-login">
        <h1 className="l-heading">Login</h1>
        <form className="l-login-form" onSubmit={handleSubmit}>
          <input
            className="l-input"
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="l-input"
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login

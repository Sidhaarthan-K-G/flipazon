import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Products from './components/Products'
import Login from './components/Login'
import ProductsPage from './components/ProductsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productspage" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

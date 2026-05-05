import '../Products/index.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const navigate = useNavigate()
  const [Products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()
      setProducts(data.products)
    }
    getProducts()
  }, [])
  const productspage = (products) => {
    navigate('/productspage', {state : products})
  }
  return (
    <div className="main-container">
      <h1 className="p-heading">Products</h1>
      <ul className="p-products-list">
        {Products.map((each) => (
          <li key={each.id} className="p-product-card" onClick={() =>productspage(each)}>
            <img src={each.images[0]} alt={each.title} className="p-img" />
            <h3 className="p-title">{each.title}</h3>
            <div className="p-purchase">
              <p className="p-price-rating">⭐{each.rating} | ${each.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Products

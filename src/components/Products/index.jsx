import './index.css'
import { FaSearch } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()
      setProducts(data.products)
    }
    getProducts()
  }, [])
  const Products = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  })
  const handleProductClick = (product) => {
    navigate('/productspage', { state: product })
  }
  return (
    <div className="product-container">
      <h1 className="p-heading">Products</h1>
      <div className="p-input">
        <FaSearch className="n-search-icon" />
        <input
          type="search"
          className="p-search"
          placeholder="Search Products"
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </div>
      <ul className="p-products-list">
        {Products.map((each) => (
          <li
            key={each.id}
            className="p-product-card"
            onClick={() => handleProductClick(each)}
          >
            <img src={each.images[0]} alt={each.title} className="p-img" />
            <h3 className="p-title">{each.title}</h3>
            <div className="p-purchase">
              <p className="p-price-rating">
                ⭐{each.rating} | ${each.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Products

import './index.css'
import { useLocation } from 'react-router-dom'
import { FaShoppingBag } from 'react-icons/fa'
const ProductsPage = () => {
    const location = useLocation()
    const product = location.state
    return(
        <div className='products-page'>
            <img src = {product.images[0]} alt = {product.title} className='pp-img' />
            <div className='pp-description'>
                <h1 className='pp-title'>{product.title}</h1>
                <h3 className='pp-desc'>{product.description}</h3>
                <h2 className='pp-price-rating'>⭐{product.rating} | ${product.price}</h2>
                <button type='button' className='btn'>
                    <FaShoppingBag className='pp-fa'/>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
export default ProductsPage

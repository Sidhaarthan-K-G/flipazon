import '../Navbar/index.css'
import logo from '../../assets/flipazonlogo2.png'
import { FaSearch } from 'react-icons/fa'
import Products from '../Products'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const products = () => {
        navigate('/products')
    }
    const login = () => {
        navigate('/login')
    }
    return(
        <>
            <div className='navbar'>
                <img src = {logo} alt = 'flipazon' className='n-logo' />
                <div className='n-others'>
                    <FaSearch className='n-search-icon' />
                    <input type = 'search' className='n-search' placeholder='Search Products'/>
                    <button type = 'button' className='btn' onClick = {products}>Products</button>
                    <button type = 'button' className='btn' onClick = {login}>Login</button>

                </div>
            </div>
            <hr />
        </>
    )
}
export default Navbar
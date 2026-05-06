import { useNavigate } from "react-router-dom"
const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    const email = localStorage.getItem('email')
    const pwd = localStorage.getItem('pwd')
    if(!email || !pwd){
        return navigate('/')
    }
    return children
}
export default ProtectedRoute
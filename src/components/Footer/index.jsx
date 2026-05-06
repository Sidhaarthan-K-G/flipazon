import './index.css'
import { FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">
        <p className="f-copyright">© 2026 Flipazon. All rights reserved.</p>
        <div className="f-links">
          <div className="container">
            <FaInstagram className="f-icon" />
            <a href="#" className="f-link">
              @flipazon_official
            </a>
          </div>
          <div className="f-container">
            <FaTwitter className="f-icon" />
            <a href="#" className="f-link">
              @FlipazonOfficial
            </a>
          </div>
          <div className="f-container">
            <FaEnvelope className="f-icon" />
            <a href="#" className="f-link">
              support@flipazon.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer

import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/Ecommerce_Frontend_Assets/Assets/logo.png'
import instagram_icon from '../Assests/Ecommerce_Frontend_Assets/Assets/instagram_icon.png'
import pinterest_icon from '../Assests/Ecommerce_Frontend_Assets/Assets/pintester_icon.png'
import whatsapp_icon from '../Assests/Ecommerce_Frontend_Assets/Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
       
        <p>SHOP<span style={{color:"brown",fontFamily:"cursive"}}>IKO</span></p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
           <a href="https://www.instagram.com/accounts/login/"> <img src={instagram_icon} alt="" /></a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.pinterest.com/ideas/"><img src={pinterest_icon} alt="" /></a>  
        </div>
        <div className="footer-icons-container">
         <a href="https://www.whatsapp.com/accounts/login/"> <img src={whatsapp_icon} alt="" /></a>  
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer

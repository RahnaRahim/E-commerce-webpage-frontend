import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/Ecommerce_Frontend_Assets/Assets/logo.png'
import cart_icon from '../Assests/Ecommerce_Frontend_Assets/Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const { getTotalCartItems } = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
       
        <p>SHOP<span style={{color:"brown"}}>IKO</span></p>

      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}> <Link style={{ textDecoration: 'none' ,color:"brown"}} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}> <Link style={{ textDecoration: 'none',color:"brown" }} to='/mens'>Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}> <Link style={{ textDecoration: 'none',color:"brown" }} to='/womens'>Women</Link> {menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: "none",color:"brown" }} to='/kids'> Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token') ? <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>:
            < Link to = '/login' > <button>Login</button></Link>}
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      <div className='nav-cart-count'>
        {getTotalCartItems()}
      </div>
     </div>

    </div>
      
  
  )
}

export default Navbar

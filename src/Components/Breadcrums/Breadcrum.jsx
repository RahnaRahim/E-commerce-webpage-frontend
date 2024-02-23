import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/Ecommerce_Frontend_Assets/Assets/arrow.png'
const Breadcrum = (props) => {
    const {product}=props
  return (
    <div className='breadcrum'>
       <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
      
    </div>
  )
}

export default Breadcrum

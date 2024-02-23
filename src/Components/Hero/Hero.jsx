import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/Ecommerce_Frontend_Assets/Assets/hand_icon.png'
import arrow_icon from '../Assests/Ecommerce_Frontend_Assets/Assets/arrow.png'
import hero_image from '../Assests/Ecommerce_Frontend_Assets/Assets/hero_image.png'
import newcollection from '../Assests/Ecommerce_Frontend_Assets/Assets/newcollec.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroimg'>
        <img src={newcollection} alt="" />
      </div>

    </div>
  )
}

export default Hero

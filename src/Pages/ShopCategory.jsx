import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import drop_down from '../Components/Assests/Ecommerce_Frontend_Assets/Assets/dropdown_icon.png'
import Item from '../Item/Item'

const ShopCategory = (props) => {
 
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
     <img className='shopcategory-banner'  alt="" />
     <div className="shopcategory-indexSort">
      <p>
        <span>Showing 1-12</span>out of 36 products
      </p>
      <div className="shopcategory-sort">
        Sort by <img src={drop_down} alt="" />
      </div>
     </div>
     <div className="shopcategory-products">
      
      {all_product.map((item,i)=>{
       // console.log(item)
        // console.log(props.category)
        // console.log(item.category)
        if(props.category===item.category)
       
        {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null;
        }
      })}
     </div>
    
    </div>
  )
}

export default ShopCategory
import React, { createContext, useEffect, useState } from "react";

export const ShopContext=createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index <300+1; index++) {
       cart[index]=0;
        
    }
    return cart;
}
const ShopContextProvider=(props)=>{
   //for getting all product from api 
    const [all_product,setAll_product]=useState([])
    const[cartitems,setCartitems]=useState(getDefaultCart())
    useEffect(()=>{//getting data in backend
        fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>setAll_product(data))


        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:'',
        }).then((res)=>res.json()).then((data)=> setCartitems(data))}
    },[] )
   
    const addToCart=(itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            }).then((res)=>res.json()).then((data)=>{
                console.log(data)
            })
        }
    }
    const removeFromCart=(itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            }).then((res)=>res.json()).then((data)=>{
                console.log(data)
            })
        }
    }
    // const getTotalCartAmount=()=>{
    //     let totalAmount=0;
    //     for(const item in cartitems)
    //     {
    //         if(cartitems[item]>0)
    //         {
    //             let itemInfo=all_product.find((product)=>product.id===Number(item))
    //             totalAmount =totalAmount+ (itemInfo.new_price* cartitems[item])
    //         }
            
    //     }return totalAmount;
    // }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                
                // Check if product information is available before accessing properties
                if (itemInfo && itemInfo.new_price) {
                    totalAmount = totalAmount + (itemInfo.new_price * cartitems[item]);
                }
            }
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>{
        let totalItem=0;
        for (const item in cartitems){
            totalItem+=cartitems[item]
        }
        return totalItem
    }
    const contextValue={all_product,cartitems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
            
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
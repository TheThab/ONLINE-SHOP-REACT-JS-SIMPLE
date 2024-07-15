import React,{createContext,  useState} from 'react'
import Product from '../pages/homepage/Product'
import { PRODUCTS } from '../products'


export const HomeContext = createContext(null)

const setDefaultCart=()=>{
    let cart={}

    for(let i=1; i<PRODUCTS.length +1; i++){
        cart[i]=0;
    }
    return cart;
}

function ShopContext(props) {

    const [cartItem, setCartItem]= useState(setDefaultCart())

    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
    }

    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for( const item in cartItem){
            if (cartItem[item] > 0){
                let itemInfo = PRODUCTS.find((Product)=>Product.id === Number(item))
                totalAmount += cartItem[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const updateCartItemCount=(newAmount, itemId)=>{
        setCartItem((prev)=>({...prev,[itemId] : newAmount}))
    }

    const ContextValue ={cartItem, setCartItem, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

    console.log(cartItem)

  return ( 
  <HomeContext.Provider value={ContextValue}>
            {props.children}
        </HomeContext.Provider>
          )
}

export default ShopContext
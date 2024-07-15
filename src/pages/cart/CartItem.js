import React, { useContext } from 'react'
import { HomeContext } from '../../shopcontext/ShopContext';

function CartItem(props) {

const {id, productName, price, productImage}= props.data;
const {addToCart, removeFromCart, cartItem, updateCartItemCount}= useContext(HomeContext)

  return (
    <div className="cartItem">
        <img src={productImage} alt="" />
        <div className="description">
        <p><b>{productName}</b></p>
        <p><b>${price}</b></p>
        <div className="countHandler">
            <button onClick={()=> removeFromCart(id)}>-</button>
            <input value={cartItem[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
            <button onClick={()=> addToCart(id)}>+</button>
        </div>
        </div>
    </div>
  )
}

export default CartItem
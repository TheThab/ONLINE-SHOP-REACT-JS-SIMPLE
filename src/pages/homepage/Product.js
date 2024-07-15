import React, { useContext } from 'react'
import { HomeContext } from '../../shopcontext/ShopContext';

function Product(props) {
    const {id, productName, price, productImage}=props.data;
    const {addToCart, cartItem}= useContext(HomeContext)

//To show how many quantity added in the add to cart button //
    const cartItemNumber = cartItem[id]
  return (
    <div className="product">
      <div>

      <div className="productImg">
       <img src={productImage} alt="" />
      </div>
        
      <div className="description">
        <p><b>{productName}</b></p>
        <p><b>${price}</b></p>
      </div>
        <button className="cartBtn" onClick={()=> addToCart(id)}>
          Добавить в корзину {cartItemNumber > 0 && <>({cartItemNumber})</>}
          </button>
      </div>

    </div>
  )
}

export default Product
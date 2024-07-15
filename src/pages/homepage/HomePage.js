import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import "./HomePage.css"

function HomePage() {
  return (
    <div className="home">
        <div className="title">
            <h1> Онлайн-Магазин</h1>
        </div>

        <div className="products">
            {PRODUCTS.map((p)=>(
                <Product data={p} />
            ))}
        </div>

    </div>
  )
}

export default HomePage
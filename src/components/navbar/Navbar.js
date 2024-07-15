import React from 'react'
import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link className="a" to="/" >Магазин</Link>
            <Link  to="/cart" > <ShoppingCart className="cartIcon"/> </Link>
        </div>
    </div>
  )
}

export default Navbar
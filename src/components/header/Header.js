import React from 'react'
import "./Header.css";
//COMPONENTES
import Navbar from '../navbar/Navbar';
import Cart from "../cart/Cart"
import image from '../../images/cinetazasEscrito.png';


function Header() {
    return (
        <header className="header">
            <img className="logo" src={image} />
            <Navbar />
            <Cart />
        </header>
    )
}

export default Header

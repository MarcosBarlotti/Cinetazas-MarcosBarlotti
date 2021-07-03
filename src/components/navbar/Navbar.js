import React from 'react'
import "./Navbar.css"
//COMPONENTES
import Cart from "../cart/Cart"

function Navbar() {
    return (
        <>
        <nav className="cart__container">
            <div className="logo"><a href="#">CINETAZAS</a></div>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li>
                    <a href="#" className="sinBorde" >Productos</a>
                    <ul>
                        <li><a href="#">Cuadros</a></li>
                        <li><a href="#">Vasos</a></li>
                        <li><a href="#">Ilustraciones</a></li>
                        <li>
                            <a href="#">Tazas</a>
                                <ul>
                                    <li><a href="#">Cine</a></li>
                                    <li><a href="#">Series</a></li>
                                    <li><a href="#">Música</a></li>
                                </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="sinBorde">Preguntas Frecuentes</a>
                        <ul>
                            <li><a href="#">Envios</a></li>
                            <li><a href="#">QR</a></li>
                            <li><a href="#">Personalizados</a></li>
                        </ul>
                </li>
                <li><a href="#">Contacto</a></li>
                <div className="carrito">
                <Cart/> 
                </div>
                </ul>
    </nav>
    </>
    )
}

export default Navbar

import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <ul className="nav__links">
                <li><a className="li__a" href="#">Productos</a></li>
                <li><a className="li__a" href="#">Contacto</a></li>
                <li><a className="li__a" href="#">Preguntas</a></li>
            </ul>
        </nav>
    )
}

export default Navbar

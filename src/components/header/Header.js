import React from 'react'
import "./Header.css";



function Header() {
    return (
        <header className="header__principal">
            <div className="container__header">
                <a href="#">
                <img src="/imagenesHeader/taza1.jpg" alt="imagen de taza" className="header__imagen"></img>
                <div class="container__h1">
                    <h1 className="h1__header">
                        Apuntá, Escaneá y Disfrutá
                    </h1>
                </div>
                </a>
            </div>
        </header>
    )
}

export default Header

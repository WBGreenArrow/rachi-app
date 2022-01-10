import React from "react";
import logoImg from "../../assets/logo.png";
import "./styles.scss";

export const NavBar = () => {
    return (
        <nav>
            <ul className='nav-menu-list flex'>
                <a href='#main'>
                    <img src={logoImg} alt='logo-home' />
                </a>
                <div className='nav-menu-item flex '>
                    <li>
                        <a href='#info'>Funcionalidades</a>
                    </li>
                    <li>
                        <a href='#app'>App</a>
                    </li>
                    <li>
                        <a href='#plans'>Planos</a>
                    </li>
                    <li>
                        <a href='#about'> Contato</a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css';
import Button from '../Button';


function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img class="Logo" src={Logo} alt="flix"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;
import React from 'react';
import {Link} from "react-router-dom";
import {IoMdMenu} from "react-icons/io"

const NavBar = () => {

    //Affiche la nav bar et change la couleur de l'icon
    function showNav () {
        const navBar = document.querySelector('nav ol')
        const navBurger = document.querySelector('nav svg')
        if(navBar.className === ""){
            navBar.classList.add('d-flex')
            navBurger.style.color = 'white'
        } else {
            navBar.classList.remove('d-flex')
            navBurger.style.color = '#24376f'
        }
    }

    return (
        <nav>
            <IoMdMenu onClick={showNav}/>
            <ol>
                <Link to={'/'}>PARIS EVENTS</Link>
                <Link to={'/'}>Accueil</Link>
                <Link to={'/liste-des-evenements'}>Recherche</Link>
                <Link to={"/favoris"}>Favoris</Link>
            </ol>
        </nav>
    );
};

export default NavBar;
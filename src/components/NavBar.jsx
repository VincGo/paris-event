import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ol>
                <Link to={'/'}>Accueil</Link>
                <Link to={'/liste-des-evenements'}>Liste des événements</Link>
                <Link to={"/home"}>Favoris</Link>
            </ol>
        </nav>
    );
};

export default NavBar;
import React from 'react';
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (
        <header id={"header"}>
            <NavBar />
            <div className={"text-center"}>
                <h1 className={"text-xxl"}>Bienvenue sur Paris Events</h1>
                <a href={"/liste-des-evenements"} className={"button-search"}>Rechercher un événement</a>
            </div>
        </header>
    );
};

export default Header;
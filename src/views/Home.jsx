import React, {useEffect, useState} from 'react';
import eventService from "../services/eventService";
import Card from "../components/Card/Card";

const Home = () => {
    /* Stockage des données de l'API */
    const [eventArray, setEventArray] =  useState([])

    /* Lors du chargement de la page injecte les données de l'API dans la variable eventArray */
    useEffect(() => {
        eventService
            .fetchLastUpadted()
            .then((data) => setEventArray(data.records))
    }, [])

    return (
        <div id={"home"}>
            <section>
                <h1 className={"text-xxl"}>Dernier ajout</h1>
                <div className={"title-decoration"} />
                { eventArray && eventArray.map((event) => <Card key={event.record.id} event={event}/>) }
            </section>
        </div>
    );
};

export default Home;
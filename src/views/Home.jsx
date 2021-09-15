import React, {useEffect, useState} from 'react';
import eventService from "../services/eventService";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import Loader from "react-loader-spinner";

const Home = () => {
    /* Stockage des données de l'API */
    const [eventArray, setEventArray] = useState([])
    const [loading, setloading] = useState(" ")

    /* Lors du chargement de la page injecte les données de l'API dans la variable eventArray */
    useEffect(() => {
        setloading(false)
        eventService
            .fetchLastUpadted()
            .then((data) => {
                setEventArray(data.records)
                setloading(true)
            })
    }, [])

    return (
        <div id={"home"}>
            <section>
                <Title title={"Dernière publication"}/>
                <div id={"card-list"}>
                    {!loading &&
                    <div className={"loader"}>
                        <Loader type={"TailSpin"} color="#24376f" height={80} width={80}/>
                    </div>
                    }
                    {eventArray && eventArray.map((event) => <Card key={event.record.id} event={event}/>)}
                </div>
            </section>
        </div>
    );
};

export default Home;
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import eventService from "../services/eventService";
import {Parser} from "html-to-react";
import FavButton from "../components/FavButton/FavButton";

const Event = () => {
    //Récupère l'ID dans l'url
    const {id} = useParams()
    const [event, setEvent] = useState(null)

    //Au chargement de la page inject les données à event
    useEffect(() => {
        eventService
            .getEventById(id)
            .then((data) => setEvent(data))
            .catch((err) => console.log(err))
    }, [id])

    return (
        <>
            {event && <EventContent event={event}/>}
        </>
    );
};

//S'occupe uniquement de l'affchage des données de l'event
const EventContent = ({event}) => {
    const {
        title,
        cover_url,
        cover_alt,
        cover_credit,
        description,
        date_description,
        price_type,
        price_detail,
        transport,
        contact_mail,
        contact_phone,
        contact_facebook,
        adress_city,
        adress_name,
        adress_street,
        adress_zip
    } = event.record.fields

    const descriptionRaw = Parser().parse(description)
    const dateDescriptionRaw = Parser().parse(date_description)

    return (
        <div>
            <h1 className={"text-xxl"}>{title}</h1>
            <hr/>
            <section>
                {/*MAIN CONTENT*/}
                <article>
                    <FavButton event={event}/>
                    <img src={cover_url} alt={cover_alt}/>
                    <p>{cover_credit}</p>
                    <div>{descriptionRaw}</div>
                    <p>{dateDescriptionRaw}</p>
                </article>
                {/*SIDE BAR*/}
                <aside>
                    <p>{price_type}</p>
                    <p>{price_detail}</p>
                    <p>{transport}</p>
                    <p>{contact_mail}</p>
                    <p>{contact_phone}</p>
                    <p>{contact_facebook}</p>
                    <p>{adress_city}</p>
                    <p>{adress_name}</p>
                    <p>{adress_street}</p>
                    <p>{adress_zip}</p>
                </aside>
            </section>
        </div>
    )
}

export default Event;
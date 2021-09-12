import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import eventService from "../../services/eventService";
import {Parser} from "html-to-react";
import FavButton from "../../components/FavButton/FavButton";
import Title from "../../components/Title/Title";
import {IoLogoFacebook, IoMdCall, IoIosMail, IoLogoTwitter} from "react-icons/io"

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
const EventContent = ({event, onClick}) => {
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
        contact_twitter,
        address_city,
        address_name,
        address_street,
        address_zipcode
    } = event.record.fields

    const descriptionRaw = Parser().parse(description)
    const dateDescriptionRaw = Parser().parse(date_description)

    return (
        <div>
            <div id={"event-article-title"}>
                <Title title={title}/>
                <FavButton event={event} onClick={onClick}/>
            </div>
            <section id={"event-article"}>
                {/*MAIN CONTENT*/}
                <article>
                    <figure id={"event-article-img"}>
                        <img src={cover_url} alt={cover_alt}/>
                        <figcaption id={"cover-credit"}>Crédit: {cover_credit}</figcaption>
                    </figure>
                    <div>{descriptionRaw}</div>
                </article>
                {/*SIDE BAR*/}
                <aside>
                    <div>
                        {address_name && <h4>{address_name}</h4>}
                        <address>{address_street}</address>
                        <address>{address_zipcode} {address_city}</address>
                    </div>
                    <hr/>
                    <p className={"info-title"}>Tarif</p>
                    {price_type === "gratuit" ? <p className={"info-text"}>{price_type}</p> :
                        <p className={"info-text"}>{price_detail}</p>}
                    <p className={"info-title"}>Transport</p>
                    <p className={"info-text"}>{transport}</p>
                    <p className={"info-title"}>Date</p>
                    <p className={"info-text"}>{dateDescriptionRaw}</p>
                    {contact_mail || contact_phone ? <p className={"info-title"}>Contact</p> : ""}
                    {contact_mail &&
                    <div className={"info-contact-section"}>
                        <IoIosMail/>
                        <p className={"info-text"}>{contact_mail}</p>
                    </div>
                    }
                    {contact_phone &&
                    <div className={"info-contact-section"}>
                        <IoMdCall/>
                        <p className={"info-text"}>{contact_phone}</p>
                    </div>
                    }
                    <p className={"info-title"}>Réseaux sociaux</p>
                    {contact_facebook &&
                    <a href={contact_facebook} className={"info-contact-social"}><IoLogoFacebook/></a>}
                    {contact_twitter &&
                    <a href={contact_twitter} className={"info-contact-social"}><IoLogoTwitter/></a>}
                </aside>
            </section>
        </div>
    )
}

export default Event;
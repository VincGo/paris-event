import React from 'react';

/**
 * Affichage des données sous forme de card pour Home et List.
 */
const Card = ({event}) => {
    const {title, cover_url, cover_alt, date_start, date_end, lead_text} = event.record.fields
    const id = event.record.id

    return (
        <div className={"card"}>
            <img src={cover_url} alt={cover_alt}/>
            <h1>{title}</h1>
            <p>{date_start}</p>
            <p>{date_end}</p>
            <p>{lead_text}</p>
            <button>Ajouter aux favoris</button>
            <button>
                <a href={`evenement/${id}`}>Plus d'informations</a>
            </button>
        </div>
    );
};

export default Card;
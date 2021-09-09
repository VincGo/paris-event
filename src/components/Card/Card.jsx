/**
 * Affichage des données sous forme de card pour Home et List.
 */
import FavButton from "../FavButton";

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
            <FavButton event={event}/>
            <button>
                <a href={`evenement/${id}`}>Plus d'informations</a>
            </button>
        </div>
    );
};

export default Card;
import FavButton from "../FavButton/FavButton";
import moment from "moment";

/**
 * Affichage des données sous forme de card pour Home, List et Favorites.
 */
const Card = ({event, onClick}) => {
    const id = event.record.id
    const {title, cover_url, cover_alt, date_start, date_end, lead_text} = event.record.fields

    //Reformate la date: jour/mois/année
    const dateStart = moment(date_start).format('DD/MM/YYYY')
    const dateEnd = moment(date_end).format('DD/MM/YYYY')

    return (
        <a href={`/evenement/${id}`} className={"card"}>
            <img src={cover_url} alt={cover_alt}/>
            <article>
                <div className={"card-title"}>
                    <h1>{title}</h1>
                    <FavButton event={event} onClick={onClick}/>
                </div>
                <p className={"date"}>Du {dateStart} au {dateEnd}</p>
                <p>{lead_text}</p>
            </article>
        </a>
    );
};

export default Card;
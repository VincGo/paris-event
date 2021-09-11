import eventLocaleStorage from "../../services/eventLocaleStorage";
import {IoIosHeart, IoIosHeartEmpty} from 'react-icons/io'
import {useState} from "react";

const FavButton = ({event, onClick}) => {
    //Récupère l'ID de l'event
    const key = event.record.id
    //On récupère l'event si il est enregistré dans le localStorage. Si il y a rien renvoi NULL
    const favorites = eventLocaleStorage.getFavoritesList(key)
    const [favStorage, setStorage] = useState(favorites)

    /*Si l'event est enregistré dans le loacalStorage, alors on le supprime et on change le text du bouton.
    Et inversement si l'event n'est pas enregistré dans l'event.*/
    function addOrRemoveFav(e) {
        e.preventDefault()
        const key = event.record.id
        if (eventLocaleStorage.getFavoritesList(key)) {
            eventLocaleStorage.removeFavoritesList(key)
        } else {
            eventLocaleStorage.saveFavoritesList(key, event)
        }
    }

    return (
        <>
            <span className={"favButton"} onClick={(e) => {
                addOrRemoveFav(e);
                onClick && onClick()
                setStorage(!favStorage)
            }}>
                {/*Lors du render du bouton on check si il est présent dans la localStorage et affiche le text en fonction*/}
                {favStorage ? <IoIosHeart/> : <IoIosHeartEmpty/>}
            </span>
        </>
    );
};

export default FavButton;
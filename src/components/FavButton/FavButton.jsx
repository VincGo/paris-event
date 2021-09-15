import eventLocaleStorage from "../../services/eventLocaleStorage";
import {IoIosHeart, IoIosHeartEmpty} from 'react-icons/io'
import {useState} from "react";

const FavButton = ({event, onClick}) => {
    const key = event.record.id
    const favorites = eventLocaleStorage.getFavoritesList()
    const [heart, setHeart] = useState(favorites)

    //Ajoute l'évènement dans le local si il n'y est pas présent. Dans le cas contraire le retire.
    function addOrRemoveFav(e) {
        e.preventDefault()
        const favStorage = eventLocaleStorage.getFavoritesList()
        let pos = favStorage.findIndex(event => event.record.id === key)
        if(pos > -1) {
            //remove
            favStorage.splice(pos, 1)
        } else {
            //add
            favStorage.push(event)
        }
        eventLocaleStorage.saveFavoritesList(favStorage)
        setHeart(favStorage)
    }

    return (
        <>
            <span className={"favButton"} onClick={(e) => {
                addOrRemoveFav(e);
                onClick && onClick()
            }}>
                {/*Lors du render du bouton on check si il est présent dans la localStorage et affiche le bon icon*/}
                {heart.some(data => data.record.id === key) ? <IoIosHeart/> : <IoIosHeartEmpty/> }
            </span>
        </>
    );
};

export default FavButton;
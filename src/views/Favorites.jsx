import React, {useEffect, useState} from 'react';
import eventLocaleStorage from "../services/eventLocaleStorage";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";

const Favorites = () => {
    const [favStorage, setFavStorage] = useState([])
    let favArr = []
    //Récupère les event dans le local storage, puis les push dans favArr. Ensuite favArr transmet les données à favStorage pour pouvoir manipuler les données.
    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const data = eventLocaleStorage.getFavoritesList(key)
            favArr.push(data)
        }
        setFavStorage(favArr)
    }, [])

    function removeCard (event) {
        setFavStorage(favStorage.filter(e => e.record.id !== event.record.id ))
    }

    return (
        <div>
            <Title title={"Favoris"}/>
            {favStorage && favStorage.map((event) =>
                <Card key={event.record.id} event={event} onClick={() => {removeCard(event)}}/>
            )}
        </div>
    );
};

export default Favorites;
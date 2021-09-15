import React, {useState} from 'react';
import eventLocaleStorage from "../services/eventLocaleStorage";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";

const Favorites = () => {
    const data = eventLocaleStorage.getFavoritesList()
    const [favStorage, setFavStorage] = useState(data)

    function removeCard() {
        const data = eventLocaleStorage.getFavoritesList()
        setFavStorage(data)
    }

    return (
        <div>
            <Title title={"Favoris"}/>
            {favStorage.length === 0 && <p>Vous n'avez pas encore de favoris.</p>}
            {favStorage && favStorage.map((event, index) =>
                <Card key={index} event={event} onClick={removeCard}/>
            )}
        </div>
    );
};

export default Favorites;
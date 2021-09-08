import eventLocaleStorage from "../services/eventLocaleStorage";

const FavButton = ({event}) => {
    //Récupère l'ID de l'event
    const key = event.record.id
    //On récupère l'event si il est enregistré dans le localStorage. Si il y a rien renvoi NULL
    const favorites = eventLocaleStorage.getFavoritesList(key)

    //Si l'event est enregistré dans le loacalStorage, alors on le supprime et on change le text du bouton.
    // Et inversement si l'event n'est pas enregistré dans l'event.
    function addOrRemoveFav(e) {
        const key = event.record.id
        if (eventLocaleStorage.getFavoritesList(key)) {
            eventLocaleStorage.removeFavoritesList(key)
            e.target.innerHTML = "Ajouter"
        } else {
            eventLocaleStorage.saveFavoritesList(key, event)
            e.target.innerHTML = "Retirer"
        }
    }

    return (
        <div>
            <button onClick={addOrRemoveFav}>
                {/*Lors du render du bouton on check si il est présent dans la localStorage et affiche le text en fonction*/}
                {favorites ? 'Retirer' : 'Ajouter'}
            </button>
        </div>

    );
};

export default FavButton;
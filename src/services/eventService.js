import axios from "axios";

const eventService = {

    //15 prochains évenements qui vont bientôt finir
    fetchAll() {
        return axios
            .get("https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?sort=date_end&limit=15")
            .then((response) => response.data)
            .catch((err) => console.log(err))
    },

    //Retourne les données en fonction de la recherche effectué. Trié par la date de fin de l'évenement et limité à 15.
    searchResult(search) {
        return axios
            .get(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?search=${search}&sort=date_end&limit=15`)
            .then((response) => response.data)
            .catch((err) => console.log(err))
    },

    //Retourne l'event choisie via son ID
    getEventById(id) {
        return axios
            .get(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`)
            .then((response) => response.data)
            .catch((err) => console.log(err))
    }
}

export default eventService
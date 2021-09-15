const key = "paris-events"

const StorageServices =  {
    getFavoritesList() {
        return JSON.parse(window.localStorage.getItem(key)) || []
    },

    saveFavoritesList (data) {
        window.localStorage.setItem(key, JSON.stringify(data))
    },

    removeFavoritesList(key) {
        window.localStorage.removeItem(key)
    }
}

export default StorageServices;
const StorageServices =  {
    getFavoritesList(key) {
        return JSON.parse(window.localStorage.getItem(key))
    },

    saveFavoritesList (key, data) {
        window.localStorage.setItem(key, JSON.stringify(data))
    },

    removeFavoritesList(key) {
        window.localStorage.removeItem(key)
    }
}

export default StorageServices;
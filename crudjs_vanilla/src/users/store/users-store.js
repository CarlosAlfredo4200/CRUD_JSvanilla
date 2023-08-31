const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    throw new Error('Has not been implemented!!!')
}

const loadNPreviousPage = async () => {
    throw new Error('Has not been implemented!!!')
}

const onUserchanged = () => {
    throw new Error('Has not been implemented!!!')
}

const reloadPAge = () => {
    throw new Error('Has not been implemented!!!')
}


export default {
    loadNextPage,
    loadNPreviousPage,
    onUserchanged,
    reloadPAge,

    getUser: () => [...state.users],//Objetos pasan por referencia
    getCurrentPage: () => state.currentPage,// los primitivos por valor

}
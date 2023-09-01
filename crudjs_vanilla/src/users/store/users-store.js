import { loadUsersByPage } from "../use-cases/load-Users-By-Page"

const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    await loadUsersByPage(state.currentPage + 1);
}

const loadPreviousPage = async () => {
    throw new Error('Has not been implemented!!!')
}

const onUserChanged = () => {
    throw new Error('Has not been implemented!!!')
}

const reloadPAge = () => {
    throw new Error('Has not been implemented!!!')
}


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPAge,

    getUser: () => [...state.users],//Objetos pasan por referencia
    getCurrentPage: () => state.currentPage,// los primitivos por valor

}
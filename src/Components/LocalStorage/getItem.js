const getItem = (item) => {
    return JSON.parse(localStorage.getItem(item))
}

export default getItem
const setItem = (item) => {
    return localStorage.setItem('Checkout' , JSON.stringify(item))
}

export default setItem
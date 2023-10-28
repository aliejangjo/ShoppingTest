import getItem from "../Components/LocalStorage/getItem";
import setItem from "../Components/LocalStorage/setItem";
import { ADDTOCART, SETLOCAL, UPDATECART } from "./actions";

const cartItemFromLocalStorage = localStorage.getItem('Checkout') ? getItem('Checkout') : []

const initialState = {
    cart: cartItemFromLocalStorage
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOCART:
            const find = state.cart.find(item => {
                return item.id === action.payload.id
            })
            if (!find) {
                return { ...state, cart: [...state.cart, action.payload] };
            } else {
                find.count += 1
                return { ...state, cart: [...state.cart] };
            }
        case UPDATECART:
            return { ...state, cart: action.payload };
        case SETLOCAL:
            setItem(state.cart)
        default:
            return state;
    }
};

export default rootReducer;
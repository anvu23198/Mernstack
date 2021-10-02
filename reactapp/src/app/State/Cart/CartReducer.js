import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
    carts: [],
}


export default function CartReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.ADD_CART_TOSTORE:          

            state.carts.push(action.payload.cart)
            return {...state}

        default:
            return state;
    }
}
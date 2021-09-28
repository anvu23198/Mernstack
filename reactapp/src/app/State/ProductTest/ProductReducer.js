import * as ProductActionType from "./ProductActionType"

let INITIAL_STATE = {
    product: {
        productName : "",
        price : "",
        rating: "",
        comments: ""
    }
}

let ProductReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case ProductActionType.SaveProduct:
            let newState = {...state}
            newState.product = action.payload.product

            return newState
        default:
            return state
    }

}

export default ProductReducer
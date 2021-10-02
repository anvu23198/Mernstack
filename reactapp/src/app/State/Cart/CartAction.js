import * as ActionTypes from "../actionTypes"


// export const addToCart = (product)=>{
//     console.log("Add to Cart ", product);
//     return function (dispatch) {

//         window.fetch("http://localhost:9090/cart/api/addToCart" ,{
//             method: 'POST', //rest method type 
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(product)
//         })
//         .then(cartRes => cartRes.json())
//         .then((cartRes)=>{
//             console.log("add cart response ", cartRes);
//             //dispatch(loading(false));
//             dispatch(fetchCart());
//         })
//         .catch((err)=>{
//             console.log("Error While add to cart", err)
//         })
//     }
// };


export const fetchCart = ()=>{
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/cart/api/getCart",{
            method: 'GET' //rest method type 
        })
        .then(cartRes => cartRes.json())
        .then((cartRes)=>{
            dispatch(addCartToStore(cartRes));
        })
        .catch((err)=>{
            console.log("Error While SAving Cart", err)
        })
    }  
}

export const addCartToStore = (cart)=>({
    type: ActionTypes.ADD_CART_TOSTORE,
    payload: {cart}
})
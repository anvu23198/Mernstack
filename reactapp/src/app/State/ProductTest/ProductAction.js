import * as ProductActionType from "./ProductActionType"

export const addProductToStore = (product) => ({
    type: ProductActionType.SaveProduct,
    payload: {product}
})

export const addProduct = (productObject) => {

    return function(dispatch, getState){

        window.fetch('http://localhost:9090/product/api/addProduct',{
            method: 'POST', //rest method type to save the data
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productObject)
        })
        .then(res => res.json())
        .then(resJson => {

            let action = addProductToStore(resJson)
            dispatch(action)
        })

    }



}
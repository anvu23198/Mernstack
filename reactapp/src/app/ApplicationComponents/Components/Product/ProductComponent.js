//create a functional product component using useRef
//accepts - ProductName, Price, Rating, Comments
//create product reducer
//create prodcut action and actionTypes
//add to store for configuration
//api to save the product, product router, "/product", productmodel

import React, {Fragment, useRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct} from '../../../State/Product/ProductAction';



let Product = (props) => {

    const productName = useRef(null)
    const price = useRef(null)
    const rating = useRef(null)
    const comments = useRef(null)

    const product = useSelector((state)=>state.ProductReducer.product)

    const dispatchToAddProduct = useDispatch();

    
    const setInt= setInterval(() => {
        console.log("My name is Something")
    }, 1000);
    
    useEffect(()=>{    
        productName.current.value = product.productName;        
        price.current.value = product.price;
        rating.current.value = product.rating;
        comments.current.value = product.comments;

        //componentWillUnmount
        return function cleanup() {
            //we must avoid doing any data cleanup, it is for javascript functions, callbacks, 
            console.log("useEffect is working as component will unmount, to cleanup the component");
            clearInterval(setInt); //cleaning up interval call
        };
    })



    const handleSubmit = (evt)=>{
        
        let productObj = {
            productName : productName.current.value,
            price : price.current.value,
            rating : rating.current.value,
            comments : comments.current.value,
        }


        dispatchToAddProduct(addProduct(productObj))

        evt.preventDefault();
    }

    return(
        <Fragment>
            <h1>Product</h1>
            <form className={"form col-md-10 userHook"} onSubmit={handleSubmit}>                
                <label>
                    <b>Product Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={productName} 
                            placeholder="Please enter Product name" maxLength={25}/>
                </label>
                <br/>
                <label>
                    <b>Price :</b>
                    <input type="text" className={"form-control col-md-12"} ref={price} 
                            placeholder="Please enter price" maxLength={25}/>
                </label>
                <br/>
                <label>
                    <b>Rating :</b>
                    <input type="text" className={"form-control col-md-12"} ref={rating} 
                            placeholder="Please enter address" maxLength={25}/>
                </label>
                <br/>
                <label>
                    <b>Comments :</b>
                    <input type="text" className={"form-control col-md-12"} ref={comments} 
                            placeholder="Please enter mobile" />
                </label>

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Add Product" />
            </form>
        </Fragment>
    )

}

export default React.memo(Product);
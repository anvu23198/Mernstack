<<<<<<< HEAD
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
=======
import React , { useState, Fragment } from "react";
import {useSelector, useDispatch } from "react-redux";

import { saveProduct} from "../../../State/Product/ProductAction";

let ProductComponent = ( props ) => {

    //initializes the name and returns a callback to save name on state change
    const [name, setName] = useState("Product Name"); 
    const [price, setPrice] = useState(0);
    const [desc, setDescription] = useState("Product Description");
    const [rating, setRating] = useState("Product Rating"); 
    
    //const [{name, price}, updateObject] = useState({name : "Product", price :"25656"}); 
    //updateObject({name:"test", price:"2020020"})
    // this can be used at the event where we want to update the value when user make some change
    //setName("Updated Value") 
    
    // const HandleOnChange = (evt)=>{
    //     setName(evt.target.value)
    // }

    const saveProductDispatch = useDispatch();

    const saveProductClick = (evt)=>{
        let productObj = {name, price, desc, rating};

        alert("We are going to save this product - "+ JSON.stringify(productObj));

        saveProductDispatch(saveProduct(productObj))
>>>>>>> 98525293ffa66128b2cca5017db92f84826a79c9

        evt.preventDefault();
    }

    return(
        <Fragment>
<<<<<<< HEAD
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
=======
            <h2> Products </h2>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                            placeholder="Product Name" onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6" value={price} 
                          placeholder="Product Price"
                          onChange={(evt)=>setPrice(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description </b>
                    <input type="text" className="form-control col-md-6" value={desc} 
                          placeholder="Please Describe the product"
                          onChange={(evt)=>setDescription(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Ratings </b>
                    <input type="text" className="form-control col-md-6" value={rating} 
                          placeholder="Ratings"
                          onChange={(evt)=>setRating(evt.target.value)} />
                    </div>
                    
                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Product"} 
                        onClick={saveProductClick}/>
                    </div>
                <br/>
            </section>
        </Fragment>
    )
}

export default ProductComponent;
>>>>>>> 98525293ffa66128b2cca5017db92f84826a79c9

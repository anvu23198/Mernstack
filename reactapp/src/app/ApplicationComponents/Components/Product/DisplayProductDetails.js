import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCartToStore} from "../../../State/Cart/CartAction"

let DisplayProductDetails = ({product})=>{
    const [showHide, showHideDetails] = useState(false);
    

    const handleClick = (evt) => {
        evt.target.classList.contains("product") ? 
                showHideDetails(!showHide) : "";
        //alert("handleClick ")
        evt.preventDefault();
    }
    // const user = useSelector((state) => state.userReducer.user)
    const addToCartDispatch = useDispatch();


    const addProductToCart = (evt)=>{

        let cartObj = {
            name: product.name, 
            price : product.price, 
            desc : product.desc, 
            rating : product.rating, 
            category : product.category
            // userName : user.userName
        };

        addToCartDispatch(addCartToStore(cartObj))
        evt.preventDefault();
        
    }

    return(
        <ul className={"product"}>
            <li className={"product"} onClick={handleClick}>
                {product.name}
                {showHide ?
                    <ul className={"productDetails"}>
                        <li>{product.desc}</li>
                        <li>{product.price}</li>
                        <li>{product.rating}</li>
                        <li>{product.category}</li>
                        <input type="button" className={"btn btn-primary col-md-2"} 
                            onClick={addProductToCart} value="Add To Cart" />
                    </ul> : 
                    " " }
            </li>
        </ul>
    )
}

export default DisplayProductDetails;
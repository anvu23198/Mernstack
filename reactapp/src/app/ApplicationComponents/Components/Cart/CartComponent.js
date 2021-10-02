import React from "react";
import {useSelector, useDispatch } from "react-redux";
import DisplayCartDetails from "./DisplayCartDetails"


let Cart = (props) => {

    const cartSubcriber = useSelector((state)=>state.cartReducer.carts)
    // const [name, setName] = useState(defaultCart.name); 
    // const [price, setPrice] = useState(defaultCart.price);
    // const [desc, setDescription] = useState(defaultCart.desc);
    // const [rating, setRating] = useState(defaultCart.rating); 
    // const [category, setCategory] = useState(defaultCart.category); 

    // console.log("cart number : " + cartSubcriber.length)
    // console.log(cartSubcriber.size)
    // console.log(typeof(cartSubcriber))

    return(
        
        <>
            {cartSubcriber && cartSubcriber.length > 0?
            <table className={"table"}>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Category</th>
            </tr>
                
                {
                
                    cartSubcriber.map((cartItem) => {
                        return <DisplayCartDetails cartItem={cartItem} key={cartItem._id}/>
                    })
                }
            </table>
        : <h2>There is nothing in cart</h2>
        }


        
        </>
    )

}


export default Cart
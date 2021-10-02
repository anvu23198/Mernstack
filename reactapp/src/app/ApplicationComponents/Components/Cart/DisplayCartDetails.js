import React from "react";


let DisplayCartDetails = ({cartItem})=>{

    return(
        <tr>
        <th>{cartItem.name}</th>
        <th>{cartItem.desc}</th>
        <th>{cartItem.price}</th>
        <th>{cartItem.rating}</th>
        <th>{cartItem.category}</th>
      </tr>
    )
}

export default DisplayCartDetails;
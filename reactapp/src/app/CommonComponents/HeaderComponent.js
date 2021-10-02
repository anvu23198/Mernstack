import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

function Header(props) {
    return(
       <Fragment>
           <h2>{`UserName ${props.user.userName}`}</h2>
           <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink>             
           {/* <NavLink to="/user" className="button" activeClassName="success" >User </NavLink>              */}
           {/* <NavLink to="/userhook" className="button" activeClassName="success" >User Hook </NavLink>      */}

           {props.user.userName? 
           <NavLink to="/user" className="button" activeClassName="success" >User </NavLink>  
           :
           <NavLink to="/login" className="button" activeClassName="success" >Login </NavLink>  
            }

           {props.user.userName ? 
           <NavLink to="/product" className="button" activeClassName="success" >Product </NavLink>            
            : ""}         
            
            <NavLink to="/about" className="button" activeClassName="success" >About </NavLink>
            
            <NavLink to="/cart" className="button" activeClassName="success" >Cart </NavLink>
        </Fragment>
    )
}

//subscriber 
let mapStateToProps = (state)=>{
    return {
        user : state.userReducer.user
    }
}


export default connect(mapStateToProps, null)(Header);
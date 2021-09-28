
import React, { Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, incrementBackend} from '../State/An/DummyAction';




let DummyComponent = (props) => {

    const counter = useSelector((state) => state.DummyReducer.counter)


    const dispatch = useDispatch()

    const increasedm = (evt) => {

        dispatch(incrementCounter())

        evt.preventDefault();
    }
    const decrease = (evt) => {

        dispatch(decrementCounter(1))

        evt.preventDefault();
    }

    const increaseBackEndThis =  (evt) => {

        dispatch(incrementBackend(counter))

        evt.preventDefault();
    }
        return (
            <div> Má may minh<br />

                Counter: {counter} <br />
                <button onClick={increaseBackEndThis} >Increase BackEnd</button>  <br />
                <button onClick={increasedm} >Increase</button>  <br />
                <button onClick={decrease} >Decrease</button>                       
            </div>

        )
}


export default DummyComponent;




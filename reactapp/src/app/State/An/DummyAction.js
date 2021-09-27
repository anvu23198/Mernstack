import * as ActionTypes from './DummyActionTypes';

export const incrementCounter = () => {
    console.log("Dummy Action invoked!");
    return ({
        type: ActionTypes.INCREMENT_COUNTER,
        payload: {
           
        }
    })
}

export const decrementCounter = (value) => ({
    type: ActionTypes.DECREMENT_COUNTER,
    payload: {
        counter: value
    }
})

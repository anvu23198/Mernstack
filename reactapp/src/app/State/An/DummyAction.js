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


export const incrementBackEndAction = (value) => ({
    type: ActionTypes.INCREMENT_COUNTERBACKEND,
    payload: {
        counter: value
    }
})

export const incrementBackend =  (value) => {
    
    return function(dispatch, getState){
        
        const res = window.fetch('http://localhost:9090/user/api/increment?counter=' + value, {
        
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        .then(res => res.json())
        .then(jsonRes => {
            let newCounter = jsonRes.newCounter
            
            dispatch(incrementBackEndAction(newCounter))


        })
    }


}

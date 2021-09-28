import * as ActionTypes from './DummyActionTypes';

const INITIAL_STATE = {
    counter: 1
}

const DummyReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        
        case ActionTypes.INCREMENT_COUNTER:
            const newState = {...state};
            newState.counter++;
            console.log("Dummy Reducer invoked!");
            return newState;

            case ActionTypes.DECREMENT_COUNTER:
                return {...state, counter: state.counter - action.payload.counter};

            case ActionTypes.INCREMENT_COUNTERBACKEND:
                return {...state, counter: action.payload.counter};

        default: 
            return state;
    }
}

export default DummyReducer;





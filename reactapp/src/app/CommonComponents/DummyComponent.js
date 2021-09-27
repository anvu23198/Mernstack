
import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '../State/An/DummyAction';

class DummyComponent extends React.PureComponent {

    constructor(props) {
        super(props);

        // this.state = {
        //     counter : -1
        // }

    }

    // increase = () => {
    //     this.setState({
    //         counter : this.state.counter + 1
    //     })

    //     console.log(this.state.counter)
    // }



    render() {
        return (
            <div> Má may minh<br />

                Counter: {this.props.counter} <br />
                <button onClick={() => this.props.incrementCounterThis()}>Increase</button>                
                <button onClick={() => this.props.decrementCounter(1)}>Decrease</button>                
            </div>

        )
    }


}

const mapStateToProps = (state) => {
    console.log(`state.DummyReducer.counter: ${state.DummyReducer.counter}`);
    return (
        {
            counter: state.DummyReducer.counter,
        }
    )
}

const mapDispatchToProps = (dispatch) => {

    return (
        {
            incrementCounterThis: () => {
                console.log("From incrementCounterThis");
                dispatch(incrementCounter());
            },
            decrementCounter: (value) => {
                dispatch(decrementCounter(value));
            }
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DummyComponent);


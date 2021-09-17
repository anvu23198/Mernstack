import React, {Fragment,  Component} from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import PropTypes from "prop-types";


export default class Home extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        let footerMsg = "I am footer for this application";

        return(
            <Fragment>
                <Header>

                </Header>
                <h1>This is my Home Component for - {this.props.sessionName}</h1>
                <Footer msg={footerMsg} show={this.props.showChildren}>
                    <h4>Child Element 2</h4>
                    <h4>Child Element 3</h4>
                    <h4>Child Element 4</h4>
                </Footer>
            </Fragment>
        )
    }
}

// Home.defaultProps = {
//     sessionName : "Default Session Name"
// }

Home.propTypes = {
    sessionName : PropTypes.string.isRequired
}
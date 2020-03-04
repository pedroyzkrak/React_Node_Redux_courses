import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    /*
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: "" };


    } babel does the constructor for us with the state procedure below */

    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message }),   
        );
    }

    componentDidUpdate() {
        console.log('State was updated so my component rerendered.');
    }

    componentWillUnmount() {
        //used when a component is removed, for not related clean-up purposes
    }

    // React requirement!
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        return <Spinner loadingMessage="Waiting for location allowance..."/>;
    }


}


ReactDOM.render(<App />, document.querySelector('#root'));




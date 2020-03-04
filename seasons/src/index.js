import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: "" };


    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //IMPORTANT
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
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
            return <div>Latitude: {this.state.lat} </div>;
        }
        return <div>Loading!</div>;
    }


}


ReactDOM.render(<App />, document.querySelector('#root'));




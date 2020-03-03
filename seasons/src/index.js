import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //IMPORTANT
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }

    // React requirement!
    render() {
        
        return <div>Latitude: {this.state.lat}</div>;
    }


}


ReactDOM.render(<App />, document.querySelector('#root'));




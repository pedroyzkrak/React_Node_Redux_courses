// Support IE11
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';

// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
    return <div>Hi there! Me nombre eres Pedro</div>;
};

// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
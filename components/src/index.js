// Support IE11
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';

// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
/*
function getButtonText() {
    return "Click on me!";
} */
// Create a react component
const App = () => {
    const buttonText = { text: 'Click me!' }; 
    const style = { backgroundColor: 'blue', color: 'white'}
    return (
    <div>
        <label htmlFor="name" className="label">Enter name:</label>
        <input id="name"></input>
        <button style={style}>
            {buttonText.text}    
        </button>
    </div>    //jsx cant show javascript objects as they are not valid as react childs
    );        //only properties!
              //this example was made to mess around
};

// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
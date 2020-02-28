import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';



import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return <div>Hi there!</div>;
};


ReactDOM.render(<App />, document.querySelector('#root'));




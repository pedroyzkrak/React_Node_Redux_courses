// Support IE11
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';

// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
    <App />,
    document.querySelector('#root')


);

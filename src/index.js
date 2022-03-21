import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";
/**
 * usage of BrowserRouter from react-router-dom:
 * At first glance, everything seems to be working fine. But when you try refreshing the page or navigating through the browser itself, you'll keep getting 404 errors.
 * GitHub Pages does not support browser history like your browser does. In our case, the route https://tomerpacific.github.io/starter-project/about doesn't help GitHub Pages understand where to point the user (since it is a frontend route).
 * To overcome this problem, we need to use a Hash Router instead of a Browser Router in our application. This type of router uses the hash portion of the URL to keep the UI in sync with the URL.
 */


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
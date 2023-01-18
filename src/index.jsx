import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const container = document.getElementById("root");
const root  = ReactDOM.createRoot(container);
root.render(React.createElement(App));


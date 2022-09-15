import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import App from './App';
import {BrowserRouter} from 'react-router-dom'
//import Context from './Shopping-cart/Contexts/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <Context/> */}
    </BrowserRouter> 
  </React.StrictMode>
);


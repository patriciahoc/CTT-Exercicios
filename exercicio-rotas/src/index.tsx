import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import Routes from "./routes"
import './App.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import Login from './Login';
=======
import Admin from './sell/sell';
>>>>>>> 8a41ee69a6cb590a55947784e0181277f5f64a41
import reportWebVitals from './reportWebVitals';
import { useEffect, useState } from "react";

<<<<<<< HEAD
window.$status="false";
=======

ReactDOM.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>,
  document.getElementById('root')
);
>>>>>>> 8a41ee69a6cb590a55947784e0181277f5f64a41

    ReactDOM.render(
      <React.StrictMode>
        <Login />
      </React.StrictMode>,
      document.getElementById('root')
    );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'

import { BrowserRouter } from 'react-router-dom';
import  store  from './redux/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

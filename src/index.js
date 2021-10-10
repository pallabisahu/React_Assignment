import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./store/reducers";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routs';
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(reducers);

if (process.env.NODE_ENV !== "production") {
  store = createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <Router>
    <Routes />
  </Router>
    {/* <App /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
//
// import "./index.css";
// import App from "./App";
//
// const { worker } = require('./mocks/browser');
// worker.start();
//
// const rootElement = document.getElementById("root");
//
// ReactDOM.render(
//     <App />,
//     rootElement
// );
//
// //Task List:
// //1. Add in all necessary components and libary methods.
// //2. Create a store that includes thunk and logger middleware support.
// //3. Wrap the App component in a react-redux Provider element.

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers/index";

import thunk from "redux-thunk";
import { logger } from "redux-logger";

import "./index.css";
import App from "./App";

const { worker } = require("./mocks/browser");
worker.start();
// (Store): An object that holds the complete state of your app. The only way to change its state is by dispatching actions. You may also subscribe to the changes to its state to update the UI.

const store = createStore(applyMiddleware(thunk, logger), reducer);

//[enhancer] (Function): The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

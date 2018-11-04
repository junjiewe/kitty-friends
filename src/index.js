import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "tachyons";
import App from "./containers/App";
import { searchCats, requestCats } from "./reducers";

const logger = createLogger(); //middleware

const rootReducer = combineReducers({ searchCats, requestCats });

// create the object tree of the state
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    {/*prevent store to pass down to all components */}
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

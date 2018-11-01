import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import "tachyons";
import App from "./containers/App";
import { searchCats } from "./reducers";

const logger = createLogger(); //middleware

// create the object tree of the state
const store = createStore(searchCats, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    {/*prevent store to pass down to all components */}
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

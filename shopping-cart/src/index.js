import React from "react";
import ReactDOM from "react-dom";
// react component
import App from "./component/App.js";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers/index.js";
import { getAllProducts } from "./actions/actions"

const middleware =  applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

store.dispatch(getAllProducts());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.querySelector("#root"));
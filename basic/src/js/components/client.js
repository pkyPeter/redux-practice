import { applyMiddleware, createStore } from "redux";
// xhr request 用
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
}

// reducer 的 case 如果是用 promise 寫法，則 	case 有其特殊寫法，可以參考 logger log 出來的結果
const reducer = (state = initialState , action) => {
	switch(action.type) {
		case "FETCH_USERS_START": {
			return {...state, fetching: true}
			break;
		}
			return {...state, fetching: false, error: action.payload}
			break;	
		}
		case "RECEIVE_USERS": {
			return {
				...state, 
				fetching: false, 
				fetched: true, 
				users: action.payload
			}
			break;
		}

	}
	return state;
}

// promise 寫法
const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);
store.dispatch({
	type: "FETCH_USERS",
	payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})


// thunk 寫法
store.dispatch((dispatch) => {
	dispatch({type:"FETCH_USERS_START"})
	axios.get("http://rest.learncode.academy/api/wstern/users")
		.then((response) => {
			dispatch({type:"RECEIVE_USERS", payload: response.data})
		})
		.catch((err) => {
			dispatch({type:"FETCH_USERS_ERROR", payload: err})
		})
})

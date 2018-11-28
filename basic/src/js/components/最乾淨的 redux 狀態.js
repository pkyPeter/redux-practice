import { createStore } from "redux";

//通常 createStore 的第二個變數就是有含有所有 state 的物件
const store = createStore(reducer, 0);

// 傳入的 state 就是 store 裡面的 state
const reducer = function(state, action) {
//這邊要特別注意， action.type 是固定名稱，但是 action.payload 的 payload 可以改變名稱
 if (action.type === "INC") {
 	return state + action.payload;
 }
 if (action.type === "DEC") {
 	return state - action.payload;
 }
 return state;
}



store.subscribe(() => {
	console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})

// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學// 這邊是將 reducer 拆開成好幾個的教學

import { combineReducers, createStore } from "redux";

// 這邊拿到的 state 都會拿到 user
const userReducer = (state={}, action) => {
	switch(action.type) {
		case "CHANGE_NAME":
			state = {...state, name: action.payload}
			break;
		case "CHANGE_AGE":
			state = {...state, age: action.payload}
			break;
	}
	return state;
};

const tweetsReducer = (state=[], action) => {
	return state;
};

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
})

const store = createStore(reducers);

store.subscribe(() => {
	console.log("store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "Will"})
store.dispatch({type: "CHANGE_AGE", payload: "35"})
store.dispatch({type: "CHANGE_AGE", payload: "36"})
store.dispatch({type: "CHANGE_AGE", payload: "32"})


// middleWare 教學// middleWare 教學 // middleWare 教學// middleWare 教學 // middleWare 教學// middleWare 教學 // middleWare 教學// middleWare 教學 // middleWare 教學// middleWare 教學 // middleWare 教學// middleWare 教學 // middleWare 教學// middleWare 教學 
import { applyMiddleware, createStore } from "redux";

const reducer = function(initialState = 0 , action) {
 if (action.type === "INC") {
 	return initialState + action.payload;
 }
 if (action.type === "DEC") {
 	return initialState - action.payload;
 }
 if (action.type === "E") {
 	throw new Error("AAAAAA!!!!");
 }
 return initialState;
}
const logger = (store) => (next) => (action) => {
	console.log("action fired", action);
	next(action);
}

const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch(e) {
		console.log("AHHHHHHH!", e)
	}
}

const middleware = applyMiddleware(logger, error);
const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
	console.log("stored changed", store.getState())
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})
store.dispatch({type: "E"})

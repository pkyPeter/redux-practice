import { combineReducers } from "redux";
import * as actionType from "../actions/actions.js";
import { updateObject } from "../utility";

const product = (state = { title: "sth", inventory: 5 }, action) => {
	switch (action.type) {
		case actionType.INCREMENT:
			// return {
			// 	...state,
			// 	inventory: state.inventory + 1
			// }
			return updateObject(state, { inventory: state.inventory + 1 });
		case "ADD":
			// return {
			// 	...state,
			// 	inventory: state.inventory + action.val
			// }
			return updateObject(state, { inventory: state.inventory + action.val });
		case actionType.ADDLATER:
			// return {
			// 	...state,
			// 	inventory: state.inventory + 1
			// }
			return updateObject(state, { inventory: state.inventory + 1 });
		default:
			return state;
	}
};

const other = (state = { abc: 0 }, action) => {
	if (action.type === "INCREMENT") {
		return {
			...state,
			abc: state.abc + 1
		};
	}
	return state;
};

export default combineReducers({
	product,
	other
});

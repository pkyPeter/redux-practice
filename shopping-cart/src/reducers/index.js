import { combineReducers } from "redux";
import * as actionType from "../actions/actions.js";
import { updateObject } from "../utility";

const initState = {
	products: null,
	inventory: 1,
	title: "s"
}
const product = (state = initState, action) => {
	switch (action.type) {
		case actionType.GETALLPRODUCTS:
			return updateObject(state,{ products: action.payload });
		case actionType.ADDTOCART:
			let newList = state.products.map(product => {
				if( product.id === action.details.id ) { 
					product.inventory -= 1;
				}
				return product;
			})
			return updateObject(state, { products: newList });
		default:
			return state;
	}
};

const shoppingCart = (state = { cartProducts: [] }, action) => {
	switch (action.type) {
		case actionType.ADDTOCART:
			let included = false;
			let newList = state.cartProducts.map(product => {
				if( product.id === action.details.id ) { 
					product.amount += 1;
					included = true;
				}
				return product;
			})
			if ( !included ) {
				let newItem = { 
					id: action.details.id,
					title: action.details.title,
					price: action.details.price,
					amount: 1 
				}
				newList.push(newItem);
			}
			return updateObject(
				state, 
				{	cartProducts: newList }
			);
		case actionType.CHECKOUT:
			return updateObject(state, {cartProducts: []})
		default:
			return state;
	}
};

export default combineReducers({
	product,
	shoppingCart
});

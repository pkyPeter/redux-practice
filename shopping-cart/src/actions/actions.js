import database from "../api/shop";

export const GETALLPRODUCTS = "GETALLPRODUCTS"; 
export const ADDTOCART = "ADDTOCART";
export const ADD = "ADD";
export const ADDLATER = "ADDLATER";

export const getAllProducts = () => dispatch => {
	database.getProducts(products => {
		console.log(products)
		dispatch({
			type: GETALLPRODUCTS,
			payload: products
		});
	})
}

// action creator，也可以傳入參數唷
export const addLaterAction = () => {
	return {
		type: ADDLATER
	}
}
export const addLater = () => {
	//只要有需要，可以把 getState 也放進來，但其實可以在呼叫的時候就把需要的資料傳進來
	return (dispatch, getState) => {
		setTimeout( () => {
			const oldInventory = getState();
			console.log("oldInventory",oldInventory);
			dispatch(addLaterAction());
		}, 1000)
	}
};

export const add = (val) => {
	return {
		type: ADD, 
		val: val
	}
}
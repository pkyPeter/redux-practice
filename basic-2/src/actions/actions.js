export const INCREMENT = "INCREMENT";
export const ADD = "ADD";
export const ADDLATER = "ADDLATER";

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
			const oldInventory = getState().product.inventory;
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
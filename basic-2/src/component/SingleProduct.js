import React from "react";

const SingleProduct = (props) => {
	return (
		<div> 
			<span>{props.product.title} - {props.product.inventory}</span>
			<button onClick={props.onIncrementCounter}>加一</button>
			<button onClick={()=>{props.addOn(10)}}>加十</button>
			<button onClick={props.addOnLater}>加但是等一下</button>
		</div>
	)
	
}

export default SingleProduct;
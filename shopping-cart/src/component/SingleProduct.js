import React from "react";

const SingleProduct = props => {
	return (
		<div>
			<h3>
				{props.details.title} - {props.details.inventory ||
					props.details.amount || 0}
			</h3>
			<h4>price: {props.details.price}</h4>
			{
				props.AddToCart && 
				(
					<button onClick={() => props.AddToCart(props.details)} disabled={props.details.inventory > 0 ? '' : 'disabled'}
					>
						加入購物車
					</button>
				)
			}			
		</div>
	);
};

export default SingleProduct;

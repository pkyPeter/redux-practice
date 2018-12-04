import React from "react";
import SingleProduct from "./SingleProduct";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";

const ProductSection = props => {
	return (
		<div>
			{props.list.products && props.list.products.map(listItem => {
				return (
					<div>
						<SingleProduct
							key={listItem.id}
							details={listItem}
							AddToCart={props.AddToCart}
						/>
						<button
							onClick={() => props.AddToCart(listItem)}
							disabled={listItem.inventory > 0 ? "" : "disabled"}
						>
							加入購物車
						</button>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		//這邊呼叫名稱叫做 product，就是依照 reducer 內的 product
		list: state.product
	};
};

const mapDispatchToProps = dispatch => {
	return {
		AddToCart: details => dispatch(actionCreators.addToCart())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductSection);

import React from "react";
import SingleProduct from "./SingleProduct";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{			
					this.props.list.products &&
					this.props.list.products.map(listItem => {
						return (
							<SingleProduct
								key={listItem.id}
								details={listItem}
								AddToCart={this.props.AddToCart}
							/>
						);
					})
				}
	 			<br />
	 			<hr />
 				{
 					this.props.cartProducts.length &&
 					this.props.cartProducts.map(listItem =>{
						return (
							<SingleProduct
								key={listItem.id}
								details={listItem}
							/>
						)
 					})
 				}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("state in side mapStateToProps", state);
	return {
		list: state.product,
		cartProducts: state.shoppingCart.cartProducts
	};
};

const mapDispatchToProps = dispatch => {
	return {
		AddToCart: details => dispatch({ type: "ADDTOCART", details: details })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

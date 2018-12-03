import React from "react";
import SingleProduct from "./SingleProduct";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(this.props.product)
		return (
			<SingleProduct
				product = {this.props.product}
				onIncrementCounter = {this.props.onIncrementCounter}
				addOn = {this.props.addOn}
				addOnLater = {this.props.addOnLater}
			/>
		);
	}


}

const mapStateToProps = state => {
	console.log("state in side mapStateToProps", state)
	return {
		product: state.product
	};
}  

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({type: "INCREMENT"}),
		addOn: (val) => dispatch(actionCreators.add(val)),
		addOnLater: () => dispatch(actionCreators.addLater())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
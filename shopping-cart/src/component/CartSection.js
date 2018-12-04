import React from "react";
import SingleProduct from "./SingleProduct";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";

const CartSection = props => {
  let totalCost = props.cartProducts.reduce((accumulator, product) => {
    return accumulator + product.amount * product.price;
  }, 0);
  return (
    <div>
      {props.cartProducts.length !== 0 &&
        props.cartProducts.map(listItem => {
          return <SingleProduct key={listItem.id} details={listItem} />;
        })}
      <h4>
        總共金額為
        {totalCost}
      </h4>
      <button
        onClick={props.checkOut}
        disabled={totalCost > 0 ? "" : "disabled"}
      >
        確認訂購
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartProducts: state.shoppingCart.cartProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkOut: () => dispatch(actionCreators.checkOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSection);

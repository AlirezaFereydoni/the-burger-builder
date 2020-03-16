import React, { Fragment } from "react";

const OrderSummary = props => {
  const ingredients = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A Delicious Burger With Following Ingredients</p>
      <ul>{ingredients}</ul>
      <p>Continue to Checkout?</p>
    </Fragment>
  );
};

export default OrderSummary;

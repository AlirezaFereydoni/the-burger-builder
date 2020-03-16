import React, { Fragment } from "react";
import Button from "./../../../UI/Button/Button";

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
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.cancelOrder}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.continueOrder}>
        Continue
      </Button>
    </Fragment>
  );
};

export default OrderSummary;

import React, { Component } from "react";
import CheckoutSummary from "./../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredient: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  };
  render() {
    return (
      <div>
        <CheckoutSummary ingredient={this.state.ingredient} />
      </div>
    );
  }
}

export default Checkout;

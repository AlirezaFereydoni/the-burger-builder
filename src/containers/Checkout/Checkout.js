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

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredient = {};
    for (let param of query.entries()) {
      ingredient[param[0]] = +param[1];
    }
    this.setState({ ingredient: ingredient });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredient={this.state.ingredient}
          cancelCheckout={this.checkoutCancelHandler}
          continueCheckout={this.checkoutContinueHandler}
        />
      </div>
    );
  }
}

export default Checkout;

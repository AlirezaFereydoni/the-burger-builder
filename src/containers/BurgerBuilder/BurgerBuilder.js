import React, { Component, Fragment } from "react";
import Burger from "./../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildConrols/BuildControls";
import Modal from "./../../components/UI/Modal/Modal";
import OrderSummary from "./../../components/Burger/OrderSummary/OrderSummary";
import axios from "./../../axios-orders";
import Spinner from "./../../components/UI/Spinner/Spinner";
import WithErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";
// import {} from "react-router-dom";

const IngredientPrices = {
  salad: 0.5,
  bacon: 1.5,
  cheese: 0.4,
  meat: 1.2
};

class BurgerBuilder extends Component {
  state = {
    ingredient: {},
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("https://my-project-1558250927226.firebaseio.com/ingredient.json")
      .then(response => this.setState({ ingredient: response.data }));
  }

  updatePurchasableState = ingredient => {
    const sum = Object.keys(ingredient)
      .map(igKey => {
        return ingredient[igKey];
      })
      .reduce((cur, item) => {
        return cur + item;
      }, 0);
    this.setState({
      purchasable: sum > 0
    });
  };

  addIngredientHandler = type => {
    const oldIngredient = this.state.ingredient[type];
    const newIngredient = oldIngredient + 1;
    const updatedIngredient = { ...this.state.ingredient };
    updatedIngredient[type] = newIngredient;

    const PriceAdition = IngredientPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + PriceAdition;

    this.setState({
      totalPrice: newPrice,
      ingredient: updatedIngredient
    });
    this.updatePurchasableState(updatedIngredient);
  };

  removeIngredientHandler = type => {
    const oldIngredient = this.state.ingredient[type];
    if (oldIngredient <= 0) {
      return;
    }
    const newIngredient = oldIngredient - 1;
    const updatedIngredient = { ...this.state.ingredient };
    updatedIngredient[type] = newIngredient;

    const PriceDetection = IngredientPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - PriceDetection;

    this.setState({
      totalPrice: newPrice,
      ingredient: updatedIngredient
    });
    this.updatePurchasableState(updatedIngredient);
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  closePurchaseHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  continueOrderHandler = () => {
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredient,
    //   price: this.state.totalPrice.toFixed(2),
    //   customer: {
    //     name: "Alireza Fereydoni",
    //     address: {
    //       street: "Gole Maryam",
    //       zipCode: "59",
    //       country: "Iran"
    //     },
    //     email: "Aliirzw@gmail.com"
    //   },
    //   deliveryMethod: "Fast"
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then(response => this.setState({ loading: false, purchasing: false }))
    //   .catch(error => this.setState({ loading: false, purchasing: false }));
    const queryParams = [];
    for (let i in this.state.ingredient) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredient[i])
      );
    }
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredient
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );
    let orderSummary = null;

    if (this.state.ingredient) {
      burger = (
        <>
          <Burger ingredient={this.state.ingredient} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredient}
          cancelOrder={this.closePurchaseHandler}
          continueOrder={this.continueOrderHandler}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.closePurchaseHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

export default WithErrorHandler(BurgerBuilder, axios);

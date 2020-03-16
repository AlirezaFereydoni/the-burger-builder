import React, { Component, Fragment } from "react";
import Burger from "./../../components/layout/Burger/Burger";
import BuildControls from "./../../components/layout/Burger/BuildConrols/BuildControls";
import Modal from "./../../components/UI/Modal/Modal";
import OrderSummary from "./../../components/layout/Burger/OrderSummary/OrderSummary";

const IngredientPrices = {
  salad: 0.5,
  bacon: 1.5,
  cheese: 0.4,
  meat: 1.2
};

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: false
  };

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
  render() {
    const disabledInfo = {
      ...this.state.ingredient
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Fragment>
        <Modal>
          <OrderSummary ingredients={this.state.ingredient} />
        </Modal>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;

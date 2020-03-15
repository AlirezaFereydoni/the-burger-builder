import React, { Component, Fragment } from "react";
import Burger from "./../../components/layout/Burger/Burger";
import BuildControls from "./../../components/layout/Burger/BuildConrols/BuildControls";

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
    totalPrice: 0
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
  };

  removeIngredientHandler = type => {};
  render() {
    return (
      <Fragment>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls addIngredient={this.addIngredientHandler} />
      </Fragment>
    );
  }
}

export default BurgerBuilder;

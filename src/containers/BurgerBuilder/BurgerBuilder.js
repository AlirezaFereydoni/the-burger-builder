import React, { Component, Fragment } from "react";
import Burger from "./../../components/layout/Burger/Burger";
class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 1,
      bacon: 2,
      cheese: 2,
      meat: 3
    }
  };
  render() {
    return (
      <Fragment>
        <Burger ingredient={this.state.ingredient} />
        <div>burger builder</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;

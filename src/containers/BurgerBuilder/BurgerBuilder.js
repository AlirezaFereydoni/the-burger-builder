import React, { Component, Fragment } from "react";
import Burger from "./../../components/layout/Burger/Burger";
class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
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

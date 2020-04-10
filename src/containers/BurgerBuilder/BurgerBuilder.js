import React, { Component, Fragment } from "react";
import Burger from "./../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildConrols/BuildControls";
import Modal from "./../../components/UI/Modal/Modal";
import OrderSummary from "./../../components/Burger/OrderSummary/OrderSummary";
import axios from "./../../axios-orders";
import Spinner from "./../../components/UI/Spinner/Spinner";
import WithErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as burgerBuilderActions from "./../../store/actions/index";

// import {} from "react-router-dom";

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  // componentDidMount() {
  //   axios
  //     .get("https://my-project-1558250927226.firebaseio.com/ingredient.json")
  //     .then((response) => this.setState({ ingredient: response.data }));
  // }

  updatePurchasableState = (ingredient) => {
    const sum = Object.keys(ingredient)
      .map((igKey) => {
        return ingredient[igKey];
      })
      .reduce((cur, item) => {
        return cur + item;
      }, 0);
    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  closePurchaseHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  continueOrderHandler = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = {
      ...this.props.ings,
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

    if (this.props.ings) {
      burger = (
        <>
          <Burger ingredient={this.props.ings} />
          <BuildControls
            addIngredient={(igName) => this.props.onAddIngredient(igName)}
            removeIngredient={(igName) => this.props.onRemoveIngredient(igName)}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchasableState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          cancelOrder={this.closePurchaseHandler}
          continueOrder={this.continueOrderHandler}
          price={this.props.price}
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

const mapStateToProps = (state) => {
  return {
    ings: state.ingredient,
    price: state.totalPrice,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onAddIngredient: (ingName) =>
      dispatch(burgerBuilderActions.addIngredient(ingName)),
    onRemoveIngredient: (ingName) =>
      dispatch(burgerBuilderActions.removeIngredient(ingName)),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(WithErrorHandler(BurgerBuilder, axios));

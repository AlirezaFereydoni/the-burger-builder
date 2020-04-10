import React, { Component } from "react";
import Order from "./../../components/Order/Order";
// import WithErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";
// import axios from "./../../axios-orders";
import { connect } from "react-redux";
import Spinner from "./../../components/UI/Spinner/Spinner";
import * as actions from "./../../store/actions/index";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    this.props.onFetchOrders();
  }
  render() {
    let loading = <Spinner />;
    if (!this.props.loading) {
      this.state.orders.map((order) => {
        return (
          <Order
            key={order.id}
            ingredient={order.ingredient}
            price={+order.price}
          />
        );
      });
    }
    return <div>{loading}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => {
      actions.fetchOrders();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

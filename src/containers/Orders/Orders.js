import React, { Component } from "react";
import Order from "./../../components/Order/Order";
// import WithErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";
// import axios from "./../../axios-orders";
import { connect } from "react-redux";
import Spinner from "./../../components/UI/Spinner/Spinner";
import * as actions from "./../../store/actions/index";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }
  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => {
        return (
          <Order
            key={order.id}
            ingredient={order.ingredient}
            price={+order.price}
          />
        );
      });
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

import React, { Component } from "react";
import Button from "./../../../components/UI/Button/Button";
import axios from "./../../../axios-orders";
import Spinner from "./../../../components/UI/Spinner/Spinner";
import styles from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      PostalCode: ""
    },
    loading: false
  };

  orderHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredient: this.props.ingredient,
      price: this.props.price,
      customer: {
        name: "Alireza Fereydoni",
        address: {
          street: "Gole Maryam",
          zipCode: "59",
          country: "Iran"
        },
        email: "Aliirzw@gmail.com"
      },
      deliveryMethod: "Fast"
    };
    axios
      .post("/orders.json", order)
      .then(
        response => this.setState({ loading: false }),
        this.props.history.push("/")
      )
      .catch(error => this.setState({ loading: false }));
  };
  render() {
    let form = (
      <form>
        <input
          type="text"
          className={styles.Input}
          name="name"
          placeholder="Your Name"
        />
        <input
          type="email"
          className={styles.Input}
          name="email"
          placeholder="Your Email"
        />
        <input
          type="text"
          className={styles.Input}
          name="street"
          placeholder="Your Street"
        />
        <input
          type="text"
          className={styles.Input}
          name="postalcode"
          placeholder="Your PostalCode"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Fill Your Contact Data Information!</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;

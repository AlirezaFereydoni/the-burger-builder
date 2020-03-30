import React, { Component } from "react";
import Button from "./../../../components/UI/Button/Button";
import axios from "./../../../axios-orders";
import Spinner from "./../../../components/UI/Spinner/Spinner";
import Input from "./../../../components/UI/Input/Input";
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
        <Input
          type="text"
          inputType="input"
          name="name"
          placeholder="Your Name"
        />
        <Input
          type="email"
          inputType="input"
          name="email"
          placeholder="Your Email"
        />
        <Input
          type="text"
          inputType="input"
          name="street"
          placeholder="Your Street"
        />
        <Input
          type="text"
          inputType="input"
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

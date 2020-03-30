import React, { Component } from "react";
import Button from "./../../../components/UI/Button/Button";
import axios from "./../../../axios-orders";
import Spinner from "./../../../components/UI/Spinner/Spinner";
import Input from "./../../../components/UI/Input/Input";
import styles from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Mail"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },

      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
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

  inputChangeHandler = (e, formElementIdentifier) => {
    const newOrderForm = {
      ...this.state.orderForm
    };
    const updatedOrderForm = {
      ...newOrderForm[formElementIdentifier]
    };

    updatedOrderForm.value = e.target.value;
    newOrderForm[formElementIdentifier] = updatedOrderForm;

    this.setState({ orderForm: newOrderForm });
  };
  render() {
    let formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form>
        {formElementArray.map(formElement => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={e => this.inputChangeHandler(e, formElement.id)}
            />
          );
        })}

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

import React from "react";
import Burger from "./../../Burger/Burger";
import Button from "./../../UI/Button/Button";
import styles from "./CheckoutSummary.module.css";

const CheckoutSummary = props => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>It's taste Delicius</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredient={props.ingredient} />
      </div>
      <Button btnType="Danger">Cancel</Button>
      <Button btnType="Success">Payment</Button>
    </div>
  );
};

export default CheckoutSummary;

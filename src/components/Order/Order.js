import React from "react";
import styles from "./Order.module.css";

const Order = props => {
  return (
    <div className={styles.Order}>
      <p>Ingredient: Salad (2)</p>
      <p>
        Price: <strong>USD 2.45</strong>
      </p>
    </div>
  );
};

export default Order;

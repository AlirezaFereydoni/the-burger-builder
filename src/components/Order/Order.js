import React from "react";
import styles from "./Order.module.css";

const Order = props => {
  const ingredients = [];
  for (let iName in props.ingredient) {
    ingredients.push({
      name: iName,
      amount: props.ingredient[iName]
    });
  }
  const outPutIngredients = ingredients.map(ig => {
    return (
      <span
        style={{
          margin: "0 5px",
          padding: "5px",
          border: "1px solid #eee"
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  console.log(ingredients);
  return (
    <div className={styles.Order}>
      <p>Ingredient: {outPutIngredients}</p>
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;

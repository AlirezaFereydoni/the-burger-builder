import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import style from "./Burger.module.css";
const Burger = props => {
  let transformedIngredient = Object.keys(props.ingredient)
    .map(igKey => {
      return [...Array(props.ingredient[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>Please Start With Ingredients</p>;
  }
  return (
    <div className={style.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;

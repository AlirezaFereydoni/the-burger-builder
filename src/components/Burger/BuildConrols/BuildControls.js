import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import style from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={style.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((Ctrl) => (
        <BuildControl
          key={Ctrl.label}
          label={Ctrl.label}
          added={() => props.addIngredient(Ctrl.type)}
          removed={() => props.removeIngredient(Ctrl.type)}
          disabled={props.disabled[Ctrl.type]}
        />
      ))}
      <button
        className={style.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        {props.isAuth ? "Order Now" : "Login First"}
      </button>
    </div>
  );
};

export default BuildControls;

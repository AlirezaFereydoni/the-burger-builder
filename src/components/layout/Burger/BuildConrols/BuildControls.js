import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import style from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={style.BuildControls}>
      {controls.map(Ctrl => (
        <BuildControl
          key={Ctrl.label}
          label={Ctrl.label}
          added={() => props.addIngredient(Ctrl.type)}
          removed={() => props.removeIngredient(Ctrl.type)}
          disabled={props.disabled[Ctrl.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;

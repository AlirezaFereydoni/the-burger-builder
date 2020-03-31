import React from "react";
import styles from "./Input.module.css";

const Input = props => {
  let inputElement = null;
  let inputClassess = [styles.InputElement];
  if (props.inValid && props.shouldValidation && props.touched) {
    inputClassess.push(styles.Invalid);
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onChange={props.changed}
          className={inputClassess.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.changed}
          className={inputClassess.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={props.changed}
          className={inputClassess.join(" ")}
          value={props.value}
        >
          {props.elementConfig.options.map(option => {
            return (
              <option value={option.value} key={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={props.changed}
          className={inputClassess.InputElement.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;

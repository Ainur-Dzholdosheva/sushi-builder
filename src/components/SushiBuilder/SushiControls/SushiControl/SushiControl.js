import React from "react";
import classes from "./SushiControl.module.css";

export default ({ control, removeIngredient, addIngredient, disabled }) => (
  <div className={classes.SushiControl}>
    <span className={classes.label}>{control.label}</span>
    <button
      className={classes.less}
      onClick={() => removeIngredient(control.type)}
    >
      Less
    </button>
    <button
      className={classes.more}
      onClick={() => addIngredient(control.type)}
      disabled={disabled}
    >
      More
    </button>
  </div>
);

import React from "react";
import classes from "./SushiControl.module.css";

export default ({ control, removeIngredient, addIngredient }) => (
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
    >
      More
    </button>
  </div>
);
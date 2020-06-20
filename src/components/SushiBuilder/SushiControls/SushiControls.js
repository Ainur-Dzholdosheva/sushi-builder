import React from "react";
import SushiControl from "./SushiControl/SushiControl";
import classes from "./SushiControls.module.css";

const CONTROLS = [
  { label: "Tuna Roll", type: "tunaRoll" },
  { label: "Salmon Roll", type: "salmonRoll" },
  { label: "Maki", type: "maki" },
];
export default ({ addIngredient, removeIngredient }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <SushiControl
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
    />
  ));
  return <div className={classes.SushiControls}>{controlsOutput}</div>;
};

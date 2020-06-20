import React, { useState } from "react";
import SushiKit from "../../components/SushiBuilder/SushiKIt/SushiKit";
import classes from "./SushiBuilder.module.css";
import SushiControls from "../../components/SushiBuilder/SushiControls/SushiControls";

export default () => {
  const [ingredients, setIngredients] = useState({
    salmonRoll: 3,
    tunaRoll: 4,
    maki: 5,
  });
  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
  }
  function removeIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setIngredients(newIngredients);
  }
  return (
    <div className={classes.SushiBuilder}>
      <SushiKit ingredients={ingredients} />
      <SushiControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};

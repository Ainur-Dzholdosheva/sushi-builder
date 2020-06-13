import React from "react";
import classes from "./Sushi.module.css";

export default ({ type }) => {
  const SushiClasses = [classes.Sushi];

  switch (type) {
    case "salmon-roll":
      SushiClasses.push(classes.salmonRoll);
      break;

    case "maki":
      SushiClasses.push(classes.maki);
      break;

    case "tuna-roll":
      SushiClasses.push(classes.tunaRoll);
      break;
  }
  return <div className={SushiClasses.join(" ")}></div>;
};

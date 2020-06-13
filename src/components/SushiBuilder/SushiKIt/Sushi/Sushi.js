import React from "react";
import classes from "./Sushi.module.css";

export default ({ type }) => {
  const SushiClasses = [classes.Sushi];

  switch (type) {
    case "salmonRoll":
      SushiClasses.push(classes.salmonRoll);
      break;

    case "maki":
      SushiClasses.push(classes.maki);
      break;

    case "tunaRoll":
      SushiClasses.push(classes.tunaRoll);
      break;
  }
  return <div className={SushiClasses.join(" ")}></div>;
};

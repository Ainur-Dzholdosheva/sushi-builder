import React from "react";
import classes from "./Sushi.module.css";

export default ({ type }) => {
  const SushiClasses = [classes.Sushi, classes[type]];

  return <div className={SushiClasses.join(" ")}></div>;
};

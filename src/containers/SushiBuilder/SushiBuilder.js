import React from "react";
import SushiKit from "../../components/SushiBuilder/SushiKIt/SushiKit";
import classes from "./SushiBuilder.module.css";

export default () => (
  <div className={classes.SushiBuilder}>
    <SushiKit />
    SushiControls
  </div>
);

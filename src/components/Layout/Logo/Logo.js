import React from "react";
import logo from "../../../assets/logo.svg";
import classes from "./Logo.module.css";

export default () => (
  <div className={classes.Logo}>
    <img src={logo} />
    <span>Susni Builder</span>
  </div>
);

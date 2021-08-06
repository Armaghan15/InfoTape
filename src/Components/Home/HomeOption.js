import React from "react";

import classes from "./HomeOption.module.css";

const HomeOption = (props) => {
  return (
    <div className={`${classes.HomeOption} ${props.className}`}>
      <h1 className={classes.HomeOptionTitle}>{props.title}</h1>
    </div>
  );
};

export default HomeOption;

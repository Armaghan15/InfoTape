import React from "react";

// Imports for Styles
import classes from "./Block.module.css";

const Block = (props) => {
  const allClasses = classes.Block + props.className;

  return (
    <div className={allClasses}>
      <p>{props.text}</p>
    </div>
  );
};

export default Block;

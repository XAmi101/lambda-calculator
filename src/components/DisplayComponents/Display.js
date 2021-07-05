import React from "react";
import "../../App.css";

const Display = (props) => {
  console.log ("Display", props,)
  return <div className ="display" >
   {props.hap}
  {/* Display any props data here */}
  </div>;
};
export default Display;

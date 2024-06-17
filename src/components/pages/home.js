import React from "react";
import PortfolioContainer from "../portfolio/portfolio-container";
// this is a functional component, and simple function that allows us
// less functionality than a class function, it allows to:
// render content, pass data, images, info ... ONLY ONE DIV COULD BE RETURNED!!
export default function() { // props are like parameters
  return (
    <div>
      <PortfolioContainer/>
    </div>
  );
}
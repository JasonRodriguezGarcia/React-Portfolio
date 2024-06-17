import React from "react";
import { Link } from "react-router-dom";
// this is a functional component, and simple function that allows us
// less functionality than a class function, it allows to:
// render content, pass data, images, info ...
export default function() { // props are like parameters
  return (
    // attending to props title and url came from outside
    <div>
      <h3>UPS !!! BAD PAGE </h3> 
      <Link to="/"> Return to main page</Link>
    </div>
  );
}
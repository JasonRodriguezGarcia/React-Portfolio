import React from "react";
import propfilePicture from "../../../static/assets/images/jason-photo.jpg";

// this is a functional component, and simple function that allows us
// less functionality than a class function, it allows to:
// render content, pass data, images, info ...
export default function() { // props are like parameters
  return (
    <div className="content-page-wrapper">
      <div className="left-column"
        style={{
          background: "url(" + propfilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.
        Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
        Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida
        at eget metus. Donec sed odio dui. Cras mattis consectetur purus sit
        amet fermentum. Etiam porta sem malesuada magna mollis euismod. Nulla
        vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque
        ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
        elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis
        <br/>
        <strong>Si quieres saber más, por favor contacta conmigo en la sección Contact</strong>
        <br/><strong>If you want to know more, please contact to me in the Contact section</strong>
      </div>
    </div>
  );
}
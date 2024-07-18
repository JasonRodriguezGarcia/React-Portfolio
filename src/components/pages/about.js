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
        Programado en React v16.13.1
        <br/>Node.js v14.21.3
        <br/>Por:
        <br/>Jason R.G.
        <br/>
        <br/> Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.
        Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
        Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida
        at eget metus. Donec sed odio dui. Cras mattis consectetur purus sit
        amet fermentum. Etiam porta sem malesuada magna mollis euismod. Nulla
        vitae elit libero, a pharetra augue.
        <br/>
        <strong>Si quieres saber más, por favor contacta conmigo en la sección Contact</strong>
        <br/><strong>If you want to know more, please contact to me in the Contact section</strong>
      </div>
    </div>
  );
}
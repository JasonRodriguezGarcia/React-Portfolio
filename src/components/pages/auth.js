import React, { Component } from 'react';
import loginImg from "../../../static/assets/images/auth/login.jpg";
import Login from "../auth/login";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    // They are "bind" to have access to these components
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  }

  handleUnsuccessfulAuth() {
    this.props.handleUnsuccessfulLogin();
  }
  render() {
    return (
      <div className="auth-page-wrapper">
        <div
          className="left-column"
        // Adding backgroundImage to the style dynamically with self-closed <div>, that why for {{ and }}
        // This similar to add a component like <PortfolioItem /> but with a <div />
        // A way to create a component in the fly
        // Style expects JavaScript code in {} and an object betweet the second {}
          style={{        //adding img dynamically
            backgroundImage: `url(${loginImg})`
          }}
        />

        <div className="right-column">
          <Login
            handleSuccessfulAuth={this.handleSuccessfulAuth}
            handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
          />
        </div>
      </div>
    );
  }
}

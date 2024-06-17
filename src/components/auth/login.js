import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class login extends Component {
  constructor (props){
    super(props);

    this.state = {
      userEmail: "",
      userPassword: "",
      errorText: ""
    }
    // methods involved in events are instatiated
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // It is changed the name dinamically. target could be userEmail or userPassword variable/state
    // This avoid to have some conditionals if is userEmail or userPassword
    // If there were 10 differents inputs then 10 different name values we had to to a lot of if's
    // Finally with [] we take the string name as state name (like variable name in string)
    this.setState ({
      [event.target.name] : event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {
//  alert(`handle Submit HECHO - ${this.state.userEmail} ${this.state.userPassword}`);
    axios
      .post(
        "https://api.devcamp.space/sessions",
        {
          client: {
            email: this.state.userEmail,
            password: this.state.userPassword
          }
        },                        // indicates whether or not cross-site Access-Control requests should be made using credentials
        { withCredentials: true } // This indicate the API call is for credentials getting back a cookie
      )
      .then(response => {
        if (response.data.status === "created") {
          console.log("You can come in ...");
          this.props.handleSuccessfulAuth();
        } else {
            this.setState({
              errorText: "Wrong email or password"
            });
            this.props.handleUnsuccessfulAuth();
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorText: "An error occurred"
        });
        this.props.handleUnsuccessfulAuth();
        console.log(error);
      });
    // Preventing default submit behaviour of browsing to a new page when the user submits the form
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
        <div>{this.state.errorText}</div>
        <form onSubmit={this.handleSubmit} className='auth-form-wrapper'>
          <div className='form-group'>
            <FontAwesomeIcon icon="envelope" />
            <input 
              type="email"
              name="userEmail"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChange} // Everytime userEmail is changing, handleChange is called
            />
          </div>
          <div className='form-group'>
            <FontAwesomeIcon icon="lock" />
            <input 
              type="password"
              name="userPassword"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.handleChange} // Everytime userEmail is changing, handleChange is called
            />
          </div>
          <button className="btn" type="submit">Login</button>
        </form>
      </div>
     );
  }
}

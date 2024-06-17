import React, { Component } from 'react';
// import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import BlogDetail from "./pages/blog-detail";
import PortfolioManager from './pages/portfolio-manager';
import PortfolioDetail from './portfolio/portfolio-detail';
import Auth from './pages/auth';
import NoMatch from './pages/no-match';
import Icons from "../helpers/icons";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
    // They are "bind" to have access to these components
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState ({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState ({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        // If loggedIn and status LOGGED_IN => return data
        // If loggedIn status NOT_LOGGED_IN => update state
        // If not loggedIn and status LOGGED_IN => update state

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [<Route key="portfolio-manager" path="/portfolio-manager" component={PortfolioManager} />];
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer 
              loggedInStatus={this.state.loggedInStatus}
              handleSuccessfulLogout={this.handleSuccessfulLogout}
            />
            {/* <h2>{this.state.loggedInStatus}</h2> TO SHOW IF LOGGED IN OR NOT WITH loggedInStatus state */}

            <Switch>
              <Route exact path="/" component={Home} /> {/*main path first with exact *

    // `render` prop, which allows you to render an inline component instead of passing a reference to 
    // an existing component. This is useful when you need to pass additional props or perform some 
    // logic before rendering the component.
    // component={Auth} is deleted because instead of just saying, hey route, here is the Auth component,
    // instead we're gonna say hey route, we're actually gonna take care of defining the render process
    // for you.
    // So, instead of just defining a component, the prop I'm gonna pass in is actually called render and
    // then from here what I'm gonna do is pass in props, and let me actually just stay on that line,
    // so I'm gonna say props because what render takes in is a function.
    // So I'm gonna say props, which is the first argument. And then from there, I'm going to tell it 
    // exactly what we want to render, which in this case is the Auth component. So, after the fat arrow 
    // function then I want you to add parens and from there we're actually going to call the Auth 
    // component, just like we would call a regular component. So I'm gonna say Auth and then from here,
    // I'm gonna pass in props to the Auth component.
    // So the very first one I'm gonna pass in and this is gonna look weird if you've never seen it 
    // before. It's curly brackets with a dot dot dot, which is the JavaScript spread operator. 
    // And so, what we're doing, is we're going to spread the props that we're getting passed in from
    // render.
    // So there are already a set number of props that are getting passed in, like path and those kind of
    // things. And that's gonna be passed in, so we're gonna have access to that. And then from there, 
    // we can start defining the values. So we wanna pass in our handleSuccessfulLogin and so from there
    // I'm gonna say handleSuccessfulLogin= and then this.handleSuccessfulLogin which is our method that
    // we already created and then I also wanna pass in handleUnSuccessfulLogin, which is the other one
    // we created, just like that and then make sure you close off that Auth component and there we have
    // passed in an actual render prop.
    // Instead of passing in a regular prop, like path or something like that, we're also passing in a 
    // render prop. So we're overwriting the render process. Here, we're getting access to the props, 
    // which is the first argument in this function.
    // And then we're saying, hey inside of this render, I want you to call the Auth component and that's
    // what I want you to render. I want you to allow it to have access to all the props it would have 
    // been given anyway, like Auth and those kinds of things. But then also, I want to override it and
    // pass in my own set of functions, my own types of handlers.
    // Now in order to not have any errors, we also have to bind these handlers to the constructor in 
    // app.js and bind them to this. So at the very top of the constructor, I'm gonna say 
    // this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind this, and then just do the same thing 
    // for handleUnsuccessfulLogin, and then the same thing here, handleUnSuccessfulLogin.
    // Okay so, what we have here, is not, we don't have anything that's going to work yet because we 
    // have not wired this up with the Auth component, but I think this is a good time for us to take
    // a break right now because this was a lot of code to write and some pretty advanced concepts.
    // It's very hard to understand this part of the process, without understanding what it's connected 
    // to. So hopefully what is going to help you really understand the process that's going on right 
    // here, is when we go into the Auth component, and then we have access to handleSuccessfulLogin and
    // handleUnSuccessfulLogin and then we can have a two-way communication type of situation here.
    // So our Auth component can update this method handleSuccessfulLogin and when
    // it updates this method, what it's gonna do, gives us the ability in our parent
    // app component to manage our state loggedInStatus
    // Es la forma correcta de pasar un props a un componente que tienes dentro de un Route, por lo 
    // tanto como es una librería externa, consultando su documentación esta nos indica que es la forma
    // de pasar un props!! // Auth component can update these metods */}
              <Route path="/auth" render={props => (
                <Auth {...props}  handleSuccessfulLogin={this.handleSuccessfulLogin}
                                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin} /> )}
              />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
               {/* BE CARE ARROW FUNCTION WITH () DUE TO NO RETURNED ANYTHING !! */}
              <Route path="/blog" render={props => (
                <Blog {...props} loggedInStatus={this.state.loggedInStatus} /> )}
              />
              {/* The slug "prop" is passed to BlogDetail but it isn't
              explicity specified as prop*/}
              <Route path="/b/:slug"
                render={props => (
                 <BlogDetail {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />
              {this.state.loggedInStatus === "LOGGED_IN" ? (
                this.authorizedPages()
                ) : null}
              {/* Following exact path is to avoid /portfolio/xxxxx and /portfolio/xxx/xxx to be acepted */}
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
               {/* When paths don't match*/}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

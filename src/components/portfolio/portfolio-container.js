import React, { Component } from 'react';
import axios from "axios";

// we import portfolio-item.js and it is labelled as PortfolioItem
// due to portfolio-item.js has only a nonamed function
import PortfolioItem from "./portfolio-item";

// a class component is advance function that allows more advance topics than an functional component
// it allows with events and data managing inside a component with:
// -State
// -Lifecycle hooks
export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle : "Welcome to my page",
      isLoading: false,
//      isLoading: false,
      data: []
    };
    
    this.handleFilter = this.handleFilter.bind(this);

  }
  
  handleFilter(filter) {
    if (filter==="CLEAR_FILTERS"){
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://jasonrodriguez.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item =>{
              return item.category === filter;
            })
          });

        } else {
          this.setState({
            data: response.data.portfolio_items 
          });
        }
      })
      .catch(error => {
        console.log("error producido:", error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }
  // https://keepcoding.io/blog/estado-y-ciclo-de-vida-de-componentes-en-react/
  // La función componentDidMount se lanzaba después de que el componente se montara en el DOM
  // y se renderizara por primera vez. Dentro de esta función podíamos meter cualquier sección de 
  // código que quisiéramos ejecutar justo en ese momento del ciclo de vida. Este código puede no 
  // tener que ver exactamente con aquello que estamos renderizando, pero puede ser necesario para 
  // introducir datos a nuestro proyecto. Un ejemplo de esto sería una llamada a una API.
  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    // This part could be for one API call that once call is finished and all is ok
    // we can change this.state.isLoading to false with this.state.isLoading = false
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
//    this.getPortfolioItems(); <<-- now componentDidMount() is used
    return (
      <div className='homepage-wrapper'>
        <div className='filter-links'>
          <button className="btn" onClick={() => this.handleFilter("eCommerce")}>
           eCommerce
          </button>
          <button className="btn" onClick={() => this.handleFilter("Scheduling")}>
            Scheduling
          </button>
          <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
            Enterprise
          </button>
          <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>
            All
          </button>
        </div>
        <div className='portfolio-items-wrapper'>
          {this.portfolioItems()} 
        </div>
      </div>
      /*<button onClick={this.handleFilter('eCommerce')}>eCommerce</button> Don't work
        If we use 3 functions with parentheses, JSX will automatically try to run them, giving errors
        What we need to do is create an anonymous functionto store these parens, and then an arrow function.
        The page is gonna load and then the functions are going to be ready, but they're not going to be
        called automatically.
      */
    );
  }
}
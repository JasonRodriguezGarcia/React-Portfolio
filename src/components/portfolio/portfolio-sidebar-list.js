import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// funcional component
// this is a functional component, and simple function that allows us
// less functionality than a class function, it allows to:
// render content, pass data, images, info ... ONLY ONE DIV COULD BE RETURNED!!

const PortfolioSidebarList = props => {
  const portfolioList = props.data.map(portfolioItem => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={portfolioItem.thumb_image_url} />
        </div>

        <div className="text-content">
          <div className="title">{portfolioItem.name}</div>
          <div className="actions">
            <a className="action-icon" 
              onClick={() => props.handleEditClick(portfolioItem)}
            >
              <FontAwesomeIcon icon="edit" />
            </a>
            <a className="action-icon" 
              onClick={() => props.handleDeleteClick(portfolioItem)}
            >
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;
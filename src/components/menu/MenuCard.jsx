import React from 'react';
import "../../style.css";

const MenuCard = ({cardState}) => {
  return(
    <>
      <div className="menu-container">
        {
          cardState.map((element) => {
            const {key, name, description, category, image} = element;
            return(
              <div key={key} className="menu-card">
                <div className="menu-head">
                  <h1>{name}</h1>
                </div>
                <div className="menu-image">
                  <img src={image} alt="food pic"/>
                </div>
                <div className="menu-desc">
                  <span>{description}</span>
                </div>
                <div className="menu-time">
                  <span>{category}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default MenuCard;
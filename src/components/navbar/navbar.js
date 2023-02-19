import React from "react";
import './navbar.css';
import { NavLink } from "react-router-dom";

export function Navbar() {
  return(
    <div className="nav-section">
      <p>F</p>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/recipes'}>Recipes</NavLink>
          </li>
          <li>
            <NavLink to={'/ingredients'}>Ingredients</NavLink>
          </li>
          <li>
            <NavLink to={'./restaurants'}>Restaurants</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
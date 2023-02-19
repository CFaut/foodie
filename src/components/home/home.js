import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { Header } from "../header/header";

export function Home() {
  return(
    <div>
      <Header/>
      <div className="home-page-section">
      <section className="recipes-card card">
        <p>Recipes for every occasion!</p>
        <Link to={'./'}>
          <button>Get started!</button>
        </Link>
      </section>
      <section className="ingredients-card card">
        <p>Hundreds of Ingredients!</p>
        <Link to={'/ingredients'}>
          <button>Start searching!</button>
        </Link>
      </section>
      <section className="restaurants-card card">
        <p>Tired of cooking?</p>
        <Link to={'./'}>
          <button>Lets go out!</button>
        </Link>
      </section>
      </div>
    </div>
  )
}
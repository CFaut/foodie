import React from "react";
import './header.css'

export function Header(){
  return(
    <div className="header-section">
      <div>
        <h2>Never be uninspired again!!</h2>
        <p>All your culinary needs are right here!</p>
        <p>Hundreds of fresh ideas and new inspiration.</p>
      </div>
      {/* <img src={'/images/spices-img.jpg'} alt='A table with fresh ingredients.'/> */}
    </div>
  )
}
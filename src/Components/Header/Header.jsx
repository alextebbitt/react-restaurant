import React from 'react'
import "./Header.css";
const Header = () => {
  return (
    <div class="topnav">
      <div className="reactrestaurant">
        {" "}
        <h2>React Restaurant </h2>
      </div>
      <a class="active" href="#home">
        Menu
      </a>
      <a href="#news">Photos</a>
      <a href="#contact">Contact</a>
      <a href="#about">Home</a>
      <div></div>
    </div>
  );
}

export default Header
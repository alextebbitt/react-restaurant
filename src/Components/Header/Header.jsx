import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div class="topnav">
      <div className="reactrestaurant">
        <h2>React Restaurant </h2>
      </div>
      <div>
        <span>
          <Link to="/">Menu</Link>
        </span>
        <span>
          <Link to="/booking">Make a reservation</Link>
        </span>
        {/* <span>
          <Link to="/contact">Contact</Link>
        </span> */}
        
      </div>
    </div>
  );
}

export default Header
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>IronCRM</h1>
        <p>Made by Cameron Campbell + Brandon Garrett</p>
      </div>
      <ul>
        <li>Hello...</li>
        <span className="sm-hide">|</span>
        <li>
          <a href="#!">
            <span className="sm-hide">Logout</span>
            <i className=""></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

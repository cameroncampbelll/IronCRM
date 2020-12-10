import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="logo">
        <h1>IronCRM</h1>
        <img src="../images/iron-crm-logo.png" alt='' className="iron-logo" />
        <p>Made by Cameron Campbell + Brandon Garrett</p>
      </div>
      <ul id='nav-buttons'>
        <li>Hello...</li>
        <span className="sm-hide">|</span>
        <li>
          <a href="#!">
            <span className="sm-hide">Logout</span>
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

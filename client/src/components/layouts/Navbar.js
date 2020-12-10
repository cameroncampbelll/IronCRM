import React from "react";
import logo from "../../images/iron-crm-logo.png"

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="logo">
        {/*<h1>IronCRM</h1>*/}
        <img src={logo} alt='' className='iron-logo' />
        <p className='madeby'>Made by Cameron Campbell + Brandon Garrett</p>
      </div>
      <ul id='nav-buttons'>
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

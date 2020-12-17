import React, { useContext, Fragment } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Link } from "react-router-dom";
import logo from "../../images/iron-crm-logo.png";

const Navbar = () => {
  const { logout, userAuth, user } = useContext(AuthContext);
  const onLogout = () => {
    logout();
  };

  const userLink = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <span className="sm-hide"> | </span>
      <li>
        <a href="#!" onClick={onLogout}>
          <span className="logout-button">Log Out</span>
          <i className=""></i>
        </a>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <span>|</span>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <div className="logo">
        {/*<h1>IronCRM</h1>*/}
        <img src={logo} alt="" className="iron-logo" />
        <p className="madeby">Made by Cameron Campbell + Brandon Garrett</p>
      </div>
      <ul id="nav-buttons">{userAuth ? userLink : authLinks}</ul>
    </div>
  );
};

export default Navbar;

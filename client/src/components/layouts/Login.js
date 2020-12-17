import React, { useState, useContext } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser, userAuth, errors } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };
  return (
    <div className="login">
      <h1 className="login-title">Login</h1>
      <form onSubmit={submit}>
        <input
          className="add-comp"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="add-comp"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input type="submit" value="Sign In" className="btn" />
      </form>
      {/* <div>
          {errors !== null && (
          <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span>X</span>
          </button>
        <p>Dont have an account? {" "} <Link to="/register" className="sign-up-btn">Sign Up</Link> </p>
      </div> */}
      <div className="question">
        {errors !== null && (
          <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span>X</span>
          </button>
        )}
        <p>
          Dont have an account? <Link to="/register">Sign Up</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;

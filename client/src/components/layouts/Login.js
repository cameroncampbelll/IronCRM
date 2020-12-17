import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
    console.log({ email, password });
  };
  return (
    <div className="login">
      <h1 className='login-title'>Log In</h1>
      <form className='login-fields' onSubmit={submit}>
        <input
          className='add-comp'
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          className='add-comp'
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input type="submit" value="Sign In" className="sign-in-btn" />
      </form>
      <div className="question">
        <p>
          Don't have an account? <Link to="/register" className='sign-up-btn'>Sign Up</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;

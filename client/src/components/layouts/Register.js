import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords dont match");
    } else {
      console.log({ name, email, password });
    }
  };

  return (
    <div className="register">
      {/* <h1>Sign Up</h1> */}
      <form className='register-form' onSubmit={submit}>
        <input
          className='register-inputs'
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <input
          className='register-inputs'
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          className='register-inputs'
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input
          className='register-inputs'
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handleChange}
        />
        <input type="submit" value="Sign Up" className="btn" />
      </form>
      <div className="question">
        <p>
          Already have an account? <Link className='sign-up-btn' to="/login">Log in</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;

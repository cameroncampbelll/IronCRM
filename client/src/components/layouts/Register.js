import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Link } from "react-router-dom";

const Register = (props) => {
  const { registerUser, userAuth, errors, setError } = useContext(AuthContext);
  // redirected to home page
  useEffect(() => {
    if (userAuth) {
      props.history.push("/");
    }
  }, [userAuth, props.history]);

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
      setError({ msg: "Passwords dont match" });
    } else {
      registerUser({ name, email, password });
    }
  };

  return (
    <div className="register">
      <h1 className="login-title">Sign Up</h1>
      <form className="register-form" onSubmit={submit}>
        <input
          className="register-inputs"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <input
          className="register-inputs"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="register-inputs"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input
          className="register-inputs"
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handleChange}
        />
        <input type="submit" value="Sign Up" className="btn" />
      </form>
      <div className="question">
        {errors !== null && (
          <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span>X</span>
          </button>
        )}
        <p>
          Already have an account?{" "}
          <Link className="sign-up-btn" to="/login">
            Log in
          </Link>{" "}
        </p>
      </div>
      {/* lava lamp */}
      <div className="lavalamp">
        <div class="lamp">
          <div class="lava">
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob"></div>
            <div class="blob top"></div>
            <div class="blob bottom"></div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Register;

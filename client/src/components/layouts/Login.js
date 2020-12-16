import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1 className='login-title'>Login</h1>
      <form>
        <input type="email" name="email" placeholder="Email" className="add-comp" />
        <input type="password" name="password" placeholder="Password" className="add-comp" />
        <input type="submit" value="Sign In" className="btn" />
      </form>
      <div className="question">
        <p className='already'>
          Already have an account? <Link to="/login" className='sign-up-btn' >Sign Up</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;

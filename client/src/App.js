import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import LeadState from "./context/LeadState";
import AuthState from "./context/authContext/AuthState";
import Register from "./components/layouts/Register";
import Login from "./components/layouts/Login";

function App() {
  return (
    <AuthState>
      <LeadState>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </LeadState>
    </AuthState>
  );
}

export default App;

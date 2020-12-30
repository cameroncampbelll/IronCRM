import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import LeadState from "./context/LeadState";
import AuthState from "./context/authContext/AuthState";
import Register from "./components/layouts/Register";
import Login from "./components/layouts/Login";
// import PrivateRoute from "./routes/PrivateRoute";
import setToken from "../src/utils/setToken";

if (localStorage.token) {
  setToken(localStorage.token);
}

function App() {
  return (
    <Router>
      <AuthState>
        <LeadState>
          <div>
            <Navbar />
            <Switch>
              {/* <PrivateRoute exact path="/" component={Home} /> */}
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </LeadState>
      </AuthState>
    </Router>
  );
}

export default App;

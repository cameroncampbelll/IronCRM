import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import LeadState from "./context/LeadState";

function App() {
  return (
    <LeadState>
      <div>
        <Navbar />
        <Home />
      </div>
    </LeadState>
  );
}

export default App;

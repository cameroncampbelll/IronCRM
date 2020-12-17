import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authContext/authContext";
import LeadForm from "./LeadForm";
import LeadCounter from "./LeadCounter";
import LeadFilter from "./LeadFilter";
import LeadSearch from "./LeadSearch";
import Leads from "./Leads";

const Home = () => {
  const { getUser } = useContext(AuthContext);
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className-="app-container">
      <div className="main">
        <div className="filter">
          <LeadFilter />
          <LeadSearch />
        </div>
        <LeadForm />
        <LeadCounter />
      </div>
      <Leads />
    </div>
  );
};

export default Home;

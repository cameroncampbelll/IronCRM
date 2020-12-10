import react from "react";
import LeadForm from "./LeadForm";
import LeadCounter from "./LeadCounter";
import LeadFilter from "./LeadFilter";
import LeadSearch from "./LeadSearch";
import Leads from "./Leads";

const Home = () => {
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

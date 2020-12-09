import react from "react";
import LeadForm from "./LeadForm";
import LeadCounter from "./LeadCounter";
import LeadFilter from "./LeadFilter";
import LeadSearch from "./LeadSearch";

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
    </div>
  );
};

export default Home;

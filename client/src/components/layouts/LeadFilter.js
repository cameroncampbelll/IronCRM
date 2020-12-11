import React, { useContext } from "react";
import LeadContext from "../../context/LeadContext";

const LeadFilter = () => {
  const { toggleFilter } = useContext(LeadContext);
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" onChange={() => toggleFilter()} />
        <span className="slider-round"></span>
      </label>
      <p className="lead">Show Completed Sales Only</p>
    </div>
  );
};

export default LeadFilter;

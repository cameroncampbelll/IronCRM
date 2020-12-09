import React from "react";

const LeadFilter = () => {
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider-round"></span>
      </label>
      <p className="lead">Show Completed Sales Only</p>
    </div>
  );
};

export default LeadFilter;

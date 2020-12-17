import React, { useContext, useRef } from "react";
import LeadContext from "../../context/LeadContext";

const LeadSearch = () => {
  const { searchLead, clearSearch } = useContext(LeadContext);
  const searchValue = useRef("");
  const handleChange = (event) => {
    if (searchValue.current.value !== "") {
      searchLead(event.target.value);
    } else {
      clearSearch();
    }
  };
  return (
    <div className='search-function'>
      <input
        ref={searchValue}
        type="text"
        onChange={handleChange}
        className="search"
        placeholder="Search for Contact"
      />
      <i className="" />
    </div>
  );
};

export default LeadSearch;

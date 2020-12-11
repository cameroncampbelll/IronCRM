import React, { useReducer } from "react";
import LeadContext from "./LeadContext";
import LeadReducer from "./LeadReducer";
import { TOGGLE_FILTER, SEARCH_LEAD, CLEAR_SEARCH } from "../types";

const LeadState = (props) => {
  const initialState = {
    filterLead: false,
    search: null,
    leads: [
      {
        id: 1,
        name: "Cameron Campbell",
        phone: "954 253 1234",
        contactType: "Non-contacted",
        notes: "First contact explained wasnt interested",
        isSold: false,
      },
      {
        id: 2,
        name: "Brandon Garrett",
        phone: "786 333 1234",
        contactType: "Contacted",
        notes: "First contact explained wasnt interested",
        isSold: true,
      },
    ],
  };

  const [state, dispatch] = useReducer(LeadReducer, initialState);

  const toggleFilter = () => {
    dispatch({
      type: TOGGLE_FILTER,
    });
  };
  const searchLead = (lead) => {
    dispatch({
      type: SEARCH_LEAD,
      payload: lead,
    });
  };
  const clearSearch = () => {
    dispatch({
      type: CLEAR_SEARCH,
    });
  };
  //   console.log(state.filterLead);
  return (
    <LeadContext.Provider
      value={{
        leads: state.leads,
        filterLead: state.filterLead,
        search: state.search,
        toggleFilter,
        searchLead,
        clearSearch,
      }}
    >
      {props.children}
    </LeadContext.Provider>
  );
};

export default LeadState;

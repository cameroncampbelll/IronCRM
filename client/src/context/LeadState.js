import React, { useReducer } from "react";
import LeadContext from "./LeadContext";
import LeadReducer from "./LeadReducer";
import {
  TOGGLE_FILTER,
  SEARCH_LEAD,
  CLEAR_SEARCH,
  ADD_LEAD,
  REMOVE_LEAD,
  UPDATE_LEAD,
  EDIT_LEAD,
  CLEAR_EDIT,
} from "../types";

const LeadState = (props) => {
  const initialState = {
    filterLead: false,
    search: null,
    editAble: null,
    leads: [
      {
        id: 1,
        name: "Cameron Campbell",
        phone: "954 253 1234",
        email: "email@email.com",
        contactType: "Non-contacted",
        notes: "First contact explained wasnt interested",
        isSold: false,
      },
      {
        id: 2,
        name: "Brandon Garrett",
        phone: "786 333 1234",
        email: "email2@email.com",
        contactType: "Contacted",
        notes: "First contact explained wasnt interested",
        isSold: false,
      },
      {
        id: 3,
        name: "John Dope",
        phone: "786 333 4321",
        email: "email2@email.com",
        contactType: "Sale-Pending",
        notes: "First contact explained wasnt interested",
        isSold: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(LeadReducer, initialState);

  const addLead = (lead) => {
    lead.id = Date.now();
    lead.isSold = false;
    dispatch({
      type: ADD_LEAD,
      payload: lead,
    });
  };

  const removeLead = (id) => {
    dispatch({
      type: REMOVE_LEAD,
      payload: id,
    });
  };

  const updateLead = (lead) => {
    dispatch({
      type: UPDATE_LEAD,
      payload: lead,
    });
  };

  const editLead = (lead) => {
    dispatch({
      type: EDIT_LEAD,
      payload: lead,
    });
  };

  const clearEdit = () => {
    dispatch({
      type: CLEAR_EDIT,
    });
  };

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
        editAble: state.editAble,
        addLead,
        removeLead,
        updateLead,
        editLead,
        clearEdit,
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

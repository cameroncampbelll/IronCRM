import React, { useReducer } from "react";
import LeadContext from "./LeadContext";
import LeadReducer from "./LeadReducer";

const LeadState = (props) => {
  const initialState = {
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
        phone: "954 254 1234",
        contactType: "Non-contacted",
        notes: "First contact explained wasnt interested",
        isSold: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(LeadReducer, initialState);
  return (
    <LeadContext.Provider
      value={{
        leads: state.leads,
      }}
    >
      {props.children}
    </LeadContext.Provider>
  );
};

export default LeadState;

import React, { useContext } from "react";
import LeadContext from "../../context/LeadContext";
import Lead from "./Lead";

const Leads = () => {
  const { leads } = useContext(LeadContext);
  return (
    <div>
      {leads.map((lead) => (
        <Lead key={lead.id} />
      ))}
    </div>
  );
};

export default Leads;

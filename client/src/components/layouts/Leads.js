import React, { useContext, useEffect } from "react";
import LeadContext from "../../context/LeadContext";
import Lead from "./Lead";

const Leads = () => {
  const { leads, filterLead, search, getLeads } = useContext(LeadContext);
  useEffect(() => {
    getLeads();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="all-cards">
      {search !== null
        ? search.map((lead) => <Lead key={lead.id} lead={lead} />)
        : leads
            ?.filter((lead) => !filterLead || lead.isSold)
            .map((lead) => <Lead key={lead.id} lead={lead} />)}
    </div>
  );
};

export default Leads;

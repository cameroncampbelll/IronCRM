import React, { useContext } from "react";
import LeadContext from "../../context/LeadContext";
import Lead from "./Lead";

const Leads = () => {
  const { leads, filterLead, search } = useContext(LeadContext);
  return (
    <div className='all-cards'>
      {search !== null
        ? search.map((lead) => <Lead key={lead.id} lead={lead} />)
        : leads
          .filter((lead) => !filterLead || lead.isSold)
          .map((lead) => <Lead key={lead.id} lead={lead} />)}
    </div>
  );
};

export default Leads;

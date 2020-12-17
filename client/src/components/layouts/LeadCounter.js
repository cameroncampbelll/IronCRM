import React, { useContext } from "react";
import LeadContext from "../../context/LeadContext";

const LeadCounter = () => {
  const { leads } = useContext(LeadContext);
  const totalInQueue = leads.length;
  const sold = leads.filter((lead) => lead.isSold);
  const totalSold = sold.length;
  const inQueueByType = (type) =>
    leads.filter((lead) => lead.contactType === type).length;
  const soldByType = (type) =>
    leads.filter((lead) => sold.contactType === type).length;

  return (
    <div className='fullcounter'>
      <table className='lead-counter'>
        <tbody>
          <tr >
            <th>Contact Type</th>
            <th>In Queue</th>
            <th>Sold</th>
          </tr>
          <tr >
            <th className='counter-row'>Non-Contacted</th>
            <td>{inQueueByType("Non-contacted")}</td>
            <td>{soldByType("Non-contacted")}</td>
          </tr>
          <tr >
            <th className='counter-row'>Contacted</th>
            <td>{inQueueByType("Contacted")}</td>
            <td>{soldByType("Contacted")}</td>
          </tr>
          <tr >
            <th className='counter-row'>Sale-Pending</th>
            <td>{inQueueByType("Sale-Pending")}</td>
            <td>{soldByType("Sale-Pending")}</td>
          </tr>
          <tr >
            <th className='counter-row'>Total</th>
            <td>{totalInQueue}</td>
            <td>{totalSold}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeadCounter;

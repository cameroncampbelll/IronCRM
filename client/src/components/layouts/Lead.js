import React, { useContext } from "react";
import LeadContext from "../../context/LeadContext";

const Lead = ({ lead }) => {
  const { removeLead, updateLead, editLead } = useContext(LeadContext);
  const { id, name, phone, contactType, email, notes, isSold } = lead;

  const handleRemove = () => {
    removeLead(id);
  };
  const handleIsSold = () => {
    updateLead({ ...lead, isSold: !isSold });
  };
  return (
    <div className="lead-card">
      <div className="card-head"></div>

      <div className="card-body">
        <h2>{name}</h2>
        <span>{contactType}</span>
        <div className="contact">
          <p>{phone}</p>
          <p>{email}</p>
        </div>
        <div className="notes">
          <p>{notes}</p>
          <div className="card-bottom-btns">
            <label className="sold-check">
              Sold
              <input type="checkbox" onChange={handleIsSold} />
            </label>
            <button className='buttons' onClick={() => editLead(lead)}>Edit</button>
            <button className='buttons' onClick={handleRemove}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lead;

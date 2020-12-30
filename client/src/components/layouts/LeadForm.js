import React, { useState, useContext, useEffect } from "react";
import LeadContext from "../../context/LeadContext";

// this is where i left off on friday

const LeadForm = () => {
  const { addLead, editAble, updateLead, clearEdit } = useContext(LeadContext);
  useEffect(() => {
    if (editAble !== null) {
      setLead(editAble);
    } else {
      setLead({
        name: "",
        phone: "",
        email: "",
        contactType: "Non-contacted",
        notes: "",
      });
    }
  }, [editAble]);

  const [lead, setLead] = useState({
    name: "",
    phone: "",
    email: "",
    contactType: "Non-contacted",
    notes: "",
  });

  // contactType bellow removed for deploy

  const { name, phone, email, notes } = lead;

  const handleChange = (event) => {
    setLead({
      ...lead,
      [event.target.name]: event.target.value,
    });
  };

  const handleRadioChange = (event) => {
    setLead({
      ...lead,
      contactType: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (editAble !== null) {
      updateLead(lead);
      clearEdit();
    } else {
      addLead(lead);
      setLead({
        name: "",
        phone: "",
        email: "",
        contactType: "Non-contacted",
        notes: "",
      });
    }
  };

  return (
    <div className="invite-section">
      <h1 className="add-contact">
        {" "}
        {editAble !== null ? "Edit Contact" : "Add Contact"}
      </h1>
      <form className="whole-add-field" onSubmit={onSubmit}>
        <div className="add-field">
          <input
            className="add-comp"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input
            className="add-comp"
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
          <input
            className="add-comp"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            className="add-comp"
            type="text"
            placeholder="Notes"
            name="notes"
            value={notes}
            onChange={handleChange}
          />
        </div>

        <h2 className="options-label">Contact Type</h2>
        <div className="options">
          <input
            type="radio"
            name="Non-Contacted"
            value="Non-Contacted"
            onChange={handleRadioChange}
            checked={lead.contactType === "Non-Contacted"}
          />
          <label>Non-Contacted</label>

          <input
            type="radio"
            name="Contacted"
            value="Contacted"
            onChange={handleRadioChange}
            checked={lead.contactType === "Contacted"}
          />
          <label>Contacted</label>

          <input
            type="radio"
            name="Sale-Pending"
            value="Sale-Pending"
            onChange={handleRadioChange}
            checked={lead.contactType === "Sale-Pending"}
          />
          <label>Sale-Pending</label>

          {/* <label className="container">
            Contacted
            <input
              type="radio"
              name="Contacted"
              value="Contacted"
              onChange={handleChange}
              checked={lead.contactType === "Contacted"}
            />
          </label>
          <label className="container">
            Sale-Pending
            <input
              type="radio"
              name="Sale-Pending"
              value="Sale-Pending"
              onChange={handleChange}
              checked={lead.contactType === "Sale-Pending"}
            />
         </label> */}
        </div>
        <div className="btns">
          <input
            type="submit"
            value={editAble !== null ? "Update Lead" : "Add Contact"}
            className="btn"
          ></input>
          {editAble !== null ? (
            <input
              onClick={clearEdit}
              value="Cancel"
              type="button"
              className="btn"
            />
          ) : null}
        </div>
      </form>
    </div>
  );
};
export default LeadForm;

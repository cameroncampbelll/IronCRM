import React, { useState } from "react";

// this is where i left off on friday

const LeadForm = () => {
  const [lead, setLead] = useState({
    name: "",
    phone: "",
    email: "",
    contactType: "Non-contacted",
    notes: "",
  });

  const { name, phone, email, contactType, notes } = lead;

  const handleChange = (event) => {
    setLead({
      ...lead,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setLead({
      name: "",
      phone: "",
      email: "",
      contactType: "Non-contacted",
      notes: "",
    });
  };
  return (
    <div className="invite-section">
      <h1 className="add-contact">Add Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="add-field">
          <input className="add-comp"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input className="add-comp"
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
          <input className="add-comp"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input className="add-comp"
            type="text"
            placeholder="Notes"
            name="notes"
            value={notes}
            onChange={handleChange}
          />
        </div>
        <h2 className="options-label">Contact Type</h2>
        <div className="options">
          <label className="container">
            Non-contacted
            <input
              type="radio"
              name="lead"
              value="Non-contacted"
              checked={contactType === "Non-contacted"}
              onChange={handleChange}
            />
          </label>
          <label className="container">
            Contacted
            <input
              type="radio"
              name="lead"
              value="Contacted"
              onChange={handleChange}
            />
          </label>
          <label className="container">
            Sale-Pending
            <input
              type="radio"
              name="lead"
              value="Sale-Pending"
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Add Contact" className="btn"></input>
      </form>
    </div>
  );
};
export default LeadForm;

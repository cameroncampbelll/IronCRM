import React from "react";

const LeadForm = () => {
  return (
    <div className="invite-section">
      <h1>Add Contact</h1>
      <form>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Phone Number" name="Phone" />
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Notes" name="notes" />
        <p className="options-label">Contact Type</p>
        <div className="options">
          <label className="container">
            Non-contacted
            <input type="radio" name="lead" value="Non-contacted" />
          </label>
          <label className="container">
            Contacted
            <input type="radio" name="lead" value="Contacted" />
          </label>
          <label className="container">
            Sale-Pending
            <input type="radio" name="lead" value="Non-contacted" />
          </label>
        </div>
        <input type="submit" value="Add Contact" className="btn"></input>
      </form>
    </div>
  );
};
export default LeadForm;

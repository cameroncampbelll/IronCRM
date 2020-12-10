import React from "react";

const Lead = ({ lead }) => {
  // const { name, phone, contactType, notes, isSold } = lead;
  return (
    <div className="lead-card">
      <div className="card-head">
        <div>
          <label>
            Sold
            <input type="checkbox" />
          </label>
        </div>
        <div>
          <button>Edit</button>
          <button>Remove</button>
        </div>
      </div>
      <div className="card-body">
        <h2>John Doe</h2>
        <span>Non-Contacted</span>
        <div className="contact">
          <p>800-867-5309</p>
          <p>email@email.com</p>
        </div>
        <div className="notes">
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lead;

import React from "react";

const Lead = ({ lead }) => {
  const { name, phone, contactType, email, notes, isSold } = lead;
  return (
    <div className="lead-card">
      <div className="card-head">

      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <span>{contactType}</span>
        <div className="contact">
          <p>{phone}</p>
          <p>{email}</p>
        </div>
        <div className="notes">
          <p>{notes}</p>
          <div className='card-bottom-btns'>
            <label>
              Sold
            <input type="checkbox" />
            </label>
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lead;

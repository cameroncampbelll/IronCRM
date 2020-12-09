import React from "react";

const LeadCounter = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Contact Type</th>
            <th>Contacted</th>
            <th>Sold</th>
          </tr>
          <tr>
            <th>Non-Contacted</th>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>Contacted</th>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>Sale-Pending</th>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeadCounter;

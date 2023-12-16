import React from "react";

const ApproveTable = ({ vendors }) => {
  return (
    <div>
      <h2>List of Vendors</h2>
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
           
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor._id}>
              <td>{vendor.name}</td>
              <td>{vendor.location}</td>
              
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default ApproveTable;

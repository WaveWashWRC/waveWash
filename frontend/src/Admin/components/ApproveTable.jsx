import React from "react";

const ApproveTable = ({ vendors }) => {
  return (
    <div>
      <h2>List of Vendors</h2>
      {vendors.length > 0 ? (
        <table>
          {/* Mapping through all vendors */}
          {vendors.map((vendor, index) => (
            <tr key={index}>
              <td>{vendor.companyName}</td>
              {/* Display other vendor details as needed */}
            </tr>
          ))}
        </table>
      ) : (
        <p>No vendors found</p>
      )}
    </div>
  );
};

export default ApproveTable;

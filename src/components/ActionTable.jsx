// src/components/ActionTable.jsx
import React from "react";
import PropTypes from "prop-types";
import '../styles/App.css';
const ACTIONS = {
  assets: [
    { action: "Add Asset", parameters: ["kind", "type", "status", "assignmentDate", "username"] },
    { action: "Update Asset", parameters: ["id", "kind", "type", "status", "assignmentDate", "username"] },
    { action: "Get Asset by ID", parameters: ["id"] },
    { action: "Delete Asset", parameters: ["id"] },
    { action: "Get All Assets", parameters: [] },
    { action: "Get Assets by Kind", parameters: ["kind"] },
    { action: "Get Assets by Type", parameters: ["type"] },
    { action: "Get Assets by Type & Kind", parameters: ["type", "kind"] },
    { action: "Get All Asset Associations", parameters: [] },
    { action: "Get Asset History", parameters: ["id"] },
    { action: "Get User's Assets", parameters: ["username"] },
    { action: "Count Assets by Type & Kind", parameters: ["type", "kind"] },
  ],
  maintenance: [
    { action: "Add Maintenance", parameters: ["completionDate", "details", "serviceProvider", "cost", "assetId"] },
    { action: "Update Maintenance", parameters: ["id", "completionDate", "details", "serviceProvider", "cost", "assetId"] },
    { action: "Get Maintenance by ID", parameters: ["id"] },
    { action: "Delete Maintenance", parameters: ["id"] },
    { action: "Get All Maintenances", parameters: [] },
    { action: "Get All Maintenance History", parameters: [] },
    { action: "Get Maintenance History for Asset", parameters: ["id"] },
  ],
  users: [
    { action: "Get User by Username", parameters: ["username"] },
    { action: "Get All Users", parameters: [] },
    { action: "Add User", parameters: ["role", "username", "password", "firstName", "lastName"] },
    { action: "Delete User", parameters: ["username"] },
  ],
};

const ActionTable = ({ category }) => {
  const data = ACTIONS[category] || [];

  return (
    <div className="action-table">
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Required Parameters</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><strong>{item.action}</strong></td>
              <td>
                {item.parameters.length > 0 
                  ? item.parameters.join(", ") 
                  : "No parameters required"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ActionTable.propTypes = {
  category: PropTypes.oneOf(["assets", "maintenance", "users"]).isRequired,
};

export default ActionTable;
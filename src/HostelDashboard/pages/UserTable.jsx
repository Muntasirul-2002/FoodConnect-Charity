import React, { useEffect, useState } from "react";
import "../styles/UseTable.css";
import { getConfig, axiosInstance } from "../../utils/request";
const UserTable = () => {
  const [hostelUsers, setHostelUsers] = useState([]);

  const getAllHostelUsers = async () => {
    try {
      await getConfig();
      const response = await axiosInstance.get("/api/v1/auth/hostel-users");
      if (response.data && response.data.success) {
        setHostelUsers(response.data.viewAllHostelUsers);
        console.log("all users data: ", response.data.viewAllHostelUsers);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };
  useEffect(() => {
    getAllHostelUsers();
  }, []);

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Users List</h2>
      </div>

      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {hostelUsers.map((user) => (
              <tr key={user.id} className="data-sizes">
                <td data-label="Name">{user.name}</td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Phone">{user.phone}</td>
                <td data-label="Role">
                  <span className={`role-badge ${user.role.toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>
                <td data-label="Actions">
                  <button className="action-button edit">Edit</button>
                  <button className="action-button delete" disabled>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;

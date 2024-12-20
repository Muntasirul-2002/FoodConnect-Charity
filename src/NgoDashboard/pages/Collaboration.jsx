import React, { useEffect, useState } from "react";
import "../style/collaboration.css";
import { axiosInstance, getConfig } from "../../utils/request";
const Collaboration = () => {
  const [hostelUsers, setHostelUsers] = useState([]);
  const [resUsers, setResUsers] = useState([]);

  const getAllHostelUsers = async () => {
    try {
      await getConfig();
      const response = await axiosInstance.get("/api/v1/auth/hostel-users");
      if (response.data && response.data.success) {
        setHostelUsers(response.data.viewAllHostelUsers);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };
  const getAllRestaurantUsers = async () => {
    try {
      await getConfig();
      const response = await axiosInstance.get("/api/v1/auth/restaurant-users");
      if (response.data && response.data.success) {
        setResUsers(response.data.getAllRestaurant);
      }
    } catch (error) {
      console.log("something went wrong");
    }
  };
  useEffect(() => {
    getAllHostelUsers();
    getAllRestaurantUsers();
  }, []);
  return (
    <>
      <div className="table-container">
        <div className="table-header">
          <h2>Hostels List</h2>
        </div>

        <div className="table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>Hostel Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
               
              </tr>
            </thead>
            <tbody>
              {hostelUsers.map((user) => (
                <tr key={user.id} className="data-sizes">
                  <td data-label="hosName">{user.hosName}</td>
                  <td data-label="Name">{user.name}</td>
                  <td data-label="Email">
                    <span>
                    📧
                    </span>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td data-label="Phone">
                    <span>📞</span>
                    <a className="ms-4" href={`tel:${user.phone}`}>{user.phone}</a>{" "}
                  </td>
                  <td data-label="Role">
                    <span className={`role-badge ${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="table-container">
        <div className="table-header">
          <h2>Restaurant List</h2>
        </div>

        <div className="table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>Restaurant Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {resUsers.map((res) => (
                <tr key={res._id} className="data-sizes">
                  <td>{res.resName}</td>
                  <td data-label="Name">{res.name}</td>
                  <td data-label="Email">
                    <span>
                    📧
                    </span>
                    <a href={`mailto:${res.email}`}>{res.email}</a>
                  </td>

                  <td data-label="Phone">
                    <span>📞</span>
                    <a className="ms-4" href={`tel:${res.phone}`}>{res.phone}</a>{" "}
                  </td>

                  <td data-label="Role">
                    <span className={`role-badge ${res.role.toLowerCase()}`}>
                      {res.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Collaboration;

// components/Sidebar.js
import React from "react";
import "../../styles/dashboard.css";

const Sidebar = ({ isOpen, setActivePage, toggleSidebar }) => {
  const handleClick = (page) => {
    setActivePage(page);
    toggleSidebar(); // Close sidebar on mobile after clicking an item
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2>Dashboard</h2>
      <button onClick={() => handleClick("home")}>Home</button>
      <button onClick={() => handleClick("add")}>Add</button>
      <button onClick={() => handleClick("profile")}>Profile</button>
      <button onClick={() => handleClick("user")}>Users</button>
      <button onClick={()=> handleClick("orders")}>Orders</button>
    </div>
  );
};

export default Sidebar;

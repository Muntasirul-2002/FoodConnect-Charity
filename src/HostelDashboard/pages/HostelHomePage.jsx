import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AddFood from "./AddFood";
import ProfilePage from "./ProfilePage";
import "../../styles/dashboard.css";
import Dashboard from "./Dashboard";
import UserTable from "./UserTable";
import Orders from "./Orders";
const HostelHomePage = () => {
  const [activePage, setActivePage] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Dashboard />;
      case "add":
        return <AddFood />;
      case "profile":
        return <ProfilePage />;
      case "user":
        return <UserTable/>
      case "orders":
        return <Orders/>
      default:
        return <AddFood />;
    }
  };
  return (
    <div className="dashboard-container">
      <button className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>
      <Sidebar
        isOpen={isSidebarOpen}
        setActivePage={setActivePage}
        toggleSidebar={toggleSidebar}
      />
      <div className={`dashboard-content ${isSidebarOpen ? "overlay" : ""}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default HostelHomePage;

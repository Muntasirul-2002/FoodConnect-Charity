import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddAdmin from "./pages/AddAdmin";
import CheckOrders from "./pages/CheckOrders";
import RemoveMember from "./pages/RemoveMember";
import Admins from "./pages/Admins";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Dashboard />;
      case "view-admin":
        return <Admins />;
      case "Add-Admin":
        return <AddAdmin />;
      case "Check-Orders":
        return <CheckOrders />;
      case "Remove-Member":
        return <RemoveMember />;
      default  : return null
    }
  };
  return (
    <div className="dashboard-container">
      <button className="toggle-button" onClick={toggleSidebar}></button>
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

export default AdminDashboard;

import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from './Dashboard';
import AddFood from './AddFood';
import ProfilePage from './ProfilePage';
import UserTable from './UserTable';

const RestaurantHomePage = () => {
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
        default:
          return <AddFood />;
      }
    };
  return (
    <div>
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
    </div>
  )
}

export default RestaurantHomePage
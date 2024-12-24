import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Sidebar from '../components/Sidebar'
import Collaboration from './Collaboration'
import Orders from './Orders'
import ViewAllNgo from './ViewAllNgo'

const NgoDashboard = () => {
  const [activePage, setActivePage] = useState("home")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Dashboard />;
      case "collaboration":
        return <Collaboration/>
      case "orders" : 
        return <Orders />
      case "view-ngo":
        return <ViewAllNgo/>
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
  )
}

export default NgoDashboard
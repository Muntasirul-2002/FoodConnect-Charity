import React from 'react'
import '../../styles/dashboard.css'
const Sidebar = ({isOpen, setActivePage, toggleSidebar}) => {
const handleClick = (page) => {
    setActivePage(page)
    toggleSidebar()
}
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>NGO Dashboard</h2>
        <button onClick={() => handleClick("home")}>Home</button>
        <button onClick={() => handleClick("collaboration")}>Collaboration</button>
        <button onClick={() => handleClick("orders")}>Orders</button>
        <button onClick={() => handleClick("view-ngo")}>View All NGO</button>

    </div>
  )
}

export default Sidebar
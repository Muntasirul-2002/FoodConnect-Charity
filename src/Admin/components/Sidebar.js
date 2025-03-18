import React from 'react'
import '../../styles/dashboard.css'
const Sidebar = ({isOpen, setActivePage, toggleSidebar}) => {
const handleClick = (page) => {
    setActivePage(page)
    toggleSidebar()
}
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Admin Dashboard</h2>
        <button onClick={() => handleClick("home")}>Home</button>
        <button onClick={() => handleClick("Add-Admin")}>Add Admin</button>
        <button onClick={() => handleClick("view-admin")}>View Admins</button>
        <button onClick={() => handleClick("Check-Orders")}>Check Orders</button>
        <button onClick={()=> handleClick("Remove-Member")}>Remove Member</button>

    </div>
  )
}

export default Sidebar
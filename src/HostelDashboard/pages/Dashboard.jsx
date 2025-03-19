import React, { useEffect, useState } from "react";
import "../styles/hostel.css";
import { useAuth } from "../../context/Auth";
import { axiosInstance } from "../../utils/request";
const Dashboard = () => {
  const [auth] = useAuth();
  const [recentOrder, setRecentOrder] = useState([]);
  const [foodUploads] = useState({
    total: 156,
    thisWeek: 24,
    pending: 3,
  });

  const fetchOrderById = async () => {
    try {
      const res = await axiosInstance.get(
        `/api/v1/order/get-orders/${auth?.user?._id}`
      );
      if (res.data.success) {
        setRecentOrder(res.data.orders);
      }
    } catch (error) {
      console.log("Error in getting orders: ", error);
    }
  };
  useEffect(() => {
    fetchOrderById();
  }, [auth?.user?._id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    // Add leading zeros to day and month if needed
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Hostel Dashboard</h1>
        <div className="header-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>
              <i className="search-icon">🔍</i>
            </button>
          </div>
          <div className="notifications">
            <span className="notification-badge">3</span>
            <i className="notification-icon">🔔</i>
          </div>
        </div>
      </header>

      <div className="dashboard-container">
        <main className="main-content">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-icon food-uploads">🍲</div>
              <div className="stat-details">
                <h3>Total Food Uploads</h3>
                <p className="stat-value">{foodUploads.total}</p>
                <p className="stat-info">+{foodUploads.thisWeek} this week</p>
              </div>
            </div>
            {/* <div className="stat-card">
              <div className="stat-icon bookings">📝</div>
              <div className="stat-details">
                <h3>Active Bookings</h3>
                <p className="stat-value">42</p>
                <p className="stat-info">12 checking in today</p>
              </div>
            </div> */}
            {/* <div className="stat-card">
              <div className="stat-icon guests">👥</div>
              <div className="stat-details">
                <h3>Current Guests</h3>
                <p className="stat-value">87</p>
                <p className="stat-info">68% occupancy</p>
              </div>
            </div> */}
            {/* <div className="stat-card">
              <div className="stat-icon revenue">💰</div>
              <div className="stat-details">
                <h3>Monthly Revenue</h3>
                <p className="stat-value">$28,654</p>
                <p className="stat-info">↑ 12% from last month</p>
              </div>
            </div> */}
          </div>

          <div className="dashboard-row">
            <div className="todo-container">
              <div className="profile-card">
                <div className="profile-avatar">
                  <img
                    src="https://avatar.iran.liara.run/public"
                    alt="User Avatar"
                  />
                </div>
                <div className="profile-info">
                  <h3>{auth?.user?.name}</h3>
                  <p className="role">{auth?.user?.hosName}</p>
                  <p className="email">{auth?.user?.email}</p>
                  <p className="join-date">{auth?.user?.phone}</p>
                </div>
                <button className="logout-btn">Logout</button>
              </div>
            </div>

            <div className="recent-orders">
            <div className="card-header">
              <h2>Recent Food Orders</h2>
              <span className="view-all">View all orders</span>
            </div>
            <div className="table-container">
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Item</th>
                    <th>Customer_Id</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrder.map((order) => (
                    <tr key={order._id}>
                      <td>#{order._id}</td>
                      <td>
                        {Array.isArray(order.food_name)
                          ? order.food_name.join(", ")
                          : order.food_name}
                      </td>
                      <td>{order.buyerId}</td>
                      <td>{formatDate(order.createdAt)}</td>
                      <td>
                        <span
                          className={`status-badge ${order.status.toLowerCase()}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>

          
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

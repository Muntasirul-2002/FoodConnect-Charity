import React, { useState } from 'react'
import '../styles/admin.css'
import { useAuth } from '../../context/Auth';
const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [auth] = useAuth()
  
    // Sample data for dashboard stats
    const stats = [
      { id: 1, title: 'Total Users', value: '12,532', trend: '+12%', icon: '👥' },
      { id: 2, title: 'Revenue', value: '₹86,589', trend: '+23%', icon: '💰' },
      { id: 3, title: 'Total Admins', value: '2', trend: '+8%', icon: '📊' },
      { id: 4, title: 'Food Uploads', value: '10.28%', trend: '+2.3%', icon: '📈' }
    ];
    
    // Sample data for recent activities
    const activities = [
      { id: 1, user: 'John Doe', action: 'Created a new project', time: '10 minutes ago', avatar: '👨‍💼' },
      { id: 2, user: 'Sarah Smith', action: 'Completed task #32', time: '1 hour ago', avatar: '👩‍💼' },
      { id: 3, user: 'Alex Johnson', action: 'Uploaded new files', time: '2 hours ago', avatar: '👨‍💻' },
      { id: 4, user: 'Emma Wilson', action: 'Updated profile', time: '3 hours ago', avatar: '👩‍💻' }
    ];
    
    // Sample data for tasks
    const tasks = [
      { id: 1, title: 'Update homepage design', priority: 'High', status: 'In Progress', progress: 75 },
      { id: 2, title: 'Fix login page bug', priority: 'Critical', status: 'To Do', progress: 0 },
      { id: 3, title: 'Add new payment gateway', priority: 'Medium', status: 'In Progress', progress: 40 },
      { id: 4, title: 'Create SEO report', priority: 'Low', status: 'Completed', progress: 100 }
    ];
  return (
    <div className="dashboard">
    {/* Header */}
    <header className="header">
      <div className="logo">
        <h1>{auth?.user?.email}</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">🔍</button>
      </div>
    </header>
    
    {/* Main Navigation */}
    <nav className="main-nav">
      <ul>
        <li className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</li>
        <li className={activeTab === 'analytics' ? 'active' : ''} onClick={() => setActiveTab('analytics')}>Analytics</li>
        <li className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Projects</li>
        <li className={activeTab === 'tasks' ? 'active' : ''} onClick={() => setActiveTab('tasks')}>Tasks</li>
        <li className={activeTab === 'calendar' ? 'active' : ''} onClick={() => setActiveTab('calendar')}>Calendar</li>
        <li className={activeTab === 'reports' ? 'active' : ''} onClick={() => setActiveTab('reports')}>Reports</li>
      </ul>
    </nav>
    
    {/* Main Content */}
    <main className="main-content">
      <div className="page-title">
        <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
        <div className="date-picker">
          <span>March 2025</span>
          <button className="date-nav">◀</button>
          <button className="date-nav">▶</button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <section className="stats-grid">
        {stats.map(stat => (
          <div className="stat-card" key={stat.id}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-trend">{stat.trend}</div>
            </div>
          </div>
        ))}
      </section>
      
      {/* Charts Section */}
      <section className="charts-section">
        <div className="chart-card main-chart">
          <div className="chart-header">
            <h3>Revenue Overview</h3>
            <div className="chart-actions">
              <select>
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
          <div className="chart-placeholder">
            <div className="mock-chart">
              <div className="chart-bar" style={{height: '60%'}}></div>
              <div className="chart-bar" style={{height: '75%'}}></div>
              <div className="chart-bar" style={{height: '45%'}}></div>
              <div className="chart-bar" style={{height: '80%'}}></div>
              <div className="chart-bar" style={{height: '65%'}}></div>
              <div className="chart-bar" style={{height: '90%'}}></div>
              <div className="chart-bar" style={{height: '70%'}}></div>
            </div>
          </div>
        </div>
        
        <div className="chart-card pie-chart">
          <div className="chart-header">
            <h3>Traffic Sources</h3>
          </div>
          <div className="chart-placeholder">
            <div className="mock-pie">
              <div className="pie-segment" style={{transform: 'rotate(0deg)', background: '#4e54c8'}}></div>
              <div className="pie-segment" style={{transform: 'rotate(130deg)', background: '#8f94fb'}}></div>
              <div className="pie-segment" style={{transform: 'rotate(210deg)', background: '#c8c9ff'}}></div>
            </div>
            <div className="pie-legend">
              <div className="legend-item"><span className="color-dot" style={{background: '#4e54c8'}}></span> Direct (45%)</div>
              <div className="legend-item"><span className="color-dot" style={{background: '#8f94fb'}}></span> Organic (30%)</div>
              <div className="legend-item"><span className="color-dot" style={{background: '#c8c9ff'}}></span> Referral (25%)</div>
            </div>
          </div>
        </div>
      </section>
      <section className="two-columns">
        <div className="column">
          <div className="card tasks-card">
            <div className="card-header">
              <h3>Recent Tasks</h3>
              <button className="add-button">+ Add Task</button>
            </div>
            <div className="tasks-list">
              {tasks.map(task => (
                <div className="task-item" key={task.id}>
                  <div className="task-info">
                    <h4>{task.title}</h4>
                    <div className="task-meta">
                      <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                      <span className="status">{task.status}</span>
                    </div>
                  </div>
                  <div className="task-progress">
                    <div className="progress-bar">
                      <div className="progress" style={{width: `${task.progress}%`}}></div>
                    </div>
                    <span>{task.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <button className="view-all">View All Tasks</button>
            </div>
          </div>
        </div>
        
        <div className="column">
          <div className="card activities-card">
            <div className="card-header">
              <h3>Recent Activities</h3>
            </div>
            <div className="activities-list">
              {activities.map(activity => (
                <div className="activity-item" key={activity.id}>
                  <div className="activity-avatar">{activity.avatar}</div>
                  <div className="activity-details">
                    <div className="activity-user">{activity.user}</div>
                    <div className="activity-action">{activity.action}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <button className="view-all">View All Activities</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}

export default Dashboard
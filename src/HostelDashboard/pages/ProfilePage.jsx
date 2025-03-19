import React from "react";
import { useAuth } from "../../context/Auth";
import "../styles/profile.css";
const ProfilePage = () => {
  const [auth] = useAuth();
  return (
    <>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
           
            </div>
            <h1>Welcome, {auth.user.name}</h1>
          </div>

          <div className="profile-content">
            <div className="profile-section">
              <div className="profile-field">
                <span className="field-icon">🏢 </span>

                <p>{auth.user.hosName}</p>
              </div>
              <div className="profile-field">
                <span className="field-icon">✉️</span>

                <p>{auth.user.email}</p>
              </div>
              <div className="profile-field">
                <span className="field-icon">📌</span>

                <p>{auth.user.address}</p>
              </div>
              <div className="profile-field">
                <span className="field-icon">📍</span>

                <p>{auth.user.landmark}</p>
              </div>
              <div className="profile-field">
                <span className="field-icon">📞</span>
                <p>{auth?.user?.phone}</p>
              </div>
              <div className="profile-field">
                <span className="field-icon">👑</span>
                <p>{auth.user.role}</p>
              </div>
            </div>

            <div className="profile-actions">
              <button className="edit-button">Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

import React from "react";

import "../../styles/adminlogin.css";

const AdminLogin = () => {
  const handleGoogleLogin = () => {
    // Redirect to Google OAuth endpoint
    window.location.href = "/api/v1/auth/google";
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="form-title">Admin Login</h2>
        <div className="social-login">
          <button
            onClick={handleGoogleLogin}
            className="login-google-button"
          >
            <span className="logo-google">
              <ion-icon name="logo-google"></ion-icon>
            </span>
            Continue with Google
          </button>
        </div>
        <p className="separator">
          <span>or</span>
        </p>
        <p className="info-text">
          Use the Google button above to sign in or register as an admin.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;

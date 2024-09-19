import React from "react";
import facebook from '../../image/facebook.svg'
import '../../styles/adminlogin.css'
const AdminLogin = () => {
  return (
    <div className="login-body">
      <div className="login-container">
      <h2 className="form-title">Admin Login</h2>
      <div className="social-login">
        <button className="social-button">
          <img src={facebook} alt="facebook" className="social-icon" /> <span>Facebook</span>
        </button>

      </div>
      <p className="separator"><span>or</span></p>

      <form action="" className="login-form">
        <div className="input-wrapper">
          <input type="email" placeholder="email" className="input-field" required/>
          <i className="material-symbols-outlined">mail</i>
        </div>
        <div className="input-wrapper">
          <input type="password" placeholder="password" className="input-field" required/>
          <i className="material-symbols-outlined">lock</i>
        </div>
        <a href="" className="forgot-pass-link">Forgot Password?</a>
        <button className="login-button">Login</button>
      </form>
     
    </div>
    </div>
  );
};

export default AdminLogin;

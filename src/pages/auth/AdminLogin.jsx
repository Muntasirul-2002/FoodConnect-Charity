import React, { useState } from "react";
import facebook from "../../image/facebook.svg";
import "../../styles/adminlogin.css";
const AdminLogin = () => {
  const [selectForm, setSelectForm] = useState("admin");

  const changeFormState = (e) => {
    setSelectForm(e.target.value);
  };
  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="form-title">
          {selectForm === "restaurant"
            ? "Restaurant Login"
            : selectForm === "ngo"
            ? "NGO Login"
            : "Admin Login"}
        </h2>
        <div className="social-login">
          <button className="social-button">
            <img src={facebook} alt="facebook" className="social-icon" />{" "}
            <span>Facebook</span>
          </button>
        </div>
        <p className="separator">
          <span>or</span>
        </p>
        <div>
          <div className="input-wrapper mb-4">
            <span className="details">Select Login Type</span>
            <select onChange={changeFormState} value={selectForm} required>
              <option value="restaurant">Restaurant</option>
              <option value="admin">Admin</option>
              <option value="ngo">NGO</option>
            </select>
          </div>

          {selectForm === "restaurant" ? (
            <>
              <form action="" className="login-form">
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="email"
                    className="input-field"
                    required
                  />
                  <i className="material-symbols-outlined">mail</i>
                </div>
                <div className="input-wrapper">
                  <input
                    type="password"
                    placeholder="password"
                    className="input-field"
                    required
                  />
                  <i className="material-symbols-outlined">lock</i>
                </div>
                <a href="" className="forgot-pass-link">
                  Forgot Password?
                </a>
                <button className="login-button">Login</button>
              </form>
            </>
          ) : selectForm === "ngo" ? (
            <>
              <form action="" className="login-form">
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="email"
                    className="input-field"
                    required
                  />
                  <i className="material-symbols-outlined">mail</i>
                </div>
                <div className="input-wrapper">
                  <input
                    type="password"
                    placeholder="password"
                    className="input-field"
                    required
                  />
                  <i className="material-symbols-outlined">lock</i>
                </div>
                <a href="" className="forgot-pass-link">
                  Forgot Password?
                </a>
                <button className="login-button">Login</button>
              </form>
            </>
          ) : (
            <>
              <form action="" className="login-form">
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="email"
                    className="input-field"
                    required
                  />
                  <i className="material-symbols-outlined">mail</i>
                </div>
                <div className="input-wrapper">
                  <input
                    type="password"
                    placeholder="password"
                    className="input-field"
                    required
                  />
                  <i className="material-symbols-outlined">lock</i>
                </div>
                <a href="" className="forgot-pass-link">
                  Forgot Password?
                </a>
                <button className="login-button">Login</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

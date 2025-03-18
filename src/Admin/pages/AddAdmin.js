import React, { useState } from "react";
import "../styles/auth.css";
import { axiosInstance, getConfig } from "../../utils/request";
import toast from "react-hot-toast";
const AddAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await getConfig();
      const response = await axiosInstance.post("/api/v1/auth/admin-signup", {
        email,
        password,
      });
      if (response && response.data.success) {
        toast.success("Admin added");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="admin-form-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign In</h2>
        <p className="form-subtitle">Add a new admin</p>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-container">
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="label-container">
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddAdmin;

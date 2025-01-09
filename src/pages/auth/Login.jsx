import React, { useState } from "react";
import facebook from "../../image/facebook.svg";
import "../../styles/adminlogin.css";
import { axiosInstance, getConfig } from "../../utils/request";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/Auth";
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [selectForm, setSelectForm] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const changeFormState = (e) => {
    setSelectForm(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await getConfig();
      const response = await axiosInstance.post("/api/v1/auth/login", {
        email,
        password,
        role: selectForm, 
      });
      if (response && response.data.success) {
        toast.success("Login successful");
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(response.data));
        navigate("/");
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="login-container">
          <h2 className="form-title">
            {selectForm === "restaurant"
              ? "Restaurant Login"
              : selectForm === "ngo"
              ? "NGO Login"
              : selectForm === "hostel"
              ? "Hostel Login"
              : "Login"}
          </h2>
          <div className="social-login">
            {/* <button className="social-button">
              <img src={facebook} alt="facebook" className="social-icon" />
              <span>Facebook</span>
            </button> */}
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
                <option value="hostel">Hostel</option>
              </select>
            </div>

            <form onSubmit={handleLogin} className="login-form">
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i className="material-symbols-outlined">mail</i>
              </div>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="material-symbols-outlined">lock</i>
              </div>
              <Link to={'/reset-password'} className="forgot-pass-link">
                Forgot Password?
              </Link>
              <Link to={'/signup'} className="forgot-pass-link">
              Signup
              </Link>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

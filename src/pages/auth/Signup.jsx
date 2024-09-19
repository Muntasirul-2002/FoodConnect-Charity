import React from "react";
import "../../styles/signup.css";
import signLogo from "../../image/logo.png";
const Signup = () => {
  return (
    <>
      {/* <div className="inner-banner">
        <section className="w3l-breadcrumb py-5">
          <div className="container py-lg-5 py-md-3">
            <h2 className="title">About Us</h2>
          </div>
        </section>
      </div> */}

      <div className="body">
        <div className="signup-container">
          <div className="title">Registration</div>
          <form className="signup-form" action="">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Your email" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Password" required />
              </div>
              <div className="input-box">
                <span className="details">Ngo Name</span>
                <input type="text" placeholder="Your Organization" required />
              </div>
              <div className="input-box">
                <span className="details">Mobile</span>
                <input type="text" placeholder="Mobile no" required />
              </div>
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="gender-details">
                <span className="gender-title">Gender</span>
                <div className="category">
                  <label htmlFor="male">
                    <input type="radio" id="male" name="gender" />
                    <span className="dot one"></span>
                    <span className="gender">Male</span>
                  </label>
                  <label htmlFor="female">
                    <input type="radio" name="gender" id="female" />
                    <span className="dot one"></span>
                    <span className="gender">Female</span>
                  </label>
                </div>
              </div>

             
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

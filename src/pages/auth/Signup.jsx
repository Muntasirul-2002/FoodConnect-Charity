import React, { useState } from "react";
import "../../styles/signup.css";
const Signup = () => {
  const [selectForm, setSelectForm] = useState("ngo");

  const handleFormChange = (e) => {
    setSelectForm(e.target.value);
  };
  return (
    <>
      <div className="body">
        <div className="signup-container">
          <div className="title">
            {selectForm === "ngo" ? "NGO Signup" : "Restaurant Signup"}
          </div>
          <form className="signup-form" action="">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Select Type</span>
                <select onChange={handleFormChange} value={selectForm} required>
                  <option value="ngo">NGO</option>
                  <option value="restaurant">Restaurant</option>
                </select>
              </div>

              {selectForm === "ngo" && (
                <>
                  <div className="input-box">
                    <span className="details">NGO Name</span>
                    <input
                      type="text"
                      placeholder="Organization name"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Working Email</span>
                    <input type="text" placeholder="NGO email" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="text" placeholder="Password" required />
                  </div>
                  <div className="input-box">
                    <span className="details">User Name</span>
                    <input type="text" placeholder="Register Name" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Mobile</span>
                    <input type="text" placeholder="Mobile no" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Full Address</span>
                    <input type="text" placeholder="Location" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Member Id (optional)</span>
                    <input type="text" placeholder="Member id" />
                  </div>
                  <div className="input-box">
                    <span className="details">Role</span>
                    <select
                      required
                    >
                      <option value="owner">Owner</option>
                      <option value="vol">Volunteer</option>
                      <option value="member">Member</option>
                    </select>
                  </div>
                  {/* <div className="gender-details">
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
                  </div> */}
                </>
              )}

              {selectForm === "restaurant" && (
                <>
                  <div className="input-box">
                    <span className="details">Restaurant Name</span>
                    <input type="text" placeholder="Restaurant name" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Address</span>
                    <textarea
                      rows={4}
                      cols={4}
                      style={{width: '100%', height: '90%'}}
                      type="text"
                      placeholder="Restaurant address"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="text" placeholder="set Password" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone No.</span>
                    <input type="number" placeholder="Phone Number" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Role</span>
                    <select
                      required
                    >
                      <option value="owner">Owner</option>
                      <option value="manager">Manager</option>
                    </select>
                  </div>
                </>
              )}
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

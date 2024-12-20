import React, { useState } from "react";
import "../../styles/signup.css";
import { axiosInstance, getConfig } from "../../utils/request";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [selectForm, setSelectForm] = useState("ngo");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [memberId, setMemberId] = useState("");
  const [resName, setResName] = useState(""); 
  const [landmark, setLandmark] = useState(""); 
  const [phone, setPhone] = useState("");
  const [hosName, setHosName] = useState("")
  const [role, setRole] = useState("owner");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (selectForm === "ngo") {
        data = {
          orgName,
          email,
          password,
          name,
          mobile,
          address,
          memberId,
          role,
        };
      } else if (selectForm === "restaurant") {
        data = {
          resName,
          email,
          password,
          name,
          address,
          landmark,
          phone,
          role,
        };
      }else if(selectForm === "hostel"){
        data = {
          hosName,
          email,
          password,
          name,
          address,
          landmark,
          phone,
          role,
        }
      }

      const response = await axiosInstance.post(
        `/api/v1/auth/${selectForm}-signup`,
        data,
        await getConfig()
      );

      if (response && response.data.success) {
        toast.success(`${selectForm.charAt(0).toUpperCase() + selectForm.slice(1)} signup successful`);
        navigate('/');
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error(error.response?.data?.message || "Signup error, please try again.");
    }
  };

  const handleFormChange = (e) => {
    setSelectForm(e.target.value);
    // Reset states for the selected form
    setOrgName("");
    setEmail("");
    setPassword("");
    setName("");
    setMobile("");
    setAddress("");
    setMemberId("");
    setResName(""); // Reset restaurant name
    setHosName("")
    setLandmark(""); 
    setPhone("");
    setRole("owner");
  };
  return (
    <>
      <div className="body">
        <div className="signup-container">
          <div className="title">
            {
              selectForm === "ngo" ? "NGO Signup" :
              selectForm === "restaurant" ? "Restaurant Signup" : "Hostel Signup"
            }
          </div>
          <form onSubmit={handleSubmit} className="signup-form" action="">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Select Type</span>
                <select onChange={handleFormChange} value={selectForm} required>
                  <option value="ngo">NGO</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hostel">Hostel</option>
                </select>
              </div>

              {selectForm === "ngo" && (
                <>
                  <div className="input-box">
                    <span className="details">NGO Name</span>
                    <input
                      type="text"
                      placeholder="Organization name"
                      value={orgName}
                      onChange={(e)=> setOrgName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Working Email</span>
                    <input type="email" placeholder="NGO email" onChange={(e)=> setEmail(e.target.value)} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required />
                  </div>
                  <div className="input-box">
                    <span className="details">User Name</span>
                    <input type="text" placeholder="Register Name" onChange={(e)=> setName(e.target.value)} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Mobile</span>
                    <input type="text" placeholder="Mobile no" onChange={(e)=> setMobile(e.target.value)} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Full Address</span>
                    <input type="text" placeholder="Location" onChange={(e)=> setAddress(e.target.value)} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Member Id (optional)</span>
                    <input type="text" placeholder="Member id" onChange={(e)=> setMemberId(e.target.value)} />
                  </div>
                  <div className="input-box">
                    <span className="details">Role</span>
                    <select
                      required
                      onChange={(e)=> setRole(e.target.value)}
                    >
                      <option value="owner">Owner</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="member">Member</option>
                    </select>
                  </div>
                </>
              )}

{selectForm === "restaurant" && (
              <>
                <div className="input-box">
                  <span className="details">Restaurant Name</span>
                  <input
                    type="text"
                    placeholder="Restaurant name"
                    value={resName}
                    onChange={(e) => setResName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    placeholder="Set Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">User Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Address</span>
                  <textarea
                    rows={4}
                    cols={4}
                    style={{ width: '100%', height: '90%' }}
                    placeholder="Restaurant address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Landmark</span>
                  <input
                    type="text"
                    placeholder="Landmark (e.g., @AR Kirana Store)"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone No.</span>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Role</span>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="owner">Owner</option>
                    <option value="manager">Manager</option>
                  </select>
                </div>
              </>
            )}
            {selectForm === "hostel" && (
              <>
                <div className="input-box">
                  <span className="details">Hostel Name</span>
                  <input
                    type="text"
                    placeholder="Hostel name"
                    value={hosName}
                    onChange={(e) => setHosName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    placeholder="Set Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">User Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Address</span>
                  <textarea
                    rows={4}
                    cols={4}
                    style={{ width: '100%', height: '90%' }}
                    placeholder="Restaurant address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Landmark</span>
                  <input
                    type="text"
                    placeholder="Landmark (e.g., @AR Kirana Store)"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone No.</span>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Role</span>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="owner">Hostel Owner</option>
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

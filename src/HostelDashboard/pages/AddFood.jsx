import React, { useState } from "react";
import "../styles/addfood.css";
import { getConfig, axiosInstance } from "../../utils/request";
const AddFood = () => {
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [hostelName, setHostelName] = useState("");
  const [location, setLocation] = useState("");
  const [landmark, setLandmark] = useState("");
  const [contact, setContact] = useState("");
  const [images, setImages] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const foodData = new FormData();
      foodData.append("foodName", foodName);
      foodData.append("description", description);
      foodData.append("category", category);
      foodData.append("hostelName", hostelName);
      foodData.append("location", location);
      foodData.append("landmark", landmark);
      foodData.append("contact", contact);
      images.forEach((image) => foodData.append("images", image));
      await getConfig();
      const { data } = await axiosInstance.post(
        `/api/v1/food/add-food`,
        foodData
      );
      if (data?.success) {
        alert("Food Uploaded Successfully");
      } else {
        alert("Food Uploaded Failure");
      }
    } catch (error) {
      console.log("Failed to upload food", error);
    }
  };

 
  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files))

  }
  return (
    <>
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h2>Add New Food Item</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Food Name</label>
                <input
                  id="name"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  type="text"
                  placeholder="Food Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows={4}
                cols={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Select Hostel</label>
              <select
                id="category"
                value={hostelName}
                onChange={(e) => setHostelName(e.target.value)}
              >
                <option value="">Select a Hostel</option>
                <option value="appetizer">Appetizer</option>
                <option value="main-course">Main Course</option>
                <option value="dessert">Dessert</option>
                <option value="beverage">Beverage</option>
              </select>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="location">Restaurant Location</label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Restaurant Location"
                />
              </div>

              <div className="form-group">
                <label htmlFor="landmark">Landmark</label>
                <input id="landmark" type="text" step="0.01" value={landmark} onChange={(e)=> setLandmark(e.target.value)}  />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="category">Select Category</label>
              <select id="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="">Select a Food Category</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="file-upload">Food Image</label>
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={handleImageChange}
                accept="image/*"
                className="file-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Details</label>
              <input id="contact" value={contact} onChange={(e)=> setContact(e.target.value)} type="number" />
            </div>

            <center>
              <button type="submit" className="add-food-btn">
                Upload Food Item
              </button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFood;

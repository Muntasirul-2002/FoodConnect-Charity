import React, { useState, useEffect } from "react";
import "../styles/addfood.css";
import { getConfig, axiosInstance } from "../../utils/request";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/Auth";

const AddFood = () => {
  const [auth] = useAuth();
  const [formData, setFormData] = useState({
    foodName: "",
    description: "",
    quantity: "",
    hostelName: "",
    sellerId: "",
    location: "",
    landmark: "",
    category: "",
    contact: "",
  });
  const [images, setImages] = useState([]);

  // Set hostelName from auth when component mounts or auth changes
  useEffect(() => {
    if (auth?.user?.hosName) {
      setFormData(prev => ({
        ...prev,
        hostelName: auth.user.hosName || "",
        sellerId : auth.user._id || "",
        location : auth.user.address || "",
        landmark : auth.user.landmark || "",
        contact : auth.user.phone || "",
      }));
    }
  }, [auth?.user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const foodData = new FormData();
      
      // Append all form data
      Object.entries(formData).forEach(([key, value]) => {
        foodData.append(key, value);
      });

      // Append images
      images.forEach((image) => {
        foodData.append("images", image);
      });

      // Log FormData contents for debugging
      for (let pair of foodData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      await getConfig();
      const { data } = await axiosInstance.post(
        "/api/v1/food/add-food",
        foodData
      );

      if (data?.success) {
        toast.success("Food item added successfully!");
        // Reset form
        setFormData({
          foodName: "",
          description: "",
          quantity: "",
          hostelName: auth?.user?.hosName || "NA",
          sellerId: auth?.user?._id || "NA",
          location: auth?.user?.address || "NA",
          landmark: auth?.user?.landmark || "NA",
          category: "",
          contact: auth?.user?.phone || "NA",
        });
        setImages([]);
      } else {
        toast.error(data.message || "Failed to add food item.");
      }
    } catch (error) {
      console.error("Error adding food item:", error);
      toast.error("An error occurred while adding food.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Add New Food Item</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="foodName">Food Name</label>
              <input
                id="foodName"
                name="foodName"
                value={formData.foodName}
                onChange={handleChange}
                type="text"
                placeholder="Food Name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              cols={4}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity(KG)</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hostelName">Hostel</label>
            <input
              id="hostelName"
              name="hostelName"
              type="text"
              value={formData.hostelName}
              readOnly
              className="bg-gray-100"
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Restaurant Location"
                required
              />
            </div>
            </div>
            <div className="form-grid">
            <div className="form-group">
              <label htmlFor="location">YourID</label>
              <input
                id="sellerId"
                name="sellerId"
                type="text"
                value={formData.sellerId}
                onChange={handleChange}
                placeholder="Seller ID"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="landmark">Landmark</label>
              <input
                id="landmark"
                name="landmark"
                type="text"
                value={formData.landmark}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category">Select Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
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
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Details</label>
            <input
              id="contact"
              name="contact"
              type="number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <center>
            <button type="submit" className="add-food-btn">
              Upload Food Item
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
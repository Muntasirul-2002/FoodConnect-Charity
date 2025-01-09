import React, { useState } from "react";
import "../styles/addfood.css";
import { getConfig, axiosInstance } from "../../utils/request";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/Auth";
const AddFood = () => {
  const [auth, setAuth] = useAuth();
  // const [foodName, setFoodName] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  // const [hostelName, setHostelName] = useState(auth?.user?.hosName || "");
  // const [location, setLocation] = useState("");
  // const [landmark, setLandmark] = useState("");
  // const [contact, setContact] = useState("");
  // const [images, setImages] = useState([]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const foodData = new FormData();
  //     foodData.append("foodName", foodName);
  //     foodData.append("description", description);
  //     foodData.append("category", category);
  //     foodData.append("hostelName", hostelName);
  //     foodData.append("location", location);
  //     foodData.append("landmark", landmark);
  //     foodData.append("contact", contact);
  //     images.forEach((image) => foodData.append("images", image));
  //     await getConfig();
  //     const { data } = await axiosInstance.post(
  //       `/api/v1/food/add-food`,
  //       foodData
  //     );
  //     if (data?.success) {
  //       toast.success("Food Uploaded Successfully");
  //       setFoodName("");
  //       setDescription("");
  //       setCategory("");
  //       setLocation("");
  //       setLandmark("");
  //       setContact("");
  //       setImages([]);
  //     } else {
  //       toast.error("Food Uploaded Failure");
  //     }
  //   } catch (error) {
  //     console.log("Failed to upload food", error);
  //     toast.error("Something went wrong!!");
  //   }
  // };

  // const handleImageChange = (e) => {
  //   setImages(Array.from(e.target.files));
  // };

  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [landmark, setLandmark] = useState("");
  const [category, setCategory] = useState("");
  const [contact, setContact] = useState("");
  const [images, setImages] = useState([]);

  // Handle file input change for images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const foodData = new FormData();
      foodData.append("foodName", foodName);
      foodData.append("description", description);
      foodData.append("quantity", quantity);
      foodData.append("location", location);
      foodData.append("landmark", landmark);
      foodData.append("category", category);
      foodData.append("contact", contact);
      foodData.append("userRole", auth?.user?.role); // Add userRole to the payload

      // Conditionally include either 'restaurant' or 'hosName'
      if (auth?.user?.role === "restaurant") {
        foodData.append("restaurant", auth?.user?.user); // Assuming the restaurant name is stored in the user data
      } else if (auth?.user?.role === "hostel") {
        foodData.append("hosName", auth?.user?.user); // Assuming the hostel name is stored in the user data
      }

      // Add images to the FormData
      images.forEach((image) => foodData.append("images", image));
await getConfig()
      const { data } = await axiosInstance.post(`/api/v1/food/add-food`, foodData); // Update API URL as necessary

      if (data?.success) {
        toast.success("Food item added successfully!");
        // Reset form fields
        setFoodName("");
        setDescription("");
        setQuantity("");
        setLocation("");
        setLandmark("");
        setCategory("");
        setContact("");
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
            <div>
          <label className="block font-medium mb-1">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

            {/* <div className="form-group">
              <label htmlFor="hostel">Select Hostel</label>
              <select
                id="hostel"
                value={hostelName}
                onChange={(e) => setHostelName(e.target.value)}
              >
                <option value={auth?.user?.hosName}>
                  {auth?.user?.hosName}
                </option>
              </select>
            </div> */}
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="location"> Location</label>
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
                <input
                  id="landmark"
                  type="text"
                  step="0.01"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="category">Select Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Details</label>
              <input
               required
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                type="number"
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
    </>
  );
};

export default AddFood;

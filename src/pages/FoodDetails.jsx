import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance, getConfig } from "../utils/request";
import toast from "react-hot-toast";
import "../styles/fooddetails.css";

const FoodDetails = () => {
  const params = useParams();
  const [foodDetails, setFoodDetails] = useState(null);

  const getFoodDetails = async () => {
    try {
      await getConfig();
      const { data } = await axiosInstance.get(
        `/api/v1/food/single-food/${params.slug}`
      );
      console.log(data); // Check the structure here
      setFoodDetails(data.viewSingleFood || null);
    } catch (error) {
      console.log("Error in getting food details:", error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getFoodDetails();
  }, []);

  if (!foodDetails) {
    return <div className="no-data-message">Food details not available.</div>;
  }

  return (
    <div className="food-details-div-container">
        <h1 className="selected-food-details">
            Selected Food Details :
        </h1>
        <div className="food-details-container">
      <div className="food-image">
        {foodDetails.images && foodDetails.images.length > 0 ? (
          <img
            src={`http://localhost:8080/image/${foodDetails.images[0]}`}
            alt={foodDetails.name}
          />
        ) : (
          <img
            src="https://via.placeholder.com/300"
            alt="Placeholder Image"
          />
        )}
      </div>
      <div className="food-info">
        <h1 className="food-title">Title : {foodDetails.name}</h1>
        <h1 className="food-title">Desc : {foodDetails.description}</h1>
        <h1 className="food-title">Availability : {foodDetails.quantity} KG</h1>
        <h1 className="food-title">Category : {foodDetails.category}</h1>
        <h1 className="food-title">Restaurant : {foodDetails.restaurant} , {foodDetails.landmark}</h1>
        <h1 className="food-title">Contact : {foodDetails.contact}</h1>
       <div className="icons">
       <span className="navigate">
       <ion-icon name="navigate-outline">
       </ion-icon>
       </span>
       <span className="ms wp">
      <a href={`https://wa.me/${foodDetails.contact}`} className="wa-me">
      <ion-icon name="logo-whatsapp"></ion-icon>
      </a>
       </span>
       <span className="ms cart"><ion-icon name="cart-outline"></ion-icon></span>
       </div>
      </div>
    </div>
    </div>
  );
};

export default FoodDetails;

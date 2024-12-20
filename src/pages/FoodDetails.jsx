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
      <h1 className="selected-food-details">Selected Food Details :</h1>
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
          <h3 className="food-title">Name : {foodDetails.name}</h3>
          <h3 className="food-desc">
            Desc : <span>{foodDetails.description}</span>
          </h3>
          <h3 className="food-category">
            Category : <span>{foodDetails.category}</span>
          </h3>
          <h3 className="food-title">
            Restaurant : {foodDetails.location} , near {foodDetails.landmark}
          </h3>
          
          <h3 className="food-title">
            Contact : <span>{foodDetails.contact}</span>
          </h3>
          <div className="icons">
            <span className="ms wp">
              <a
                href={`https://wa.me/${foodDetails.contact}`}
                className="wa-me"
              >
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
            </span>
            <a href={`tel:${foodDetails.contact}`}>
              <span className="mail cart">
                <ion-icon name="call-outline"></ion-icon>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;

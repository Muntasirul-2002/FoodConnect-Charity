import React, { useEffect, useState } from "react";
import "../styles/foods.css";
import { getConfig, axiosInstance } from "../utils/request";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import img404 from "../image/img-not-found.jpg";
import { useCart } from "../context/cart";


const Foods = () => {
  const [allFoods, setAllFoods] = useState();
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const [hoveredDot, setHoveredDot] = useState(null)

  const foodList = async (req, res) => {
    try {
      await getConfig();
      const res = await axiosInstance.get("/api/v1/food/food-list");
      if (res && res.data.success) {
        setAllFoods(res.data.viewFood);
        // console.log(res.data)
        localStorage.setItem("food", JSON.stringify(res.data));
      } else {
        toast.error("Food not found");
      }
    } catch (error) {
      console.log("Error in getting food:", error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    foodList();
  }, []);

  //fetch time
  const formatTime = (dateString) => {
    const date = new Date(dateString);

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours} : ${minutes} ${ampm}`;
  };

  //check the freshness based on color and uploaded time
  const getFreshNess = (createdAt) => {
    const currentTime = new Date();
    const uploadTime = new Date(createdAt);
    const differenceInHours = (currentTime - uploadTime) / (1000 * 60 * 60);

    if (differenceInHours < 1) {
      return "green";
    } else if (differenceInHours >= 1 && differenceInHours <= 3) {
      return "yellow";
    } else {
      return "red";
    }
  };

  //add food in cart
  const addFoodInCart = async (food) => {
    try {
      await getConfig();
      const { data } = await axiosInstance.post("/api/v1/food/cart/add-item", {
        userID: auth?.user?._id,
        foodID: food._id,
        role: auth?.user?.role,
      });

      const updatedCart = [...cart, food];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Item added in cart");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add item in cart");
    }
  };
  return (
    <div>
      <div className="inner-banner">
        <section className="w3l-breadcrumb py-5">
          <div className="container py-lg-5 py-md-3">
            <h2 className="title">Available Foods</h2>
          </div>
        </section>
      </div>
      <div className="position-relative">
        <div className="shape overflow-hidden">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* food card design */}
      <section className="section-meals">
        <div className="container grid grid--3-cols margin-right-md">
          {allFoods && allFoods.length > 0 ? (
            allFoods.map((foods, index) => (
              <div className="meal" key={index}>
                {foods.images && foods.images.length > 0 ? (
                  <Link to={`/food-details/${foods.slug}`}>
                    <img
                      src={`http://localhost:8080/image/${foods.images[0]}`}
                      className="meal-img"
                      alt="Japanese Gyozas"
                    />
                  </Link>
                ) : (
                  <img
                    src={img404}
                    className="meal-img"
                    alt="Japanese Gyozas"
                  />
                )}

                <div className="meal-content">
                  <div className="meal-tags">
                    <span className="tag tag--vegetarian">
                      {foods.category}
                    </span>
                  </div>
                  <p className="meal-title">{foods.name}</p>
                  <ul className="meal-attributes">
                    <li className="meal-attribute">
                      <ion-icon name="reader-outline"></ion-icon>
                      <span>{foods.description.substring(30, 0)} ...</span>
                    </li>
                    <li className="meal-attribute">
                    <ion-icon name="storefront-outline"></ion-icon>
                      <span>{foods.hosName ? foods.hosName : foods.restaurant ? foods.restaurant : "Not Specified"}</span>
                    </li>
                    <li className="meal-attribute">
                      <ion-icon name="navigate-outline"></ion-icon>
                      <span>
                        {foods.location} <strong>|</strong> near{" "}
                        {foods.landmark}
                      </span>
                    </li>
                    <li className="meal-attribute">
                      <ion-icon name="call-outline"></ion-icon>
                      <span>
                        <strong>{foods.contact}</strong>
                      </span>
                    </li>
                    <li className="meal-attribute">
                      <ion-icon name="calendar-outline"></ion-icon>
                      <span>
                        Uploaded: <strong>{formatTime(foods.createdAt)}</strong>
                        <div
                          className="status-dot-wrapper"
                          style={{
                            display: "inline-block",
                            position: "relative",
                            marginLeft: "10px",
                          }}
                          onMouseEnter={() => setHoveredDot(index)} 
                          onMouseLeave={() => setHoveredDot(null)}
                        >
                          <span
                            className="status-dot"
                            style={{
                              backgroundColor: getFreshNess(foods.createdAt),
                              display: "inline-block",
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              marginLeft: "5px",
                            }}
                          ></span>

                          {hoveredDot === index && (
                            <div
                              className="popover"
                              style={{
                                position: "absolute",
                                top: "20px",
                                left: "-10px",
                                backgroundColor: "white",
                                color: "#333",
                                padding: "5px 10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                zIndex: 100,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {getFreshNess(foods.createdAt) === "green" &&
                                "Fresh | Recently Uploaded"}
                              {getFreshNess(foods.createdAt) === "yellow" &&
                                "Moderate | Uploaded 1-3 hours ago)"}
                              {getFreshNess(foods.createdAt) === "red" &&
                                "Old | Uploaded more than 3 hours ago)"}
                            </div>
                          )}
                        </div>
                      </span>
                    </li>
                  </ul>

                  {auth?.user?.role === "hostel" && "restaurant" ? (
                    <> </>
                  ) : (
                    <center>
                      <button
                        onClick={() => {
                          addFoodInCart(foods);
                        }}
                        className="order-button"
                      >
                        Add to Bag
                      </button>
                    </center>
                  )}
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="no-data-available">
                <h2>No Foods Available</h2>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Foods;

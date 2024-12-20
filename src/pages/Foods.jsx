import React, { useEffect, useState } from "react";
import "../styles/foods.css";
import { getConfig, axiosInstance } from "../utils/request";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Foods = () => {
  const [allFoods, setAllFoods] = useState();
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
  <Link to={`/food-details/${foods.slug}`}>
    <div className="meal" key={index}>
      {foods.images && foods.images.length > 0 ? (
        <img
          src={`http://localhost:8080/image/${foods.images[0]}`}
          className="meal-img"
          alt="Japanese Gyozas"
        />
      ) : (
        <img
          src="https://github.com/erenburuk/html-css-course/blob/main/07-Omnifood-Desktop/img/meals/meal-2.jpg?raw=true"
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
            <span>
              {foods.description}
            </span>
          </li>
          <li className="meal-attribute">
            <ion-icon
              className="meal-icon"
              name="restaurant-outline"
            />
            <span>
              {foods.restaurant} <strong>|</strong> {foods.landmark}
            </span>
          </li>
          <li className="meal-attribute">
          <ion-icon name="call-outline"></ion-icon>
            <span>
              <strong>
                {foods.contact}
              </strong>
            </span>
          </li>
          <li className="meal-attribute">
          <ion-icon name="calendar-outline"></ion-icon>
          <span>
            Uploaded : <strong>17:30 PM</strong>
          </span>
          </li>
          <li className="meal-attribute">
          <ion-icon name="navigate-outline"></ion-icon>
          <span>
           <a href="https://maps.app.goo.gl/tN5cFTUAjrpyWMan6">
            Map Location
           </a>
          </span>

          </li>
        </ul>
      </div>
    </div>
  </Link>
  ))
) : (
  <></>
)}


          <div className="meal">
            <img
              src="https://github.com/erenburuk/html-css-course/blob/main/07-Omnifood-Desktop/img/meals/meal-2.jpg?raw=true"
              className="meal-img"
              alt="Avocado Salad"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Vegan</span>
                <span className="tag tag--paleo">Paleo</span>
              </div>
              <p className="meal-title">Avocado Salad</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="flame-outline" />
                  <span>
                    <strong>400</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="restaurant-outline" />
                  <span>
                    NutriScore ® <strong>92</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="star-outline" />
                  <span>
                    <strong>4.8</strong> rating (441)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal">
            <img
              src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="meal-img"
              alt="Japanese Gyozas"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Vegan</span>
              </div>
              <p className="meal-title">Thai Red Curry</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="flame-outline" />
                  <span>
                    <strong>450</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="restaurant-outline" />
                  <span>
                    NutriScore ® <strong>86</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="star-outline" />
                  <span>
                    <strong>4.4</strong> rating (349)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal">
            <img
              src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="meal-img"
              alt="Japanese Gyozas"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Vegan</span>
              </div>
              <p className="meal-title">Thai Red Curry</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="flame-outline" />
                  <span>
                    <strong>450</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="restaurant-outline" />
                  <span>
                    NutriScore ® <strong>86</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="star-outline" />
                  <span>
                    <strong>4.4</strong> rating (349)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal">
            <img
              src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="meal-img"
              alt="Japanese Gyozas"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Vegan</span>
              </div>
              <p className="meal-title">Thai Red Curry</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="flame-outline" />
                  <span>
                    <strong>450</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="restaurant-outline" />
                  <span>
                    NutriScore ® <strong>86</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="star-outline" />
                  <span>
                    <strong>4.4</strong> rating (349)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal">
            <img
              src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="meal-img"
              alt="Japanese Gyozas"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Vegan</span>
              </div>
              <p className="meal-title">Thai Red Curry</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="flame-outline" />
                  <span>
                    <strong>450</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="restaurant-outline" />
                  <span>
                    NutriScore ® <strong>86</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="star-outline" />
                  <span>
                    <strong>4.4</strong> rating (349)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foods;

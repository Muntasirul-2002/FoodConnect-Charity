import React from "react";
import "../styles/foods.css";
const Foods = () => {
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
          <div className="meal">
            <img
              src="https://github.com/erenburuk/html-css-course/blob/1aacbb283eed0f760ab9f905e4ad5099cfa11204/07-Omnifood-Desktop/img/meals/meal-1.jpg?raw=true"
              className="meal-img"
              alt="Japanese Gyozas"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegetarian">Vegetarian</span>
              </div>
              <p className="meal-title">Japanese Gyozas</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="flame-outline" />
                  <span>
                    <strong>650</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="restaurant-outline" />
                  <span>
                    NutriScore ® <strong>74</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="star-outline" />
                  <span>
                    <strong>4.9</strong> rating (537)
                  </span>
                </li>
              </ul>
            </div>
          </div>
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

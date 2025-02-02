import React, { useState } from "react";
import "../styles/cart.css";
import { useAuth } from "../context/Auth";
import { useCart } from "../context/cart";
import { axiosInstance, getConfig } from "../utils/request";
import { toast } from "react-hot-toast";
import emptyImg from "../image/empty-cart.webp";
import {useNavigate} from 'react-router-dom'
const Cart = ({ backend_url }) => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    ngo: "",
    contact: "",
    location: "",
    landmark: "",
    mapLink: "",
  });

  const openMapSelection = () => {
    const googleMapsURL = "https://www.google.com/maps";
    window.open(googleMapsURL, "_blank", "width=800,height=600");
  };
  const handleRemoveItem = async (fId) => {
    try {
      console.log(cart);
      await getConfig();
      const { data } = await axiosInstance.post(
        "/api/v1/food/cart/remove-item",
        {
          userID: auth?.user?._id,
          foodID: fId,
        }
      );
      if (data.success) {
        setCart(data.cart);
        localStorage.setItem("cart", JSON.stringify(data.cart));
        toast.success("Item Deleted");
      } else {
        toast.error(data.message || "Failed to remove item");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error removing item from cart");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handlePlaceOrder = async () => {
  //   try {
  //     if (
  //       !formData.name ||
  //       !formData.ngo ||
  //       !formData.contact ||
  //       !formData.location
  //     ) {
  //       return toast.error("Please fill all required fields");
  //     }
  //     if (cart.length === 0) {
  //       return toast.error("Your cart is empty");
  //     }
  //     const orderData = {
  //       foodItem: cart.map((item) => item._id),
  //       food_name: cart.map((item) => item.name),
  //       buyer: auth?.user?._id,
  //       address: {
  //         name: formData.name,
  //         ngo: formData.ngo,
  //         contact: formData.contact,
  //         location: formData.location,
  //         mapLink: formData.mapLink,
  //       },
  //       sellerRole: auth?.user?.role,
  //     };
  //     if (auth?.user?.role === "restaurant") {
  //       orderData.seller_restaurant = auth?.user?.resName;
  //     } else if (auth?.user?.role === "hostel") {
  //       orderData.seller_hostel = auth?.user?.hosName;
  //     }
  //     await getConfig();
  //     const { data } = await axiosInstance.post(
  //       "/api/v1/order/create-order",
  //       orderData
  //     );
  //     if (data.success) {
  //       setCart([]);
  //       localStorage.removeItem("cart");
  //       setFormData({
  //         name: "",
  //         ngo: "",
  //         contact: "",
  //         location: "",
  //         landmark: "",
  //         mapLink: "",
  //       });
  //       toast.success(data.message || "Order placed!!");
  //       navigate("/dashboard/ngo")

  //     } else {
  //       toast.error(data.message || "Failed to create order");
  //     }
  //   } catch (error) {
  //     console.error("Error placing order:", error);
  //     toast.error("Something went wrong");
  //   }
  // };
  const handlePlaceOrder = async () => {
    try {
      if (
        !formData.name ||
        !formData.ngo ||
        !formData.contact ||
        !formData.location
      ) {
        return toast.error("Please fill all required fields");
      }
      if (cart.length === 0) {
        return toast.error("Your cart is empty");
      }
  
      const sellerRole = auth?.user?.role; // Assuming user role is stored in auth
  
      if (!sellerRole) {
        return toast.error("Seller role is missing");
      }
  
      const orderData = {
        foodItem: cart.map((item) => item._id),
        food_name: cart.map((item) => item.name),
        buyer: auth?.user?._id,
        sellerRole,
        address: {
          name: formData.name,
          ngo: formData.ngo,
          contact: formData.contact,
          location: formData.location,
          mapLink: formData.mapLink,
        },
      };
  
      // Include seller-specific details based on role
      if (sellerRole === "restaurant") {
        orderData.seller_restaurant = auth?.user?.restaurantName || "Unknown";
      } else if (sellerRole === "hostel") {
        orderData.seller_hostel = auth?.user?.hostelName || "Unknown";
      }
  
      await getConfig();
      const { data } = await axiosInstance.post(
        "/api/v1/order/create-order",
        orderData
      );
  
      if (data.success) {
        setCart([]);
        localStorage.removeItem("cart");
        setFormData({
          name: "",
          ngo: "",
          contact: "",
          location: "",
          landmark: "",
          mapLink: "",
        });
        toast.success(data.message || "Order placed!!");
        navigate("/dashboard/ngo");
      } else {
        toast.error(data.message || "Failed to create order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Something went wrong");
    }
  };
  
  return (
    <>
      <div className="cart-page">
        <div className="cart-items">
          <h2>{`${auth?.user?.orgName} - You have ${cart.length} items in your cart`}</h2>
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <div key={item._id} className="cart-item-card">
                <span
                  className="cross-delete"
                  onClick={() => handleRemoveItem(item._id)}
                >
                  X
                </span>
                <div className="cart-item-left">
                  <img
                    src={`${backend_url}/image/${item.images}`}
                    alt={item.name}
                  />
                </div>
                <div className="cart-item-right">
                  <h3>{item.name}</h3>
                  <p>
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p>
                    <strong>From:</strong>{" "}
                    {item.hosName
                      ? item.hosName
                      : item.restaurant
                      ? item.restaurant
                      : "Not Specified"}
                  </p>
                  <p>
                    <strong>Location:</strong> {item.location}
                  </p>
                  <p>
                    <strong>Landmark:</strong> {item.landmark}
                  </p>
                  <p>
                    <strong>Contact:</strong> {item.contact}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart-div">
              <img
                src={emptyImg}
                width={300}
                className="empty-cart-img"
                alt="Your cart is empty!!"
              />
            </div>
          )}
        </div>

        <div className="delivery-form">
          <h2>Delivery Location</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ngo">From NGO Name</label>
              <input
                type="text"
                id="ngo"
                name="ngo"
                value={formData.ngo}
                onChange={handleChange}
                placeholder="Enter NGO name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                name="contact"
                type="text"
                id="contact"
                placeholder="Enter contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                required
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="landmark">Landmark</label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                placeholder="Enter landmark"
              />
            </div>
            <div className="form-group">
              <label htmlFor="map">Google Map Selection</label>
              <input
                type="text"
                id="map"
                name="mapLink"
                value={formData.mapLink}
                onChange={handleChange}
                placeholder="Google Map link"
              />
              <button
                type="button"
                className="map-button"
                onClick={() => openMapSelection()}
              >
                Select Location on Map
              </button>
            </div>
          </form>
        </div>
        <div className="place-order">
          <button type="submit" onClick={handlePlaceOrder} className="order-button">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;

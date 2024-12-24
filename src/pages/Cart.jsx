import React from "react";
import "../styles/cart.css";
import { useAuth } from "../context/Auth";
import { useCart } from "../context/cart";
import { axiosInstance, getConfig } from "../utils/request";
import { toast } from "react-hot-toast";
import emptyImg from "../image/empty-cart.webp";
const Cart = ({ backend_url }) => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
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
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="ngo">From NGO Name</label>
              <input type="text" id="ngo" placeholder="Enter NGO name" />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                placeholder="Enter contact number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" placeholder="Enter location" />
            </div>
            <div className="form-group">
              <label htmlFor="landmark">Landmark</label>
              <input type="text" id="landmark" placeholder="Enter landmark" />
            </div>
            <div className="form-group">
              <label htmlFor="map">Google Map Selection</label>
              <input type="text" id="map" placeholder="Google Map link" />
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
          <button type="submit" className="order-button">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;

import React, { useState } from 'react'
import '../styles/cart.css'
import {useAuth} from '../context/Auth'
const Cart = () => {
    const [auth] = useAuth()
    const [cartItems] = useState([
        {
          id: 1,
          name: "Pizza",
          category: "Food",
          restaurant: "Domino's",
          location: "Main Street",
          landmark: "Near Park",
          contact: "1234567890",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Burger",
          category: "Fast Food",
          restaurant: "McDonald's",
          location: "City Center",
          landmark: "Opposite Mall",
          contact: "9876543210",
          image: "https://via.placeholder.com/150",
        },
      ]);
  return (
   <>
 
    <div className="cart-page">
    
    <div className="cart-items">
      <h2>{`${auth?.user?.orgName} - Cart Items`}</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item-card">
          <div className="cart-item-left">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="cart-item-right">
            <h3>{item.name}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>From:</strong> {item.restaurant}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Landmark:</strong> {item.landmark}</p>
            <p><strong>Contact:</strong> {item.contact}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Delivery Location Form */}
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
          <input type="text" id="contact" placeholder="Enter contact number" />
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
          <button type="button" className="map-button" onClick={() => openMapSelection()}>
            Select Location on Map
          </button>
        </div>
       
      </form>
    </div>

    {/* Place Order Button */}
    <div className="place-order">
      <button type='submit' className="order-button">Place Order</button>
    </div>
  </div>
   </>

  )
}


const openMapSelection = () => {
    const googleMapsURL = "https://www.google.com/maps";
    window.open(googleMapsURL, "_blank", "width=800,height=600");
  };
export default Cart
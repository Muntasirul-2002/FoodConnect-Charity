import { useContext, createContext, useEffect, useState } from "react";
import { axiosInstance, getConfig } from "../utils/request";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if it exists
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const fetchCartProducts = async (userID) => {
    try {
      await getConfig();
      const response = await axiosInstance.post("/api/v1/food/cart/get-food", {
        userID,
      });
      setCart(response.data.cart);
      localStorage.setItem("cart", JSON.stringify(response.data.cart));
    } catch (error) {
      console.log("Error in fetching cart products:", error);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const userData = JSON.parse(data);
      const userID = userData?.user?._id;

      if (userID && cart.length === 0) {
        fetchCartProducts(userID);
      }
    }
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };

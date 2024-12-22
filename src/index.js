import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/Auth";
import { CartProvider } from "./context/cart";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Toaster />
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();

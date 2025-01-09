import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Causes from "./pages/Causes";
import Navbar from "./components/Navbar";
import Signup from "./pages/auth/Signup";
import Footer from "./components/Footer";
import Foods from "./pages/Foods";
import Login from "./pages/auth/Login";
import PrivateRoute from "./Routes/HostelRoute";
import HostelHomePage from "./HostelDashboard/pages/HostelHomePage";
import NgoPrivateRoute from "./Routes/NgoRoute";
import NgoDashboard from "./NgoDashboard/pages/NgoDashboard";
import FoodDetails from "./pages/FoodDetails";
import ForgotPassword from "./pages/auth/ForgotPassword";
import RestaurantPrivateRoute from "./Routes/RestaurantRoute";
import RestaurantHomePage from "./RestaurantDashboard/pages/RestaurantHomePage";
import Cart from "./pages/Cart";
import Form from "./NgoDashboard/components/Form";
import AdminLogin from "./pages/auth/AdminLogin";
const App = () => {
  const location = useLocation()
  const isDashboard = location.pathname.includes("/dashboard")
  const backend_url = "http://localhost:8080"
  return (
    <div>
     {!isDashboard &&  <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-auth" element={<AdminLogin/>} />
        <Route path="/reset-password" element={<ForgotPassword/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/food-details/:slug" element={<FoodDetails/>} />
        <Route path="/cart" element={<Cart backend_url={backend_url} />} />
        

        {/* //Hostel Dashboard Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="hostel" element={<HostelHomePage />} />
        </Route>

        {/* Restaurant Dashboard Routes */}
        <Route path="/dashboard" element={<RestaurantPrivateRoute/>}>
        <Route path="restaurant" element={<RestaurantHomePage/>}/>
        </Route>


        {/* Ngo Dashboard routes */}
        <Route path="/dashboard" element={<NgoPrivateRoute />}>
          <Route path="ngo" element={<NgoDashboard />} />
          <Route  path="update-order/:id" element={<Form/>}/>
        </Route>
      </Routes>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default App;

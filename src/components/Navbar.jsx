import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import "../styles/navbar.css";
import { useAuth } from "../context/Auth";
import { toast } from "react-hot-toast";
import { Badge } from "antd";
import { useCart } from "../context/cart";
import { BsCartCheck } from "react-icons/bs";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart()
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    localStorage.removeItem("cart");
    localStorage.clear();
    setCart([])
    toast.success("Logged out");
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(".avatar-dropdown-menu");
      if (dropdown && !dropdown.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

 

  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke">
          <h1>
            <Link className="navbar-brand mr-lg-5" to="/">
              <img
                src="assets/images/logo.png"
                alt="Your logo"
                title="Your logo"
              />
              Food Connect
            </Link>
          </h1>
          <button
            className="navbar-toggler collapsed bg-gradient"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars" />
            <span className="navbar-toggler-icon fa icon-close fa-times" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav w-100">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/causes" className="nav-link">
                  Causes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/foods" className="nav-link">
                  Foods
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="ml-lg-auto mr-lg-0 m-auto">
                {/* Search functionality */}
                <div className="search-right">
                  <a href="#search" title="search">
                    <span className="fa fa-search" aria-hidden="true" />
                  </a>
                  {/* Search popup */}
                  <div id="search" className="pop-overlay">
                    <div className="popup">
                      <h4 className="mb-3">Search here</h4>
                      <form
                        action="error.html"
                        method="GET"
                        className="search-box"
                      >
                        <input
                          type="search"
                          placeholder="Enter Keyword"
                          name="search"
                          required="required"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="btn btn-style btn-primary"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                    <a className="close" href="#close">
                      ×
                    </a>
                  </div>
                 
                </div>
               
              </li>
             <div className="count-cart">
             <NavLink to="/cart">
             <Badge count={cart?.length} >
              <BsCartCheck className="cart-badge" />
              </Badge>
             </NavLink>
             </div>
              {auth.user ? (
                <>
                  <li className="nav-item avatar-dropdown">
                    <div className="user-avatar" onClick={toggleDropdown}>
                      <img
                        src="https://avatar.iran.liara.run/public/boy"
                        height={38}
                        width={38}
                        alt=""
                      />
                    
                      Welcome, {auth?.user?.name.substring(4,0)}...
                     
                     
                    </div>
                    {isDropdownOpen && (
                      <div className="avatar-dropdown-menu">
                        <p className="auth-email">{auth?.user?.email}</p>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === "hostel"
                              ? "hostel"
                              : auth?.user?.role === "ngo"
                              ? "ngo"
                              : auth?.user?.role === "restaurant"
                              ? "restaurant"
                              : ""
                          }`}
                          className="avatar-dropdown-item"
                        >
                          Dashboard
                        </NavLink>

                        <Link to={`/dashboard/${auth?.user?.role}`} className="avatar-dropdown-item">
                          Profile
                        </Link>
                        <NavLink
                          className="avatar-dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </NavLink>
                      </div>
                    )}
                  </li>
                </>
              ) : (
                <>
                  <div className="mobile-position">
                    <nav className="navigation">
                      <div className="theme-switch-wrapper">
                        <input type="checkbox" id="checkbox" />
                        <Link to="/login" className="mode-container">
                          <IoMdLogIn size={25} />
                        </Link>
                      </div>
                    </nav>
                  </div>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
const Navbar = () => {
  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke">
            <h1>
              <a className="navbar-brand mr-lg-5" href="index.html">
                <img
                  src="assets/images/logo.png"
                  alt="Your logo"
                  title="Your logo"
                />
                Food Connect
              </a>
            </h1>
            <button
              className="navbar-toggler  collapsed bg-gradient"
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
                  <Link to={"/"} className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item @@about__active">
                  <Link to={"/about"} className="nav-link" >
                    About
                  </Link>
                </li>
                <li className="nav-item @@causes__active">
                  <Link to={"/causes"} className="nav-link" >
                    Causes
                  </Link>
                </li>
                <li className="nav-item @@Foods__active">
                  <Link to={'/foods'} className="nav-link">
                  Foods
                  </Link>
                </li>
                <li className="nav-item @@contact__active">
                  <Link
                    to={"/contact"}
                    className="nav-link"
                    href="contact.html"
                  >
                    Contact
                  </Link>
                </li>
                <li className="ml-lg-auto mr-lg-0 m-auto">
                  {/*/search-right*/}
                  <div className="search-right">
                    <a href="#search" title="search">
                      <span className="fa fa-search" aria-hidden="true" />
                    </a>
                    {/* search popup */}
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
                            autofocus
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
                    {/* /search popup */}
                  </div>
                  {/*//search-right*/}
                </li>
                <li className="align-self">
                  <a
                    href="#donate"
                    className="btn btn-style btn-primary ml-lg-3 mr-lg-2"
                  >
                    <span className="fa fa-heart mr-1" /> Donate
                  </a>
                </li>
              </ul>
            </div>
            {/* toggle switch for light and dark theme */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                 
                    <input type="checkbox" id="checkbox" />
                    <Link to={'/admin-login'} className="mode-container">
                   <IoMdLogIn size={25}/>
                    </Link>
                
                </div>
              </nav>
            </div>
            
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

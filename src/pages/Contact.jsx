import React from "react";
import {Link} from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      <div>
        <div className="inner-banner">
          <section className="w3l-breadcrumb py-5">
            <div className="container py-lg-5 py-md-3">
              <h2 className="title">Contact Us</h2>
            </div>
          </section>
        </div>
        {/* banner bottom shape */}
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
        {/* banner bottom shape */}
        {/* contacts */}
        <section className="w3l-contact-7 py-5" id="contact">
          <div className="contacts-9 py-lg-5 py-md-4">
            <div className="container">
              <div className="top-map">
                <div className="row map-content-9">
                  <div className="col-lg-8">
                    <h3 className="title-big">Send us a Message</h3>
                    <p className="mb-4 mt-lg-0 mt-2">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form
                      action="https://sendmail.w3layouts.com/submitForm"
                      method="post"
                      className="text-right"
                    >
                      <div className="form-grid">
                        <input
                          type="text"
                          name="w3lName"
                          id="w3lName"
                          placeholder="Name*"
                          required
                        />
                        <input
                          type="email"
                          name="w3lSender"
                          id="w3lSender"
                          placeholder="Email*"
                          required
                        />
                        <input
                          type="text"
                          name="w3lPhone"
                          id="w3lPhone"
                          placeholder="Phone number*"
                          required
                        />
                        <input
                          type="text"
                          name="w3lSubject"
                          id="w3lSubject"
                          placeholder="Subject"
                        />
                      </div>
                      <textarea
                        name="w3lMessage"
                        id="w3lMessage"
                        placeholder="Message"
                        defaultValue={""}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary btn-style mt-3"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                  <div className="col-lg-4 cont-details">
                    <address>
                      <h5 className>Contact Address</h5>
                      <p>
                        <span className="fa fa-map-marker" />
                        KG Reddy College Of Engineering & Technology, HYD, IN.
                      </p>
                      <p>
                        {" "}
                        <a href="mailto:foodconnect.kgr@gmail.com">
                          <span className="fa fa-envelope" />
                          foodconnect.kgr@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="fa fa-phone" />
                        <a href="tel:+44-000-888-999"> +91 6394368784</a>
                      </p>
                      <Link
                        to={'/foods'}
                        className="btn btn-style btn-outline-primary mt-4"
                      >
                        <span className="fa fa-heart mr-1" /> Make Donation
                      </Link>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //contacts */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5719963559077!2d78.28672867462588!3d17.3355114042986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbeab272796741%3A0x73864d0007766678!2sKG%20Reddy%20College%20of%20Engineering%20and%20Technology!5e1!3m2!1sen!2sin!4v1726912913914!5m2!1sen!2sin"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

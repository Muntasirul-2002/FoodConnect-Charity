import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="w3l-footer-main">
          <div className="w3l-sub-footer-content">
            <section className="_form-3">
              <div className="form-main">
                <div className="container">
                  <div className="middle-section grid-column top-bottom">
                    <div className="image grid-three-column">
                      <img
                        src="assets/images/subscribe.png"
                        alt
                        className="img-fluid radius-image-full"
                      />
                    </div>
                    <div className="text-grid grid-three-column">
                      <h2>
                        Subscribe our Newsletter to receive latest updates from
                        us
                      </h2>
                      <p>We won’t give you spam mails.</p>
                    </div>
                    <div className="form-text grid-three-column">
                      <form action="/" method="GET">
                        <input
                          type="email"
                          name=" placeholder"
                          placeholder="Enter Your Email"
                          required
                        />
                        <button
                          type="submit"
                          className="btn btn-style btn-primary"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Footers-14 */}
            <footer className="footer-14">
              <div id="footers14-block">
                <div className="container">
                  <div className="footers20-content">
                    <div className="d-grid grid-col-4 grids-content">
                      <div className="column">
                        <h4>Our Address</h4>
                        <p>
                          KG Reddy College Of Engineering & Technology, HYD, IN
                        </p>
                      </div>
                      <div className="column">
                        <h4>Call Us</h4>
                        <p>Mon - Fri 10:30 -18:00</p>
                        <p>
                          <a href="tel:+916294268784">+91 6294268784</a>
                        </p>
                      </div>
                      <div className="column">
                        <h4>Mail Us</h4>
                        <p>
                          <a href="mailto:foodconnect.kgr@gmail.com">foodconnect.kgr@gmail.com</a>
                        </p>
                        
                      </div>
                      <div className="column">
                        <h4>Follow Us On</h4>
                        <ul className=''>
                          <li>
                            <a href="#facebook" className='social-links-footer'>
                              <span
                                className="fa fa-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#linkedin" className='social-links-footer'>
                              <span
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#twitter" className='social-links-footer'>
                              <span
                                className="fa fa-twitter"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#google" className='social-links-footer'>
                              <span
                                className="fa fa-google-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#github" className='social-links-footer'>
                              <span
                                className="fa fa-github"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footers14-bottom d-flex">
                    <div className="copyright">
                      <p>
                        © 2024 Food Connect. All rights reserved. Design by{" "}
                        <a href="https://muntasirul.vercel.app/" className='muntasirul' target="_blank">
                          Muntasirul Islam
                        </a>
                      </p>
                    </div>
                    <div className="language-select d-flex">
                      <span className="fa fa-language" aria-hidden="true" />
                      <select>
                        <option>English</option>
                        <option>Bengali</option>
                        <option>Hindi</option>
                        <option>Urdu</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* move top */}
              <button onclick="topFunction()" id="movetop" title="Go to top">
                ↑
              </button>
              {/* /move top */}
            </footer>
          </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'

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
      <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
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
              <p className="mb-4 mt-lg-0 mt-2">Your email address will not be published. Required fields are marked *</p>
              <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="text-right">
                <div className="form-grid">
                  <input type="text" name="w3lName" id="w3lName" placeholder="Name*" required />
                  <input type="email" name="w3lSender" id="w3lSender" placeholder="Email*" required />
                  <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Phone number*" required />
                  <input type="text" name="w3lSubject" id="w3lSubject" placeholder="Subject" />
                </div>
                <textarea name="w3lMessage" id="w3lMessage" placeholder="Message" defaultValue={""} />
                <button type="submit" className="btn btn-primary btn-style mt-3">Send Message</button>
              </form>
            </div>
            <div className="col-lg-4 cont-details">
              <address>
                <h5 className>Contact Address</h5>
                <p><span className="fa fa-map-marker" />235 Terry, 10001 20C Trolley Square, DE 19806 U.S.A. </p>
                <p> <a href="mailto:info@example.com"><span className="fa fa-envelope" />info@example.com</a></p>
                <p><span className="fa fa-phone" /><a href="tel:+44-000-888-999"> +44-000-888-999</a></p>
                <a href="donate.html" className="btn btn-style btn-outline-primary mt-4">
                  <span className="fa fa-heart mr-1" /> Make Donation</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //contacts */}
  <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin" frameBorder={0} style={{border: 0}} allowFullScreen />
  </div>
  {/* footer 14 */}
  <div className="w3l-footer-main">
    <div className="w3l-sub-footer-content">
      <section className="_form-3">
        <div className="form-main">
          <div className="container">
            <div className="middle-section grid-column top-bottom">
              <div className="image grid-three-column">
                <img src="assets/images/subscribe.png" alt className="img-fluid radius-image-full" />
              </div>
              <div className="text-grid grid-three-column">
                <h2>Subscribe our Newsletter to receive latest updates from us</h2>
                <p>We won’t give you spam mails.</p>
              </div>
              <div className="form-text grid-three-column">
                <form action="/" method="GET">
                  <input type="email" name=" placeholder" placeholder="Enter Your Email" required />
                  <button type="submit" className="btn btn-style btn-primary">Submit</button>
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
                  <p>235 Terry, 10001 20C Trolley Square,
                    DE 19806  U.S.A.</p>
                </div>
                <div className="column">
                  <h4>Call Us</h4>
                  <p>Mon - Fri 10:30 -18:00</p>
                  <p><a href="tel:+44-000-888-999">+44-000-888-999</a></p>
                </div>
                <div className="column">
                  <h4>Mail Us</h4>
                  <p><a href="mailto:info@example.com">info@example.com</a></p>
                  <p><a href="mailto:no.reply@example.com">no.reply@example.com</a></p>
                </div>
                <div className="column">
                  <h4>Follow Us On</h4>
                  <ul>
                    <li><a href="#facebook"><span className="fa fa-facebook" aria-hidden="true" /></a>
                    </li>
                    <li><a href="#linkedin"><span className="fa fa-linkedin" aria-hidden="true" /></a>
                    </li>
                    <li><a href="#twitter"><span className="fa fa-twitter" aria-hidden="true" /></a>
                    </li>
                    <li><a href="#google"><span className="fa fa-google-plus" aria-hidden="true" /></a>
                    </li>
                    <li><a href="#github"><span className="fa fa-github" aria-hidden="true" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footers14-bottom d-flex">
              <div className="copyright">
                <p>© 2020 Save Poor. All rights reserved. Design by <a href="https://w3layouts.com/" target="_blank">W3Layouts</a></p>
              </div>
              <div className="language-select d-flex">
                <span className="fa fa-language" aria-hidden="true" />
                <select>
                  <option>English</option>
                  <option>Estonina</option>
                  <option>Deutsch</option>
                  <option>Nederlan;ds</option>
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
      {/* Footers-14 */}
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact
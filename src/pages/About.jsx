import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <div className="inner-banner">
          <section className="w3l-breadcrumb py-5">
            <div className="container py-lg-5 py-md-3">
              <h2 className="title">About Us</h2>
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
        <section className="w3l-aboutblock1 py-5" id="about">
          <div className="container py-lg-5 py-md-3">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="title-small">A little about Us</h5>
                <h3 className="title-big">Welcome to Save Poor charity</h3>
                <p className="mt-3">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor
                  sit amet viverra ornare elit. Non quae, ut diam libero erat.
                </p>
                <p className="mt-3">
                  Duis cursus, mi quis viverra ornare, eros dolor interdum
                  nulla, ut sed diam libero erat. Aenean faucibus nibh et justo
                  cursus.
                </p>
                <h3 className="title mt-4">
                  "Over 20 Years of Accomplishments”
                </h3>
                <a
                  href="#MoreAboutUs"
                  className="btn btn-primary btn-style mt-lg-5 mt-4"
                >
                  Learn More about Us
                </a>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5">
                <img
                  src="assets/images/about.jpg"
                  alt
                  className="radius-image img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        {/* forms */}
        <section className="w3l-forms-9 py-5" id>
          <div className="main-w3 py-lg-5 py-md-3">
            <div className="container">
              <div className="row align-items-center">
                <div className="main-midd col-lg-9">
                  <h3 className="title-big">Facts about Save Poor charity</h3>
                  <p className="mt-3">
                    A lot of work goes down at the grass root level in villages
                    in the remotest corners as well as the most populous metros
                    across India, with schools and government bodies. We need
                    your contributions to keep coming in.
                  </p>
                </div>
                <div className="main-midd-2 col-lg-3 mt-lg-0 mt-4 text-lg-right">
                  <a className="btn btn-style btn-primary" href="#donate">
                    <span className="fa fa-heart mr-1" /> Donate Now{" "}
                  </a>
                </div>
              </div>
              <div className="donar-img mt-5">
                <div className="right-side text-center">
                  <span className="fa fa-heart" />
                  <p>OUR TOP DONAR</p>
                  <h3 className="big my-3">$1.6m</h3>
                  <a className="btn btn-text" href="#ViewMore">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //forms */}
        <section className="w3l-aboutblock3 py-5" id="videos">
          <div className="video-recipe py-lg-5 py-md-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 align-self">
                  <h3 className="title-big">
                    To help the poor to raise their head and face the future
                    with pride
                  </h3>
                  <p className="mt-4">
                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Non quae, fugiat
                    consequatur voluptatem nihil ad. Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className="col-lg-7 mt-lg-0 mt-md-5 mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <iframe
                        src="https://www.youtube.com/embed/MG3jGHnBVQs"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <h3 className="video-title mt-sm-4 mt-3">
                        The man of the poor.
                      </h3>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-5">
                      <iframe
                        src="https://www.youtube.com/embed/MG3jGHnBVQs"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <h3 className="video-title mt-sm-4 mt-3">
                        Mission of “garbage people”
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/team-sec*/}
        <section className="w3l-team-main" id="team">
          <div className="team py-5">
            <div className="container py-lg-5">
              <div className="title-content text-center">
                <h3 className="title-big">Happy Volunteers</h3>
              </div>
              <div className="team-row mt-md-5 mt-4">
                <div className="team-wrap">
                  <div className="team-member text-center">
                    <div className="team-img">
                      <img
                        src="assets/images/team1.jpg"
                        alt
                        className="radius-image img-fluid"
                      />
                    </div>
                    <a href="#url" className="team-title">
                      Luke jacobs
                    </a>
                    <p>Volunteers</p>
                  </div>
                </div>
                {/* end team member */}
                <div className="team-wrap">
                  <div className="team-member text-center">
                    <div className="team-img">
                      <img
                        src="assets/images/team2.jpg"
                        alt
                        className="radius-image img-fluid"
                      />
                    </div>
                    <a href="#url" className="team-title">
                      Claire olson
                    </a>
                    <p>Volunteers</p>
                  </div>
                </div>
                {/* end team member */}
                <div className="team-wrap">
                  <div className="team-member last text-center">
                    <div className="team-img">
                      <img
                        src="assets/images/team3.jpg"
                        alt
                        className="radius-image img-fluid"
                      />
                    </div>
                    <a href="#url" className="team-title">
                      Phillip hunt
                    </a>
                    <p>Volunteers</p>
                  </div>
                </div>
                {/* end team member */}
                <div className="team-wrap">
                  <div className="team-member last text-center">
                    <div className="team-img">
                      <img
                        src="assets/images/team4.jpg"
                        alt
                        className="radius-image img-fluid"
                      />
                    </div>
                    <a href="#url" className="team-title">
                      Sara grant
                    </a>
                    <p>Volunteers</p>
                  </div>
                </div>
                {/* end team member */}
                <div className="team-wrap">
                  <div className="team-member last text-center">
                    <div className="team-img">
                      <img
                        src="assets/images/team5.jpg"
                        alt
                        className="radius-image img-fluid"
                      />
                    </div>
                    <a href="#url" className="team-title">
                      Sara grant
                    </a>
                    <p>Volunteers</p>
                  </div>
                </div>
                {/* end team member */}
                <div className="team-wrap">
                  <div className="team-member last text-center">
                    <div className="team-img">
                      <img
                        src="assets/images/team6.jpg"
                        alt
                        className="radius-image img-fluid"
                      />
                    </div>
                    <a href="#url" className="team-title">
                      Sara grant
                    </a>
                    <p>Volunteers</p>
                  </div>
                </div>
                {/* end team member */}
                <div className="team-wrap">
                  <div className="team-member last text-center">
                    <div className="team-img">
                      <img
                        src="assets/images/team7.jpg"
                        alt
                        className="radius-image img-fluid"
                      />
                    </div>
                    <a href="#url" className="team-title">
                      Sara grant
                    </a>
                    <p>Volunteers</p>
                  </div>
                </div>
                {/* end team member */}
                <div className="team-wrap">
                  <div className="team-member last text-center">
                    <div className="team-img">
                      <img
                        src="assets/images/team8.jpg"
                        alt
                        className="radius-image img-fluid"
                      />
                    </div>
                    <a href="#url" className="team-title">
                      Sara grant
                    </a>
                    <p>Volunteers</p>
                  </div>
                </div>
                {/* end team member */}
                <div className="team-wrap">
                  <div className="team-member last text-center">
                    <div className="team-img">
                      <img
                        src="assets/images/team9.jpg"
                        alt
                        className="radius-image img-fluid"
                      />
                    </div>
                    <a href="#url" className="team-title">
                      Sara grant
                    </a>
                    <p>Volunteers</p>
                  </div>
                </div>
                {/* end team member */}
                <div className="team-apply">
                  <a href="#url" className="team-title m-0">
                    <span className="fa fa-plus-circle d-block mb-3" /> Apply
                    for Volunteer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//team-sec*/}
        {/* testimonials */}
        <section className="w3l-testimonials" id="testimonials">
          {/* /grids */}
          <div className="customer-layout py-5">
            <div className="container py-lg-5 py-md-4">
              <div className="heading align-self text-center">
                <h6 className="title-small">Our Testimonials</h6>
                <h3 className="title-big mb-md-5 mb-4">
                  Over 20 Years of Accomplishments
                </h3>
              </div>
              {/* /grids */}
              <div className="row testimonial-row">
                <div
                  id="owl-demo1"
                  className="owl-two owl-carousel owl-theme mb-lg-3 mb-5"
                >
                  <div className="item">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>
                            Lorem ipsum dolor sit amet int consectetur
                            adipisicing elit. Velita beatae laudantium voluptate
                            rem ullam dolore nisi voluptatibus est quasi,
                            doloribus tempora.
                          </q>
                        </blockquote>
                        <div className="testi-des">
                          <div className="test-img">
                            <img
                              src="assets/images/team1.jpg"
                              className="img-fluid"
                              alt="client-img"
                            />
                          </div>
                          <div className="peopl align-self">
                            <h3>Michael D. Kirby</h3>
                            <p className="indentity">Former U.S. Ambassador </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>
                            Lorem ipsum dolor sit amet int consectetur
                            adipisicing elit. Velita beatae laudantium voluptate
                            rem ullam dolore nisi voluptatibus est quasi,
                            doloribus tempora.
                          </q>
                        </blockquote>
                        <div className="testi-des">
                          <div className="test-img">
                            <img
                              src="assets/images/team2.jpg"
                              className="img-fluid"
                              alt="client-img"
                            />
                          </div>
                          <div className="peopl align-self">
                            <h3>Elaine F. Marshall</h3>
                            <p className="indentity">Secretary of State </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>
                            Lorem ipsum dolor sit amet int consectetur
                            adipisicing elit. Velita beatae laudantium voluptate
                            rem ullam dolore nisi voluptatibus est quasi,
                            doloribus tempora.
                          </q>
                        </blockquote>
                        <div className="testi-des">
                          <div className="test-img">
                            <img
                              src="assets/images/team3.jpg"
                              className="img-fluid"
                              alt="client-img"
                            />
                          </div>
                          <div className="peopl align-self">
                            <h3>Janice Hoffman</h3>
                            <p className="indentity">Chief Operating Officer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>
                            Lorem ipsum dolor sit amet int consectetur
                            adipisicing elit. Velita beatae laudantium voluptate
                            rem ullam dolore nisi voluptatibus est quasi,
                            doloribus tempora.
                          </q>
                        </blockquote>
                        <div className="testi-des">
                          <div className="test-img">
                            <img
                              src="assets/images/team4.jpg"
                              className="img-fluid"
                              alt="client-img"
                            />
                          </div>
                          <div className="peopl align-self">
                            <h3>Stefan Homa</h3>
                            <p className="indentity">Charity architect</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>
                            Lorem ipsum dolor sit amet int consectetur
                            adipisicing elit. Velita beatae laudantium voluptate
                            rem ullam dolore nisi voluptatibus est quasi,
                            doloribus tempora.
                          </q>
                        </blockquote>
                        <div className="testi-des">
                          <div className="test-img">
                            <img
                              src="assets/images/team2.jpg"
                              className="img-fluid"
                              alt="client-img"
                            />
                          </div>
                          <div className="peopl align-self">
                            <h3>Jeannie Gooch</h3>
                            <p className="indentity">Funding teacher</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-content">
                      <div className="testimonial">
                        <blockquote>
                          <q>
                            Lorem ipsum dolor sit amet int consectetur
                            adipisicing elit. Velita beatae laudantium voluptate
                            rem ullam dolore nisi voluptatibus est quasi,
                            doloribus tempora.
                          </q>
                        </blockquote>
                        <div className="testi-des">
                          <div className="test-img">
                            <img
                              src="assets/images/team3.jpg"
                              className="img-fluid"
                              alt="client-img"
                            />
                          </div>
                          <div className="peopl align-self">
                            <h3>Elaine F. Marshall</h3>
                            <p className="indentity">Secretary of State</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /grids */}
          </div>
          {/* //grids */}
        </section>
        {/* //testimonials */}
        {/* footer 14 */}
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
                          235 Terry, 10001 20C Trolley Square, DE 19806 U.S.A.
                        </p>
                      </div>
                      <div className="column">
                        <h4>Call Us</h4>
                        <p>Mon - Fri 10:30 -18:00</p>
                        <p>
                          <a href="tel:+44-000-888-999">+44-000-888-999</a>
                        </p>
                      </div>
                      <div className="column">
                        <h4>Mail Us</h4>
                        <p>
                          <a href="mailto:info@example.com">info@example.com</a>
                        </p>
                        <p>
                          <a href="mailto:no.reply@example.com">
                            no.reply@example.com
                          </a>
                        </p>
                      </div>
                      <div className="column">
                        <h4>Follow Us On</h4>
                        <ul>
                          <li>
                            <a href="#facebook">
                              <span
                                className="fa fa-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#linkedin">
                              <span
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#twitter">
                              <span
                                className="fa fa-twitter"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#google">
                              <span
                                className="fa fa-google-plus"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#github">
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
                        © 2020 Save Poor. All rights reserved. Design by{" "}
                        <a href="https://w3layouts.com/" target="_blank">
                          W3Layouts
                        </a>
                      </p>
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
  );
};

export default About;

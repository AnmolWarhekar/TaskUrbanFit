import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./index.css";
const NavBar = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div>
      <nav style={{ position: "fixed", zIndex: 10, width: "100%" }}>
        <ul>
          <li>
            <a href="#">
              <div>
                <div>
                  <p>Home</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <div>
                  <p>Services</p>
                </div>
              </div>
            </a>
            <ul>
              <li>
                <a>Body</a>
              </li>
              <li>
                <a>Mind</a>
              </li>
              <li>
                <a>Self</a>
              </li>
              <li>
                <a>Productivity</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <div>
                <div>
                  <p>Videos</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <div>
                  <p>Events</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <div>
                  <p>FAQs</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <div>
                  <p>Testimonials</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <div>
                  <p>Blog</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <div>
                  <p>About</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <div>
                  <p>Contact</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <div>
          <ul></ul>
        </div>
      </nav>
      <div className="video-container">
        <video
          className="video"
          playsInline
          loop
          muted
          controls={false}
          alt="All the devices"
          src="https://video.wixstatic.com/video/11062b_616ea7fc12e64f158a528c7e04cb4fc9/720p/mp4/file.mp4"
          ref={videoEl}
        />
        <div className="video-caption">
          <div>
            <img src="https://res.cloudinary.com/dbcxwpqms/image/upload/v1676356019/ulogowhite_p2le2q.png" />
          </div>

          <h1 className="videoHeading">Be your Own Boss</h1>
          <h2>
            we have vast customer base already in pune with over 10,000 regular
            customer
          </h2>
          <button class="fancy-btn">Get Franchise</button>
        </div>
      </div>

      <div className="brand">
        <img src="https://res.cloudinary.com/dbcxwpqms/image/upload/v1676359106/brands_vjemb0.png" />
      </div>

      <div className="InfoCover">
        <div className="headingAlign">
          <h3>Why UrbanFit</h3>
          <span className="lead">
            Owning a franchise not only will give you the opportunity to take
            charge of your own successful business but also allows you to be a
            part of the movement in the business of health supplements. If you
            are accepted as a UrbanFit Franchise owner, you will be a partner of
            India’s fastest growing fitness tech brand and the most trustworthy
            name in the industry
          </span>
        </div>

        <div className="row m-t-80 colorwhite">
          <div className="col-lg-2">
            <div className="text-center">
              <div className="counter">
                <span
                  data-speed="3000"
                  data-refresh-interval="50"
                  data-to="15462 "
                  data-from="0"
                  data-seperator="true"
                >
                  15462
                </span>
              </div>
              <div className="seperator seperator-small"></div>
              <p className="numberSub">
                No of Client <br /> Per Month
              </p>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="text-center">
              <div className="counter">
                <span
                  data-speed="3000"
                  data-refresh-interval="33"
                  data-to="3"
                  data-from="0"
                  data-seperator="true"
                >
                  3
                </span>
              </div>
              <div className="seperator seperator-small"></div>
              <p className="numberSub">No of Stores</p>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="text-center">
              <div
                className="counter"
                style={{ fontSize: "35px", lineHeight: "40px" }}
              >
                10 Lacs
              </div>
              <div className="seperator seperator-small"></div>
              <p className="numberSub">
                Revenue Generated <br /> Per Store
              </p>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="text-center">
              <div
                className="counter"
                style={{ fontSize: "35px", lineHeight: "40px" }}
              >
                67
              </div>
              <div className="seperator seperator-small"></div>
              <p className="numberSub">
                Brands Officially <br /> Connected
              </p>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="text-center">
              <div
                className="counter"
                style={{ fontSize: "35px", lineHeight: "40px" }}
              >
                ∞
              </div>
              <div className="seperator seperator-small"></div>
              <p className="numberSub">Opportunities</p>
            </div>
          </div>
        </div>

        <div className="align-UrbanFit">
          <h4 className="urbanfitshop1">UrbanFit Location</h4>

          <div className="align-UrbanFit">
            <h5 className="urbanfitshop">UrbanFit Shop - F Residency</h5>
          </div>

          <div className="align-UrbanFit">
            <h5 className="urbanfitshop">UrbanFit Shop - Kharadi</h5>
          </div>

          <div className="align-UrbanFit">
            <h5 className="urbanfitshop">UrbanFit Shop - Bibewadi</h5>
          </div>
        </div>

        <div className="franchiesVisionContainer">
          <h4 className="headingUrbanFit">Urbanfit Franchies Vision</h4>

          <div className="col-6 col-lg-4 text-center visiondiv">
            <div className="goalcard" id="goalfirstchild">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86.135"
                height="105.276"
                viewBox="0 0 86.135 105.276"
                className="injected-svg"
                data-src="/images/icons/franchise-verified.svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <style>{`.a{fill:#99ff33;}`}</style>
                </defs>
                <path
                  className="a"
                  d="M46.067,1,3,20.141V48.853c0,26.558,18.375,51.394,43.067,57.423,24.692-6.029,43.067-30.865,43.067-57.423V20.141ZM36.5,77.564,17.356,58.423,24.1,51.676,36.5,64.022,68.032,32.487l6.747,6.8Z"
                  transform="translate(-3 -1)"
                ></path>
              </svg>
              <p className="goalp">
                We aim to bring the change in fitness industry by establishing
                network of state of the art health supplement storess
              </p>
            </div>
          </div>

          <div className="col-6 col-lg-4 text-center">
            <div className="goalcard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106.282"
                height="100"
                viewBox="0 0 106.282 86.031"
                className="injected-svg"
                data-src="/images/icons/franchise-zero.svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <style>{`.a{fill:#99ff33;}`}</style>
                </defs>
                <path
                  className="a"
                  d="M42.592-85.426c-24.2,0-37.631,15.367-37.631,42.955C4.961-14.762,18.392.6,42.592.6,66.55.6,79.981-14.762,79.981-42.471,79.981-70.059,66.55-85.426,42.592-85.426Zm0,15.73c10.648,0,15.367,7.865,15.367,27.225S53.24-15.125,42.592-15.125C31.7-15.125,27.1-23.111,27.1-42.471S31.7-69.7,42.592-69.7Zm48.715,50.04c-3.22,0-5.18,2.184-5.18,5.824,0,3.668,1.96,5.88,5.18,5.88s5.18-2.212,5.18-5.88C96.487-17.472,94.527-19.656,91"
                  transform="translate(-4.961 85.426)"
                ></path>
              </svg>
              <p className="goalp">
                There is no possibility of fake products with UrbanFit due to
                our vast tie network of premium supplement brands
              </p>
            </div>
          </div>

          <div className="row" id="goalthirdrowmobile">
            <div className="col-6 col-lg-4 text-center visiondiv">
              <div className="goalcard" id="goalthirdchild">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="99.484"
                  height="99.484"
                  viewBox="0 0 99.484 99.484"
                  className="injected-svg"
                  data-src="/images/icons/franchise-device-hub.svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <style>{`.a {fill:#99ff33;}`}</style>
                  </defs>
                  <path
                    className="a"
                    d="M80.376,74.849,58.269,52.742V35.166a16.581,16.581,0,1,0-11.054,0V52.742L25.108,74.849H3v27.634H30.634V85.627L52.742,62.414,74.849,85.627v16.857h27.634V74.849Z"
                    transform="translate(-3 -3)"
                  ></path>
                </svg>
                <p className="goalp">
                  Our priority will always be our customer. We aim to build
                  trust, happiness and loyalty for our customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer id="footer" class="inverted">
          <div class="footer-content">
            <div class="container">
              <div class="row1">
                <div class="col-lg-5">
                  <div class="widget">
                    <div class="widget-title">
                      <div id="logo" style={{ textAlign: "center" }}>
                        <a href="index.php">
                          <img
                            class="logo-dark"
                            src="https://res.cloudinary.com/dbcxwpqms/image/upload/v1676356019/ulogowhite_p2le2q.png"
                            style={{ display: "block" }}
                            height="45px"
                          />
                        </a>
                      </div>
                    </div>
                    <p class="mb-5">
                      Cerebrum IT Park, OFFICE NO. 1 E,
                      <br /> WING NO. B3, SECOND FLOOR,
                      <br /> Kalyani Nagar,Pune,
                      <br /> Maharashtra-411014, India
                    </p>
                    <p class="mb-5">
                      Ph: 8390836100,9921212116
                      <br />
                      Email: info@urbanfitwellness.com
                    </p>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="widget">
                        <div class="widget-title">Company</div>
                        <ul class="list">
                          <li>About Us</li>
                          <li>Blog</li>
                          <li>Contact Us</li>
                          <li>Policy</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="widget">
                        <div class="widget-title">Products</div>
                        <ul class="list">
                          <li>Whey Protein Isolate</li>
                          <li>Fat Burner</li>
                          <li>Pre Workout</li>
                          <li>Weight Gainer</li>
                          <li>Immunity Boosters</li>
                          <li>Micro Nutrirnts</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="widget">
                        <div class="widget-title">Top Brands</div>
                        <ul class="list">
                          <li>Optimum Nutrition</li>
                          <li>Muscletech</li>
                          <li>MuscleBlaze</li>
                          <li>GNC</li>
                          <li>Scitron</li>
                          <li>Labrada</li>
                          <li>Ronnie Coleman Series</li>
                          <li>Big Flex</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="widget">
                        <div class="widget-title">Trending</div>
                        <ul class="list">
                          <li>MyFitness Peanut Butter</li>
                          <li>Phab Protein Bomb</li>
                          <li>Osaa Whey Isolate</li>
                          <li>NRoute Isolate</li>
                          <li>Protein Bars</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-content">
            <div className="container">
              <div className="row1">
                <div className="col-lg-8">
                  <div>
                    <p className="copyright-text">
                      @2022 Urbanfit Wellness Private Limited
                    </p>
                    <div className="social-icons  social-icons-medium social-icons-border social-icons-colored-hover">
                      <p className="copyright-text">
                        Follow us on social media:
                      </p>
                      <ul>
                        <li className="social-linkedin">
                          <a href="https://www.linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                          </a>
                        </li>
                        <li className="social-facebook">
                          <a href="https://www.facebook.com">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                          </a>
                        </li>
                        <li className="social-instagram">
                          <a href="https://www.instagram.com">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                          </a>
                        </li>
                        <li className="social-twitter">
                          <a href="https://www.twitter.com">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 privacy">
                  <div className="copyright-text"></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NavBar;

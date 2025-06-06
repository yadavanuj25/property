import React from "react";
// import "./Footer.css";
import { IoIosArrowRoundUp } from "react-icons/io";
import { PiCopyright } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section id="footer-sec">
        <div className="number-data-section">
          <div className="number-data col-6 text-start">
            <h2>Let's Make Your Real Estate Goals Happen .</h2>
            {/* <p>We can help you realize your dream of a new home</p> */}
          </div>

          <div className="number-data">
            <div className="number-data-arrow">
              <FaArrowRightLong />
            </div>
          </div>
          <div className="number-data ">
            <a href="#" className="explore-btn px-4">
              Get a consultation
            </a>
            {/* <img src="/public/images/a1.png" alt="" height="50" width="400" /> */}
          </div>
        </div>
        <div className="footer-section d-flex">
          <div class="container">
            <footer>
              <div class="row d-flex justify-content-between">
                <div className="col-6 d-flex justify-content-between">
                  <div class="col-2">
                    <h5 className="fw-bold fs-6 mb-4">INFO</h5>
                    <ul class="nav flex-column">
                      <li class=" nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          About us
                        </a>
                      </li>
                      <li class=" nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Career
                        </a>
                      </li>
                      <li class=" nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-2">
                    <h5 className="fw-bold fs-6 mb-4">PROPERTY</h5>
                    <ul class="nav flex-column">
                      <li class="nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Commercial office
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Land
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Appartments
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Flat
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Bunglows
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Villas
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Penthouse
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-2">
                    <h5 className="fw-bold fs-6 mb-4">COMPANY</h5>
                    <ul class="nav flex-column">
                      <li class="nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Terms & Conditions
                        </a>
                      </li>
                      <li class="nav-item mb-2">
                        <a href="#" class="footer-link nav-link p-0 text-muted">
                          Privacy policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-4 text-right">
                  <img src="/images/logo.jpg" alt="error" className="pb-3" />
                  <hr className="my-3 border-1 w-100 " />
                  <div id="footer-contact-detail">
                    <h5 className="text-muted">+91-7600033211</h5>
                    <p className="text-muted mb-0">Haresh@whiteoceanprop.com</p>
                    <p className="text-muted mb-0">504, Shivalik Satyamev,</p>
                    <p className="text-muted mb-0">Near Vakil Saheb Bridge,</p>
                    <p className="text-muted ">South Bopal, Ahmedabad,</p>
                    <p className="text-muted">380058</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center py-3 mt-4  px-5 border-top copy-right-sec">
          <div className="copy-right">
            <p className="mb-0">
              {<PiCopyright />} 2024-25 Copyright White Ocean Properties. All
              Rights Reserved.
            </p>
            <p className="mb-0">Designed & Developed By Ecode Dash</p>
          </div>

          <a class="footer-arrow " href="#">
            <IoIosArrowRoundUp />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;

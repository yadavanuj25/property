import React from "react";
import PropertyListing from "../components/PropertyListing";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section className="pages-section">
        <div className="row">
          <div className="container text-light d-flex justify-content-between align-items-start about-section-content">
            <h2 className="col-6  fw-bolder">
              Get your <img src="/images/star.png" alt="img err" />
              <br />
              Sapno Ka Ghar
            </h2>
            <div className="col-6">
              <p>
                Mesmerizing memories can be lived in your own home and the home
                of your dream is the White Oceans Property responsibility
              </p>
              <a href="#" className="explore-btn  px-5">
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

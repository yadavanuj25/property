import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
// import "./Team.css";

const Team = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Our team
        </h6>
        <div className="dealer">
          <div className="dealer1  col-12 px-0">
            <h2 className="col-6 px-0">
              Meet the Experts Behind Your Next Move
            </h2>
            <a href="#" className="explore-btn  px-5">
              Book a call
            </a>
          </div>
        </div>

        <div className="container" id="team-member">
          <Slider {...settings}>
            <div className="card slick-card" style="width: 18rem;">
              <img
                src="/images/haresh.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="team-detail rounded-4 text-light py-2">
                <h4 className="fs-4 fw-bold mb-0">Haresh Vaja</h4>
                <p className="py-0 mb-0">Founder & CEO</p>
              </div>
            </div>
            <div className="card slick-card" style="width: 18rem;">
              <img
                src="/images/akshat.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="team-detail rounded-4 text-light py-2">
                <h4 className="fs-4 fw-bold mb-0">Akshat</h4>
                <p className="py-0 mb-0">Sr. Sales Executive</p>
              </div>
            </div>
            <div className="card slick-card" style="width: 18rem;">
              <img
                src="/images/chirag.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="team-detail rounded-4 text-light py-2">
                <h4 className="fs-4 fw-bold mb-0">Chirag</h4>
                <p className="py-0 mb-0">Sales Executive</p>
              </div>
            </div>
            <div className="card slick-card" style="width: 18rem;">
              <img
                src="/images/akash.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="team-detail rounded-4 text-light py-2">
                <h4 className="fs-4 fw-bold mb-0">Akash</h4>
                <p className="py-0 mb-0">Sales Executive</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Team;

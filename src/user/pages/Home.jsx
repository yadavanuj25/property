import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import { FiSearch } from "react-icons/fi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
import ProcessTimeline from "../components/ProcessTimeline";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
// import { Group1 } from "../../../public/images/Group1.png";

const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
          slidesToScroll: 2,
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
      {/* <Header /> */}

      {/* first section */}
      <section className="section hero-section">
        <div className="hero">
          <div className="hero-content">
            <h1>
              Smart Property
              <br />
              Solutions. Real Results.
            </h1>
            <p>
              "Your trusted partner in every stage of real estate whether you're
              buying, selling, or renting."
            </p>

            <div className="search-box">
              <div className="tabs">
                <button className="active">Rent</button>
                <button>Buy</button>
                <button>Sell</button>
              </div>
              <div className="search-fields">
                <div className="search-items">
                  <h5 className="search-items-heading">Location</h5>
                  {/* <select> */}
                  <input placeholder="Select your city"></input>
                  {/* </select> */}
                </div>
                <div className="search-items">
                  <h6 className="search-items-heading">Property Type</h6>
                  <select>
                    <option>Choose Property Type</option>
                  </select>
                </div>
                <div className="search-items">
                  <h6 className="search-items-heading">Price Range</h6>
                  <select>
                    <option>Choose Price Range</option>
                  </select>
                </div>

                <button className="search-btn">
                  <FiSearch />
                </button>
              </div>
            </div>

            <a href="#" className="explore-btn px-4">
              Explore All Properties
            </a>
          </div>

          <div className="hero-images">
            <img
              src="/images/h3.jpg"
              alt="Main Property"
              className="main-img"
            />
            <div className="thumbs">
              <img src="/images/h1.jpg" alt="Interior" />
              <img src="/images/h2.jpg" alt="Interior" />
            </div>
            <div className="badge">
              <img
                src="images/bestproperty.png"
                alt=""
                width="100"
                height="100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className="section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Who Choose Us
        </h6>
        <div className="dealer">
          <div className="dealer1 mb-5">
            <h2>We are Trusted Property Dealer in Ahmedabad.</h2>
            <p>
              At White Properties, we believe finding the right home is more
              than a transaction — it’s a deeply personal journey built on
              trust, care, and understanding. From your first consultation to
              the final closing, we’re by your side with expert guidance and
              truly personalized service. We take the time to listen, tailor
              every step to your needs, and celebrate your success as if it were
              our own.
            </p>
          </div>

          <div className="dealer2 ">
            <div className="dealer-explore">
              <img src="/images/kitchen.png" alt="img" className="rounded-5" />
              <img
                src="../../public/images/arrow1.png"
                alt="img"
                className="dealer1-arrow1"
              />
            </div>
            <div className="card-columns card-container">
              <div className="card dealer-card ">
                <div className="card-body text-start">
                  <img src="/public/images/Icon.png" alt="" className="mb-3" />
                  <h5 className="card-title mb-3 font-weight-bolder">
                    Personalized Service
                  </h5>
                  <p className="card-text">
                    We craft Personalized Service to fit your unique needs.
                  </p>
                </div>
              </div>
              <div className="card dealer-card ">
                <div className="card-body text-start">
                  <img
                    src="/public/images/Icon (1).png"
                    alt=""
                    className="mb-3"
                  />
                  <h5 className="card-title mb-3 font-weight-bolder">
                    Dedicated experts
                  </h5>
                  <p className="card-text">
                    Our dedicated experts offer industry-leading.knowledge.
                  </p>
                </div>
              </div>
              <div className="card dealer-card ">
                <div className="card-body text-start">
                  <img
                    src="/public/images/Icon (2).png"
                    alt=""
                    className="mb-3"
                  />
                  <h5 className="card-title mb-3 font-weight-bolder">
                    Open communication
                  </h5>
                  <p className="card-text">
                    We prioritize open talk with no hidden fees.
                  </p>
                </div>
              </div>
              <div className="card dealer-card ">
                <div className="card-body text-start">
                  <img
                    src="/public/images/Icon (3).png"
                    alt=""
                    className="mb-3"
                  />
                  <h5 className="card-title mb-3 font-weight-bolder">
                    Overall Control
                  </h5>
                  <p className="card-text">
                    We deliver comprehensive plans for a seamless experience.
                  </p>
                </div>
              </div>
              <div className="card dealer-card ">
                <div className="card-body text-start">
                  <img
                    src="/public/images/Icon (2).png"
                    alt=""
                    className="mb-3"
                  />
                  <h5 className="card-title mb-3 font-weight-bolder">
                    Cutting-edge innovation
                  </h5>
                  <p className="card-text">
                    We leverage cutting-edge innovation to achieve results.
                  </p>
                </div>
              </div>
              <div className="card dealer-card ">
                <div className="card-body text-start">
                  <img
                    src="/public/images/Icon (3).png"
                    alt=""
                    className="mb-3"
                  />
                  <h5 className="card-title mb-3 font-weight-bolder">
                    Proven track record
                  </h5>
                  <p className="card-text">
                    Our speaks for itself.proven track record speaks for itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* third section */}
      <section className="number-data-section">
        <div className="number-data">
          <h2>2000 +</h2>
          <p>Happy Customers</p>
        </div>
        <div className="number-data">
          <h2>283 +</h2>
          <p>New Projects</p>
        </div>
        <div className="number-data">
          <h2>12 +</h2>
          <p>Unit sold</p>
        </div>
        <div className="number-data">
          <div className="number-data-arrow">
            <FaArrowRightLong />
          </div>
        </div>
        <div className="number-data">
          <img src="/public/images/a1.png" alt="" height="50" width="400" />
        </div>
      </section>

      {/* fourth section */}
      <section className="section explore-section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Our specialization
        </h6>
        <div className="dealer">
          <div className="dealer1 mb-5 col-12 px-0">
            <h2 className="col-6 px-0">
              Whether buying or investing, we’ll help you find the right
              property
            </h2>
            <a href="#" className="explore-btn px-4">
              Explore All Properties
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row g-5 align-items-center mb-5 ">
            <div className="col-lg-6">
              <div className="icon mb-3">
                <img src="/images/explore1.png" alt="Img" />
              </div>
              <h3 className="title">Experienced & Trained Team</h3>
              <p className="description">
                With White Ocean Property, you gain the expertise of seasoned
                professionals with 5–15 years of experience in Ahmedabad’s real
                estate market. Through ongoing training and market updates, our
                team ensures you receive the most accurate, up-to-date guidance
                at every step.
              </p>
              <a href="#" className="explore-link">
                Explore More <span>↗</span>
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/Group1.png"
                alt="Interior"
                className="explore-img rounded-4"
              />
            </div>
          </div>

          <div className="row g-5 align-items-center flex-lg-row-reverse mb-5 mt-5">
            <div className="col-lg-6">
              <div className="icon mb-3">
                <img src="/images/explore2.png" alt="Img" />
              </div>
              <h3 className="title">Personalized Consultation</h3>
              <p className="description">
                We prioritize your needs over pushy sales tactics. No
                unsolicited calls—just helpful insights via email, blogs, and
                expert-led consultations focused on your goals, not pressure.
              </p>
              <a href="#" className="explore-link">
                Explore More <span>↗</span>
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/Group2.png"
                alt="Interior"
                className="explore-img rounded-4"
              />
            </div>
          </div>

          <div className="row g-5 align-items-center mb-5 mt-5">
            <div className="col-lg-6">
              <div className="icon mb-3">
                <img src="/images/explore3.png" alt="Img" />
              </div>
              <h3 className="title">Partnerships with Top Builders</h3>
              <p className="description">
                As trusted partners of top Ahmedabad developers, we offer
                exclusive access to premier projects. Our strong builder
                relationships reflect our credibility—ensuring you're in
                reliable hands throughout your property journey.
              </p>
              <a href="#" className="explore-link">
                Explore More <span>↗</span>
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/Group3.png"
                alt="Interior"
                className="explore-img rounded-4"
              />
            </div>
          </div>

          <div className="row g-5 align-items-center flex-lg-row-reverse  mt-5 ">
            <div className="col-lg-6">
              <div className="icon mb-3">
                <img src="/images/explore4.png" alt="Img" />
              </div>
              <h3 className="title">Quality assuarance</h3>
              <p className="description">
                At White Ocean Property, we recommend only quality projects from
                trusted developers — never compromising on standards, integrity,
                or transparency.
              </p>
              <a href="#" className="explore-link">
                Explore More <span>↗</span>
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/Group4.png"
                alt="Interior"
                className="explore-img rounded-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* fivth section */}

      <section className="number-data-section">
        <div className="number-data">
          <h2>Looking for a dream Home ?</h2>
          <p>We can help you realize your dream of a new home</p>
        </div>

        <div className="number-data">
          <div className="number-data-arrow">
            <FaArrowRightLong />
          </div>
        </div>
        <div className="number-data">
          <a href="#" className="explore-btn px-5">
            Book a call
          </a>
          {/* <img src="/public/images/a1.png" alt="" height="50" width="400" /> */}
        </div>
      </section>

      {/* sixth section */}

      <section className="section property-section">
        <div className="dealer">
          <div className="dealer1 mb-5 col-12">
            <h2 className="col-6">
              The most famous rent properties across ahmedabad
            </h2>
            <div className="d-flex gap-3">
              <a href="#" className="flat-btn active">
                Offices
              </a>
              <a href="#" className="flat-btn ">
                Flats
              </a>
              <span className="flat-arr1">
                <FaChevronRight />
              </span>
            </div>
          </div>
        </div>

        <div className="container">
          <Slider {...settings}>
            <div className="card slick-card">
              <img
                src="/images/Mask1.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="card-body ">
                <p className="card-text d-flex gap-3 mb-1">
                  <span>
                    <GrLocation />
                  </span>
                  <span>South Bopal, Ahmedabad</span>
                </p>
                <h5 className="card-title d-flex gap-3 mb-4 fs-5 fw-bold">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <span>59970/*</span>
                </h5>
                <a href="#" className="view-deatil-btn ">
                  view details
                </a>
              </div>
            </div>
            <div className="card slick-card">
              <img
                src="/images/Mask2.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="card-body">
                <p className="card-text d-flex gap-3 mb-1">
                  <span>
                    <GrLocation />
                  </span>
                  <span>South Bopal, Ahmedabad</span>
                </p>
                <h5 className="card-title d-flex gap-3 mb-4 fs-5 fw-bold">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <span>59970/*</span>
                </h5>
                <a href="#" className="view-deatil-btn">
                  view details
                </a>
              </div>
            </div>
            <div className="card slick-card">
              <img
                src="/images/Mask3.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="card-body">
                <p className="card-text d-flex gap-3 mb-1">
                  <span>
                    <GrLocation />
                  </span>
                  <span>South Bopal, Ahmedabad</span>
                </p>
                <h5 className="card-title d-flex gap-3 mb-4 fs-5 fw-bold">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <span>59970/*</span>
                </h5>
                <a href="#" className="view-deatil-btn">
                  view details
                </a>
              </div>
            </div>
            <div className="card slick-card">
              <img
                src="/images/Mask4.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="card-body">
                <p className="card-text d-flex gap-3 mb-1">
                  <span>
                    <GrLocation />
                  </span>
                  <span>South Bopal, Ahmedabad</span>
                </p>
                <h5 className="card-title d-flex gap-3 mb-4 fs-5 fw-bold">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <span>59970/*</span>
                </h5>
                <a href="#" className="view-deatil-btn">
                  view details
                </a>
              </div>
            </div>
            <div className="card slick-card">
              <img
                src="/images/Mask2.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="card-body">
                <p className="card-text d-flex gap-3 mb-1">
                  <span>
                    <GrLocation />
                  </span>
                  <span>South Bopal, Ahmedabad</span>
                </p>
                <h5 className="card-title d-flex gap-3 mb-4 fs-5 fw-bold">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <span>59970/*</span>
                </h5>
                <a href="#" className="view-deatil-btn">
                  view details
                </a>
              </div>
            </div>
            <div className="card slick-card">
              <img
                src="/images/Mask1.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="card-body">
                <p className="card-text d-flex gap-3 mb-1">
                  <span>
                    <GrLocation />
                  </span>
                  <span>South Bopal, Ahmedabad</span>
                </p>
                <h5 className="card-title d-flex gap-3 mb-4 fs-5 fw-bold">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <span>59970/*</span>
                </h5>
                <a href="#" className="view-deatil-btn">
                  view details
                </a>
              </div>
            </div>
            <div className="card slick-card">
              <img
                src="/images/Mask4.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="card-body">
                <p className="card-text d-flex gap-3 mb-1">
                  <span>
                    <GrLocation />
                  </span>
                  <span>South Bopal, Ahmedabad</span>
                </p>
                <h5 className="card-title d-flex gap-3 mb-4 fs-5 fw-bold">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <span>59970/*</span>
                </h5>
                <a href="#" className="view-deatil-btn">
                  view details
                </a>
              </div>
            </div>
            <div className="card slick-card">
              <img
                src="/images/Mask3.png"
                className="card-img-top"
                alt="Interior"
              />
              <div className="card-body">
                <p className="card-text d-flex gap-3 mb-1">
                  <span>
                    <GrLocation />
                  </span>
                  <span>South Bopal, Ahmedabad</span>
                </p>
                <h5 className="card-title d-flex gap-3 mb-4 fs-5 fw-bold">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <span>59970/*</span>
                </h5>
                <a href="#" className="view-deatil-btn">
                  view details
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* seven section */}

      <section className="section service-section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Services
        </h6>
        <div className="dealer">
          <div className="dealer1 mb-5 col-12 px-0">
            <h2 className="col-6 px-0">
              Whether buying or investing, we’ll help you find the right
              property
            </h2>
            <a href="#" className="explore-btn px-4">
              View all Services
            </a>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="col-12 d-flex gap-5">
              <div className="card services-card rounded-5 p-2">
                <div className="card-img">
                  <img
                    src="/images/service1.png"
                    className="card-img-top"
                    alt="Interior"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    Property Buy, Rent, Sell Assistance
                  </h5>
                  <p className="card-text">
                    Expert guidance for buying, renting, or selling properties
                    tailored to your needs and preferences.
                  </p>
                  <a href="#" className="explore-link">
                    Let's Gets Started<span>↗</span>
                  </a>
                </div>
              </div>
              <div className="card services-card rounded-5 p-2">
                <div className="card-img">
                  <img
                    src="/images/service2.png"
                    className="card-img-top"
                    alt="Interior"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    Property Management Services
                  </h5>
                  <p className="card-text">
                    Professional management of properties to maximize returns
                    and minimize hassles for property owners.
                  </p>
                  <a href="#" className="explore-link">
                    Let's Gets Started<span>↗</span>
                  </a>
                </div>
              </div>
              <div className="card services-card rounded-5 p-2">
                <div className="card-img">
                  <img
                    src="/images/service3.png"
                    className="card-img-top"
                    alt="Interior"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    Property Valuation and Appraisal
                  </h5>
                  <p className="card-text">
                    Accurate assessment of property value to ensure the fair
                    deals and informed decisions.
                  </p>
                  <a href="#" className="explore-link">
                    Let's Gets Started<span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* eight section */}

      <section className="section timeline-section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Our process
        </h6>
        <div className="dealer">
          <div className="dealer1 mb-5 col-12 px-0">
            <h2 className="col-6 px-0 ">
              Customer satisfication is our key of Motivation.
            </h2>
            <a href="#" className="explore-btn px-4">
              Connect with us
            </a>
          </div>
        </div>

        <ProcessTimeline />
      </section>

      {/* nine section */}

      <Testimonial />
      <Team />

      {/* ten section */}
    </>
  );
};

export default Home;

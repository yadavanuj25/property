import React from "react";

const Property = () => {
  return (
    <>
      <section className="pages-section">
        <div className="row">
          <div className="container text-light d-flex justify-content-between align-items-start about-section-content">
            <h2 className="col-6  fw-bolder">
              We are hiring <img src="/images/star.png" alt="img err" />
            </h2>
            <div className="col-6">
              <p>
                At White Oceans Property, we don't just build homes—we build
                careers, nurture talent, and create opportunities for passionate
                individuals to grow, lead, and make a lasting impact in the
                world of real estate.
              </p>
              <a href="#" className="explore-btn  px-5">
                See all open positions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Property;

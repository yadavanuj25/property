import React from "react";
// import "./PropertyListing.css";
import { GrLocation } from "react-icons/gr";
import { MdOutlineBed } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { TbRotateRectangle } from "react-icons/tb";

import Property from "../staticData/Property.json";

const PropertyListing = () => {
  console.log(Property);
  return (
    <>
      <section>
        <div className="container property-container">
          {Property.map((item, index) => (
            <div className="card property-card" key={index}>
              <img src={item.image} alt="Interior" />
              <div className="card-body ">
                <h5 className="card-title d-flex justify-content-between align-items-center mb-2 fs-5 fw-bold">
                  <span>{item.name}</span>
                  <span>
                    <img
                      src="/images/whatsapp.png"
                      alt="img err"
                      style={{ width: "25px", height: "25px" }}
                    />
                  </span>
                </h5>
                <p className="card-text d-flex gap-3 mb-1">
                  <span>{item.location}</span>
                </p>
                <hr />
                <div className="propertylisting-container">
                  <div className="propertylisting-card">
                    <MdOutlineBed style={{ color: "red", fontSize: "20px" }} />
                    <p className="mb-0">4 bhk</p>
                  </div>
                  <div className="propertylisting-card">
                    <TbRotateRectangle
                      style={{ color: "red", fontSize: "20px" }}
                    />
                    <p className="mb-0">{item.size}</p>
                  </div>
                  <div className="propertylisting-card">
                    <MdOutlineBed style={{ color: "red", fontSize: "20px" }} />
                    <p className="mb-0">
                      Furnished : <span>{item.furnished}</span>
                    </p>
                  </div>
                </div>
                <div className="property-like">
                  <span className="like-icon">
                    <FaRegHeart />
                  </span>
                  <a href="#" className="view-deatil-btn ">
                    view details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PropertyListing;

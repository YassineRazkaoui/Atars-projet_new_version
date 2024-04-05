import React from "react";
import "../../../Style/About/AboutHotel/DetaileHotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faBedAlt } from "@fortawesome/free-solid-svg-icons"; // Import icons for Bedrooms, Bathrooms, Beds

const DetaileHotel = () => {
  return (
    <div className="container-detaile">
      <div className="apartment-description">
        <header className="header">
          <h1 className="heading">Hotel Jnan</h1>
          <p className="heading-p">Fes Marriott Hotel Jnan Palace</p>
          <div className="details">
            <span className="detail">
              <FontAwesomeIcon icon={faBed} /> 1 Bedroom
            </span>
            <span className="detail">
              <FontAwesomeIcon icon={faBath} /> 1 Bathroom
            </span>
            <span className="detail">
              <FontAwesomeIcon icon={faBedAlt} /> 3 Beds
            </span>
          </div>
        </header>
        <div className="content">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetaileHotel;

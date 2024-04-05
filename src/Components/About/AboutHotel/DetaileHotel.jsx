import { GiBunkBeds } from "react-icons/gi"; 
import { MdBathroom } from "react-icons/md"; 
import { MdBedroomChild } from "react-icons/md"; 
import React from "react";
import "../../../Style/About/AboutHotel/DetaileHotel.css";


const DetaileHotel = () => {
  return (
    <div className="container-detaile">
      <div className="apartment-description">
        <header className="header">
          <h1 className="heading">Hotel Jnan</h1>
          <p className="heading-p">Fes Marriott Hotel Jnan Palace</p>
          <div className="details">
            <span className="detail">
              <MdBedroomChild size={50}/> 1 Bedroom
            </span>
            <span className="detail">
              <MdBathroom size={50}/> 1 Bathroom
            </span>
            <span className="detail">
              <GiBunkBeds size={50}/> 3 Beds
            </span>
          </div>
        </header>
        <div className="content">
          <h1 className="heading-a">Apartment Description</h1>
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

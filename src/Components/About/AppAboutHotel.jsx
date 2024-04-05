import React from "react";
import "../../Style/About/AppAboutHotel.css";
import NavbarAbout from "../About/AboutHotel/NavbarAbout";
import BoxAbout from "../About/AboutHotel/BoxAbout";
import HotelAbout from "../About/AboutHotel/HotelAbout";


const AboutHotel = () => {
  return (
    <div className="container">
      <NavbarAbout/>
      <BoxAbout/>
      <HotelAbout/>
    </div>
  );
};

export default AboutHotel;
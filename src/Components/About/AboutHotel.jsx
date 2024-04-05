import React from "react";
import "../../Style/About/AboutHotel.css";
import NavbarAbout from "../../Components/About/NavbarAbout";
import BoxAbout from "../../Components/About/BoxAbout";
import HotelAbout from "../../Components/About/HotelAbout";


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
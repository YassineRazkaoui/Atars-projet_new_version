import React from "react";
import "../../Style/About/HotelAbout.css";

import hotelImage from "../../assets/AboutHotel/abouthotel1.jpg";
import poolImage1 from "../../assets/AboutHotel/abouthotel2.jpg";
import poolImage2 from "../../assets/AboutHotel/abouthotel3.jpg";

const HotelAbout = () => {
  return (
    <div className="container-collage">
      <div className="collage">
        <div className="img-1">
          <img
            src={hotelImage}
            alt="Fes Marriott Hotel Jnan Palace"
            className="hotel-image"
          />
        </div>
        <div className="img-2">
        <img src={poolImage1} alt="Pool 1" className="pool-image" />
        <img src={poolImage2} alt="Pool 2" className="pool-image" />
        <img src={poolImage2} alt="Pool 2" className="pool-image" />
        <img src={poolImage2} alt="Pool 2" className="pool-image" />
        </div>
      </div>
    </div>
  );
};

export default HotelAbout;

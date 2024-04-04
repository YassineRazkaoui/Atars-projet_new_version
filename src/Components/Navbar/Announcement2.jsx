import React from "react";
import "../../Style/Announcement.css";
import img1 from "../../assets/Announcement/annonce1.jpg";

function Announcement2() {
  return (
    <div className="container1">
      <div className="announcement">
        <img src={img1} alt="Marrakesh" />
        <div className="announcement-text">
          <h3>
            What are the national dishes of Morocco and where can you try them?
          </h3>
          <p>
            What are the national dishes of Morocco It is a clay cooking pot
            with a conical lid with multiple types of dishes slow cooked inside
            (beef, lamb, chicken, veggies, etc). You can get it practically
            anywhere
          </p>
          <button type="submit">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Announcement2;

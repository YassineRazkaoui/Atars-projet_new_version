import React, { useState } from "react";
import "../../Style/About/BoxAbout.css";

const Box = () => {
  return (
    <div className="BoxAbout">
      <div className="BoxAbout-element">
        <ul>
          <li>
            <a href="">Photos</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Review</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Box;

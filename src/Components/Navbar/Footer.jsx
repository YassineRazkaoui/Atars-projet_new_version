import React from "react";
import "../../Style/Footer.css";
import footer_Atars from "../../assets/logo_atars.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram ,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div class="container-footer">
      <footer class="footer-distributed">
        <div class="footer-left">
          <img src={footer_Atars} alt="" class="footer_Atars" />

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">© 2024 Atars . All rights reserved.</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Tinejdad, Errachidia </span> Tinejdad, Errachidia 
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+212 600000000</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="Atarstrips@gmail.com">Atarstrips@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram } />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

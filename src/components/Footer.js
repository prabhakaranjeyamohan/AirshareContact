import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="contact-us">
          <div className="contact-1">
            <div className="address">
              <div className="icon">
                <ImLocation2 />
              </div>
              <div className="address-text">
                HEADQUARTERS AirShare, Inc. 7 Bayview Station Rd. Ottawa, ON K1Y
                3B5
              </div>
            </div>
            <div className="phone-no">
              <div className="icon">
                <BsFillTelephoneFill />
              </div>
              <div className="phone">613 - 301 - 2940</div>
            </div>
          </div>
          <div className="contact-2">
            <div className="address">
              <div className="icon">
                <ImLocation2 />
              </div>
              <div className="address-text">
                U.S. REGIONAL AirShare Systems, Inc. 12 Channel St. Suite 502
                Boston, MA 02210
              </div>
            </div>
            <div className="phone-no">
              <div className="icon">
                <BsFillTelephoneFill />
              </div>
              <div className="phone">857 - 444 - 9685</div>
            </div>
          </div>
        </div>
        <div className="socialMedia">
          <div className="icons">
            <AiFillFacebook />
          </div>
          <div className="icons">
            <AiFillInstagram />
          </div>
          <div className="icons">
            <AiFillLinkedin />
          </div>
          <div className="icons">
            <AiFillTwitterSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

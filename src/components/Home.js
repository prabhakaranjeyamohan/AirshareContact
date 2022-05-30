import '../styles/Home.css'
import React from "react";
import {Link} from "react-router-dom";
import BannerImage from "../assets/pics/splashpg_v1.jpg";
import { BiRegistered } from "react-icons/bi";


function Home() {
  return (
    <div className="homepage" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h1> 
          OVERWATCH 
          <sup className="registered-icon">
              <BiRegistered />
          </sup>
        </h1>
        <br></br>
        <p> 5th Generation</p>
        <Link to="/Solution">
          <button> Learn more </button>
        </Link>
      </div>
      <div className = "bottom-text">
        ...a new era in autonomous warfare
      </div>
    </div>
  );
}


export default Home


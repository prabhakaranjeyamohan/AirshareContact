import '../styles/Home.css'
import React from "react";
import {Link} from "react-router-dom";
import BannerImage from "../assets/pics/splashpg_v1.jpg";
import { BiRegistered } from "react-icons/bi";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> 
          OVERWATCH 
          <sup className="registered-icon">
              <BiRegistered />
          </sup>
        </h1>
        <p> 5th Generation</p>
        <Link to="/solution">
          <button> Learn More </button>
        </Link>
      </div>
    </div>
  );
}

export default Home


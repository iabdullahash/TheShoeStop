import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/shoe-banner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> TheShoeStop </h1>
        <p> A Place for you to buy Shoes</p>
        <Link to="/menu">
          <button> BUY NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

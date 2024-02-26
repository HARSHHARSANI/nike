import React from "react";
import amazonlogo from "../../public/images/amazon.png";
import flipkartlogo from "../../public/images/flipkart.png";
import shoeImage from "../../public/images/hero-image.png";

const Hero = () => {
  return (
    <main className="hero container ">
      <div className="hero-content align-items-center ">
        <h1>YOUR FEET DESERVES THE BEST </h1>
        <p>
          Veniam reprehenderit nisi aliquip consequat esse aliqua non nisi sint
          minim amet exercitation laborum adipisicing. Tempor exercitation
        </p>
        <div className="hero-btn">
          <button>Shop now</button>
          <button className="secondary">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on</p>
          <div className="images">
            <img src={amazonlogo} alt="" />
            <img src={flipkartlogo} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image align-items-center ">
        <img src={shoeImage} alt="show-image" />
      </div>
    </main>
  );
};

export default Hero;

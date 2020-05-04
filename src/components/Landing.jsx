/*
 * @Author: Joshua Asare
 * @Date: 2020-05-02 12:22:55
 * @Last Modified by: Joshua Asare
 * @Last Modified time: 2020-05-04 07:59:11
 */
import React from "react";
import "./css/landing.css";
import { images } from "../assets";

const Landing = () => {
  return (
    <div className="">
      <div className="landing__logo">
        <img
          alt=""
          src={images.carouselLogo}
          className="landing__logo--image"
        />
      </div>
      <div className="landing__text">
        <span className="landing__text--main">react-circular-carousel</span>

        <span className="landing__text--sub">
          A pure mininized responsive carousel for react.
        </span>
      </div>
    </div>
  );
};

export default Landing;

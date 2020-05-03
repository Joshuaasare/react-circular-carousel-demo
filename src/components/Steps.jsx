/*
 * @Author: Joshua Asare
 * @Date: 2020-05-02 18:33:45
 * @Last Modified by: Joshua Asare
 * @Last Modified time: 2020-05-03 20:41:15
 */

import React from "react";
import "./css/steps.css";
import { Carousel } from "react-circular-carousel";
import { steps } from "../data";

const Steps = () => {
  return (
    <div className="steps">
      <Carousel width={300} height={300} id={2} transition="bounce">
        {steps.map((step) => {
          return (
            <div className="step__container">
              <img src={step.url} className="step__image" alt="" />
              <span>{step.text}</span>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Steps;

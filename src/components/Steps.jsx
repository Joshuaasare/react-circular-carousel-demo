/*
 * @Author: Joshua Asare
 * @Date: 2020-05-02 18:33:45
 * @Last Modified by: Joshua Asare
 * @Last Modified time: 2020-05-03 12:06:37
 */

import React from "react";
import "./css/steps.css";
import { Carousel } from "react-circular-carousel";
import Lottie from "react-lottie";
import { steps, defaultAnimationOptions } from "../data";

const Steps = () => {
  return (
    <div className="steps">
      <Carousel width={350} height={350} id={2} transition="bounce">
        {steps.map((step) => {
          return (
            <div className="step__container">
              <div className="step__animation">
                <Lottie
                  options={defaultAnimationOptions(step.animation)}
                  isPaused={false}
                  isStopped={false}
                  isClickToPauseDisabled={true}
                />
              </div>
              <span>{step.text}</span>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Steps;

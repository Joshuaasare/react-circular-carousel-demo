/*
 * @Author: Joshua Asare
 * @Date: 2020-05-02 13:57:00
 * @Last Modified by: Joshua Asare
 * @Last Modified time: 2020-05-04 08:19:38
 */
import React from "react";
import { Carousel } from "react-circular-carousel";
import "./css/card.css";
import { cards } from "../data";

const Cards = () => {
  return (
    <div className="card">
      <div className="card__container">
        <Carousel width={150} height={200} id={0} transition="bounce">
          {cards.map((card, index) => {
            const key = `card-${index}`;
            return (
              <img key={key} src={card.url} alt="" className="full__size" />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Cards;

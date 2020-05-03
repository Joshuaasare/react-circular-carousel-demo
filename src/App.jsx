import React, { Fragment } from "react";
import "react-circular-carousel/dist/index.css";
import "./css/app.css";
import { Landing, Cards, Images, Steps } from "./components";
import { images } from "./assets";

const App = () => {
  return (
    <Fragment>
      <section className="section__landing">
        <Landing />
      </section>

      <div className="header">
        <span>Examples</span>
      </div>

      <section className="section__cards">
        <Cards />
      </section>

      <section className="section__images">
        <Images />
      </section>

      <section className="section__steps">
        <Steps />
      </section>

      <section className="section__links">
        <div className="links">
          <div className="links__buttons">
            <div className="links__button">
              <a href="https://github.com/Joshuaasare/react-circular-carousel">
                Github
              </a>
            </div>
            <div className="links__button">
              <a href="https://www.npmjs.com/package/react-circular-carousel">
                npm
              </a>
            </div>
          </div>

          <div className="links__text">
            Made with ❤️ by
            <a href="https://joshuaasare.com">
              <img className="links__logo" src={images.logo} alt="" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default App;

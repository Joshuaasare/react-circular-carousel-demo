import React, { Fragment } from "react";
import "react-circular-carousel/dist/index.css";
import "./css/app.css";
import { Landing, Cards, Images, Steps } from "./components";

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

      <section className="section__steps">
        <Steps />
      </section>
    </Fragment>
  );
};

export default App;

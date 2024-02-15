import React from "react";
import Arrow from "../images/svg/arrowstep.svg";
import FirstStepIcon from "../images/svg/firststep.svg";
import SecondStepIcon from "../images/svg/secondstep.svg";
import ThirdStepIcon from "../images/svg/thirdstep.svg";
import FourthStepIcon from "../images/svg/fourthstep.svg";

function Process() {
  return (
    <div id="process" >
      <h4 className="text-center">Our process</h4>
      <h1 className="text-center">4 easy work <span> </span><span className="underline" >steps</span></h1>
      <div id="steps-container" className="row mt-5 justify-content-center">
        <div id="step-up" className="col-md col-sm-6 position-relative">
          <p>Estimation & planning</p>
          <div id="icon-frame" className="bg-white">
            <div id="icon-container" className="bg-brown-light">
              <div id="icon" className="position-relative">
                <img src={FirstStepIcon} className="position-absolute top-50 start-50 translate-middle" alt="first_step_icon" />
              </div>
            </div>
          </div>
          <img id="arrow" src={Arrow} className="position-absolute d-md-block d-none" alt="" />
          <span className="position-absolute">01</span>
        </div>
        <div id="step-down" className="col-md col-sm-6 position-relative">
          <div id="icon-frame" className="bg-white">
            <div id="icon-container" className="bg-brown-light">
              <div id="icon" className="position-relative">
                <img src={SecondStepIcon} className="position-absolute top-50 start-50 translate-middle" alt="first_step_icon" />
              </div>
            </div>
          </div>
          <p>Concept & design</p>
          <img id="arrow" src={Arrow} className="position-absolute d-md-block d-none" alt="" />
          <span className="position-absolute">02</span>
        </div>
        <div id="step-up" className="col-md col-sm-6 position-relative">
          <p>On site work</p>
          <div id="icon-frame" className="bg-white">
            <div id="icon-container" className="bg-brown-light">
              <div id="icon" className="position-relative">
                <img src={ThirdStepIcon} className="position-absolute top-50 start-50 translate-middle" alt="first_step_icon" />
              </div>
            </div>
          </div>
          <img id="arrow" src={Arrow} className="position-absolute d-md-block d-none" alt="" />
          <span className="position-absolute">03</span>
        </div>
        <div id="step-down" className="col-md col-sm-6 position-relative">
          <div id="icon-frame" className="bg-white">
            <div id="icon-container" className="bg-brown-light">
              <div id="icon" className="position-relative">
                <img src={FourthStepIcon} className="position-absolute top-50 start-50 translate-middle" alt="first_step_icon" />
              </div>
            </div>
          </div>
          <p>Project delivery</p>
          <span className="position-absolute">04</span>
        </div>
      </div>
    </div>
  )
}

export default Process
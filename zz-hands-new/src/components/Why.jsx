import React from "react";
import Arrow from "../images/svg/arrow.svg";
import WhyImage from "../images/why_01.jpg";

function Why() {
  return (
    <div id="why" className="row justify-content-center px-3 bg-brown-dark">
      <div id="why-text" className="col-xl-5 col-md-6">
        <h4>Our benefits</h4>
        <h1 className="mb-5">Why choose ZZ Hands</h1>
        <p>Choose a trustworthy international team in an uncertain market.</p>
        <div className="pt-3">
          <li className="list-group-item"><img src={Arrow} alt="arrow" />High quality services for a reasonable price</li>
          <li className="list-group-item"><img src={Arrow} alt="arrow" />International standards</li>
          <li className="list-group-item"><img src={Arrow} alt="arrow" />Maximize the value of your property with excellent concept and design</li>
        </div>
      </div>
      <div id="why-image" className="col-xl-5 col-md-6 px-0 pb-md-0 pb-3">
        <img src={WhyImage} alt="why_image" />
      </div>
    </div>
  )
}

export default Why
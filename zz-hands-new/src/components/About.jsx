import React from "react";
import Image1 from "../images/about_01.jpg";
import Image2 from "../images/about_02.jpg";
import Image3 from "../images/about_03.jpg";
import Image4 from "../images/about_04.jpg";
import Image5 from "../images/about_05.jpg";

function About() {
  return (
    <div id="about" className="row justify-content-center px-xl-0 px-3">
      <div id="about-gallery" className="col-xl-5 col-lg-6 col-md-10">
        <div className="img01">
          <img src={Image1} alt="about" />
        </div>
        <div className="img02">
          <img src={Image2} alt="about" />
        </div>
        <div className="img03">
          <img src={Image3} alt="about" />
        </div>
        <div className="img04">
          <img src={Image4} alt="about" />
        </div>
        <div className="img05">
          <img src={Image5} alt="about" />
        </div>
      </div>
      <div id="about-text" className="col-xl-5 col-lg-6 col-md-10 mt-xxl-5 mt-lg-3 p-0">
        <h4 className="mb-xl-4">About ZZ Hands</h4>
        <h1>We provide one of the bests full renovation services in
          <span> </span><span className="underline">London</span>
        </h1>
        <div id="textbox" className="my-5 pt-1 pe-2 pb-3 ps-4">
          <p>With years of experience and quality in our trade, let us work with you on your next project.</p>
        </div>
        <p>We will take care of your next renovation in London, from the concept, and design to the finished product.</p>
        <p>We create high quality and unique projects with our motivated team.</p>
        <a className="btn btn-lg rounded-0 mt-4" href="#contact" role="button">More details</a>
      </div>
    </div>
  )
}

export default About
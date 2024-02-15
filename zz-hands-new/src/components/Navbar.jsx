import React from "react";
import Logo from "../images/zz_hands_original_logo.webp";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top header-scroll">
      <div className="d-flex container-fluid">
        <a className="navbar-brand flex-grow-1 p-0" href="#header"><img src={Logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll gap-2">
            <li className="nav-item text-center">
              <a className="nav-link text-uppercase active" href="#header">Home</a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link text-uppercase" href="#services">Services</a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link text-uppercase" href="#gallery">Portfolio</a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link text-uppercase" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
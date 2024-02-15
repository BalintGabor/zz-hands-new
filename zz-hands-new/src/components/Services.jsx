import React from "react";
import PaintImage from "../images/svg/paint.svg";
import WallpaperImage from "../images/svg/wallpaper.svg";
import TileImage from "../images/svg/tile.svg";
import FloorImage from "../images/svg/floor.svg";
import FittingImage from "../images/svg/fitting.svg";
import FurnitureAssemblyImage from "../images/svg/furnitureassembly.svg";
import BespokeCarpentryImage from "../images/svg/bespokecarpentry.svg";
import OutdoorWorksImage from "../images/svg/outdoorworks.svg";

function Services() {
  return (
    <div id="services" className="d-flex flex-column">
      <div id="services-header" className="row justify-content-center px-md-0 px-3 bg-brown-light">
        <div className="col-xxl-6 col-lg-7 col-md-10 p-0">
          <h4>Services we do</h4>
          <h1>Our home improvement <span> </span> <span className="underline">services</span></h1>
        </div>
        <p className="col-lg-4 col-md-10 pt-xxl-5 pt-lg-0 pt-sm-3 px-0">We will transform your space into an astonishing and attractive apartment. Increase the value of your property with <span> ZZ Hands</span>.</p>
      </div>
      <div id="cards" className="mt-4 row mx-auto justify-content-center px-sm-0 px-5">
        <div id="card" className="mb-lg-0 mb-5 col-lg col-sm-4 mx-4 p-4 bg-white">
          <div id="card-image" className="pt-3">
            <img src={PaintImage} alt="painting" />
          </div>
          <h3 className="py-4">Painting</h3>
          <p>One of the fastest, most effective ways to personalize your living space is with color</p>
          <a href="#painting" className="text-center p-1 bg-white">&gt;</a>
        </div>
        <div id="card" className="mb-lg-0 mb-5 col-lg col-sm-4 mx-4 p-4 bg-white">
          <div id="card-image" className="pt-3">
            <img src={WallpaperImage} alt="wallpapering" />
          </div>
          <h3 className="py-4">Wallpapering</h3>
          <p>Let our experienced prepare, line & wallpaper your walls</p>
          <a href="#wallpapering" className="text-center p-1 bg-white">&gt;</a>
        </div>
        <div id="card" className="mb-sm-0 mb-5 col-lg col-sm-4 mx-4 p-4 bg-white">
          <div id="card-image" className="pt-3">
            <img src={TileImage} alt="tiling" />
          </div>
          <h3 className="py-4">Tiling</h3>
          <p>We specialise in tiling any surface you want</p>
          <a href="#tiling" className="text-center p-1 bg-white">&gt;</a>
        </div>
        <div id="card" className="mb-sm-0 mb-5 col-lg col-sm-4 mx-4 p-4 bg-white">
          <div id="card-image" className="pt-3">
            <img src={FloorImage} alt="flooring" />
          </div>
          <h3 className="py-4">Flooring</h3>
          <p>Excellent floor services including hardwood floors installation, sanding, finishing, repairing</p>
          <a href="#flooring" className="text-center p-1 bg-white">&gt;</a>
        </div>
      </div>
      <div id="cards" className="mt-5 row mx-auto justify-content-center px-sm-0 px-5">
        <div id="card" className="mb-lg-0 mb-5 col-lg col-sm-4 mx-4 p-4 bg-brown-light">
          <div id="card-image" className="pt-3">
            <img src={FittingImage} alt="fitting" />
          </div>
          <h3 className="py-4">Fitting</h3>
          <p>Full installation and fitting service</p>
          <a href="#painting" className="text-center p-1 bg-white">&gt;</a>
        </div>
        <div id="card" className="mb-lg-0 mb-5 col-lg col-sm-4 mx-4 p-4 bg-brown-light">
          <div id="card-image" className="pt-3">
            <img src={FurnitureAssemblyImage} alt="wallpapering" />
          </div>
          <h3 className="py-4">Furniture Assembly</h3>
          <p>Easily schedule an at-home assembly of your new furniture</p>
          <a href="#wallpapering" className="text-center p-1 bg-white">&gt;</a>
        </div>
        <div id="card" className="mb-sm-0 mb-5 col-lg col-sm-4 mx-4 p-4 bg-brown-light">
          <div id="card-image" className="pt-3">
            <img src={BespokeCarpentryImage} alt="tiling" />
          </div>
          <h3 className="py-4">Bespoke Carpentry</h3>
          <p>Making customized timber items to fit individual requirements</p>
          <a href="#tiling" className="text-center p-1 bg-white">&gt;</a>
        </div>
        <div id="card" className="mb-sm-0 mb-5 col-lg col-sm-4 mx-4 p-4 bg-brown-light">
          <div id="card-image" className="pt-3">
            <img src={OutdoorWorksImage} alt="flooring" />
          </div>
          <h3 className="py-4">Outdoor works</h3>
          <p>High-pressure water cleaning, smaller construction works and gardening</p>
          <a href="#flooring" className="text-center p-1 bg-white">&gt;</a>
        </div>
      </div>
    </div>
  )
}

export default Services
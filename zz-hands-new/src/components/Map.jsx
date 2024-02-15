import React from "react";

function Map() {
  return (
    <div id="map">
      <div id="map-container-google-1" className="z-depth-1-half map-container">
        <iframe src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" title="map" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Map
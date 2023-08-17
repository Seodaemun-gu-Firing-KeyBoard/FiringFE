import React from "react";
import OffcanvasExample from "../../component/Iconbar/IconBar";
import "./Gym.css";
import axios from "axios";
import FacilityList from "../../component/facility/FacilityList";
import MapComponent from "../../component/Map/MapComponent";

function GymPage() {
  return (
    <div>
      <OffcanvasExample />
      <div className="map-container">
        <div className="map-box">
          <MapComponent />
        </div>
      </div>
      <div className="place-list">
        <FacilityList />
      </div>
    </div>
  );
}

export default GymPage;

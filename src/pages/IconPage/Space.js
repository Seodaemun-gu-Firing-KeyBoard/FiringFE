import React from "react";
import OffcanvasExample from "../../component/Iconbar/IconBar"; // OffcanvasExample 컴포넌트의 경로를 지정해주세요.
import "./Space.css";
import axios from "axios";
import FacilityList from "../../component/facility/FacilityList";
import MapComponent from "../../component/Map/MapComponent";

function SpacePage() {
  return (
    <div>
      <OffcanvasExample />
      <div className="map-container">
        <div className="map-box">
          <MapComponent facilityType={500} />
        </div>
      </div>
      <div className="place-list">
        <FacilityList facilityType={500} />
      </div>
    </div>
  );
}

export default SpacePage;

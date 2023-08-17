import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FacilityList({ facilityType }) {
  // facilityType을 props로 받아옴
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/map/facility/");
      const filteredFacilities = response.data.filter(
        (facility) => facility.type == facilityType
      );
      setFacilities(filteredFacilities);
    } catch (error) {
      console.error("Error fetching facilities:", error);
    }
  };

  return (
    <div className="facility-list-container">
      <h2>Facility List</h2>
      <div className="facility-boxes">
        {facilities.map((facility) => (
          <Link
            to={`/facility/${facility.id}`}
            key={facility.id}
            className="facility-box"
          >
            <h3>{facility.name}</h3>
            <p>Address: {facility.address}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FacilityList;

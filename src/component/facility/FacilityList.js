import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FacilityList.css";

function FacilityList({ facilityType }) {
  // facilityType을 props로 받아옴
  const [facilities, setFacilities] = useState([]);
  const [visibleFacilities, setVisibleFacilities] = useState([]); // 상태 추가
  const [visibleCount, setVisibleCount] = useState(10);

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
      setVisibleFacilities(filteredFacilities.slice(0, visibleCount));
    } catch (error) {
      console.error("Error fetching facilities:", error);
    }
  };

  const loadMore = () => {
    const newVisibleCount = visibleCount + 10;
    setVisibleCount(newVisibleCount);
    setVisibleFacilities(facilities.slice(0, newVisibleCount));
  };
  

  return (
    <div className="facility-list-container">
      <h2>Facility List</h2>
      <div className="facility-boxes">
        {visibleFacilities.map((facility) => ( // visibleFacilities 사용
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
      {visibleCount < facilities.length && (
        <div className="button-container">
        <button className="load-more-button" onClick={loadMore}>
          더보기
          </button>
          </div>
      )}
    </div>
  );
}

export default FacilityList;

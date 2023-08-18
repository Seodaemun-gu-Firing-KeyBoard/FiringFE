import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FacilityList({ facilityType }) {
  const [facilities, setFacilities] = useState([]);
  const [filterTypeDetail, setFilterTypeDetail] = useState(null);

  useEffect(() => {
    fetchFacilities();
  }, [filterTypeDetail]);

  const fetchFacilities = async () => {
    try {
      let apiUrl = "http://127.0.0.1:8000/map/facility/";
      if (filterTypeDetail !== null) {
        apiUrl = "http://127.0.0.1:8000/map/facilityDetailType/";
      }

      const response = await axios.post(apiUrl, {
        typeDetail: filterTypeDetail,
      });
      setFacilities(response.data);
    } catch (error) {
      console.error("Error fetching facilities:", error);
    }
  };

  const handleFilter = (typeDetail) => {
    setFilterTypeDetail(typeDetail);
  };

  return (
    <div className="facility-list-container">
      <h2>Facility List</h2>
      <button onClick={() => handleFilter("all")}>전체</button>
      <button onClick={() => handleFilter("101")}>농구장</button>
      <button onClick={() => handleFilter("102")}>다목적경기장</button>
      <button onClick={() => handleFilter("103")}>배구장</button>
      <button onClick={() => handleFilter("104")}>배드민턴장</button>
      <button onClick={() => handleFilter("105")}>야구장</button>
      <button onClick={() => handleFilter("106")}>족구장</button>
      <button onClick={() => handleFilter("107")}>축구장</button>
      <button onClick={() => handleFilter("108")}>테니스장</button>
      <button onClick={() => handleFilter("109")}>풋살장</button>
      <button onClick={() => handleFilter("115")}>골프장</button>
      <button onClick={() => handleFilter("116")}>교육시설</button>
      <button onClick={() => handleFilter("117")}>수영장</button>
      <button onClick={() => handleFilter("125")}>운동장</button>
      <button onClick={() => handleFilter("126")}>체육관</button>
      <button onClick={() => handleFilter("127")}>탁구장</button>

      <div className="facility-boxes">
        {facilities.map((facility) => (
          <Link
            to={`/facility/${facility.id}`}
            key={facility.id}
            className="facility-box"
          >
            <h3>{facility.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FacilityList;

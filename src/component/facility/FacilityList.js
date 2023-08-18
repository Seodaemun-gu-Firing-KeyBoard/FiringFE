import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FacilityList({ facilityType }) {
  const [facilities, setFacilities] = useState([]);
  const [filterTypeDetail, setFilterTypeDetail] = useState("502");

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
      <div>
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
        <button onClick={() => handleFilter("202")}>단체봉사</button>
        <button onClick={() => handleFilter("203")}>전시/관람</button>
        <button onClick={() => handleFilter("204")}>문화행사</button>
        <button onClick={() => handleFilter("205")}>교육체험</button>
        <button onClick={() => handleFilter("206")}>농장체험</button>
        <button onClick={() => handleFilter("207")}>공원탐방</button>
        <button onClick={() => handleFilter("208")}>서울형키즈카페</button>
        <button onClick={() => handleFilter("209")}>삼림여가</button>
        <button onClick={() => handleFilter("501")}>녹화장소</button>
        <button onClick={() => handleFilter("502")}>캠핑장</button>
        <button onClick={() => handleFilter("504")}>강당</button>
        <button onClick={() => handleFilter("505")}>강의실</button>
        <button onClick={() => handleFilter("506")}>다목적실</button>
        <button onClick={() => handleFilter("507")}>전시실</button>
        <button onClick={() => handleFilter("508")}>주민공유공간</button>
        <button onClick={() => handleFilter("509")}>회의실</button>
        <button onClick={() => handleFilter("510")}>민원등기타</button>
        <button onClick={() => handleFilter("511")}>공연장</button>
        <button onClick={() => handleFilter("513")}>광장</button>
        <button onClick={() => handleFilter("514")}>청년공간</button>
      </div>

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

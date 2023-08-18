import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FacilityList.css";

const locationOptions = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
  "고양시",
  "과천시",
  "남양주시",
  "하남시",
  "예산군",
  "횡성군",
  "춘천시",
  "완주군",
  "정읍시",
  "포천시",
  "제천시",
  "인천시",
];

const facilityTypes = [
  { id: "101", name: "농구장" },
  { id: "102", name: "다목적경기장" },
  { id: "103", name: "배구장" },
  { id: "104", name: "배드민턴장" },
  { id: "105", name: "야구장" },
  { id: "106", name: "족구장" },
  { id: "107", name: "축구장" },
  { id: "108", name: "테니스장" },
  { id: "109", name: "풋살장" },
  { id: "115", name: "골프장" },
  { id: "116", name: "교육시설" },
  { id: "117", name: "수영장" },
  { id: "125", name: "운동장" },
  { id: "126", name: "체육관" },
  { id: "127", name: "탁구장" },
  { id: "202", name: "단체봉사" },
  { id: "203", name: "전시/관람" },
  { id: "204", name: "문화행사" },
  { id: "205", name: "교육체험" },
  { id: "206", name: "농장체험" },
  { id: "207", name: "공원탐방" },
  { id: "208", name: "서울형키즈카페" },
  { id: "209", name: "삼림여가" },
  { id: "501", name: "녹화장소" },
  { id: "502", name: "캠핑장" },
  { id: "504", name: "강당" },
  { id: "505", name: "강의실" },
  { id: "506", name: "다목적실" },
  { id: "507", name: "전시실" },
  { id: "508", name: "주민공유공간" },
  { id: "509", name: "회의실" },
  { id: "510", name: "민원등기타" },
  { id: "511", name: "공연장" },
  { id: "513", name: "광장" },
  { id: "514", name: "청년공간" },
];

const feeTypes = ["유료", "무료"];

const facilitiesPerPage = 10;

function FacilityList({ facilityType }) {
  const [facilities, setFacilities] = useState([]);
  const [filterTypeDetail, setFilterTypeDetail] = useState(null);
  const [filterFeeType, setFilterFeeType] = useState(null);
  const [filterLocation, setFilterLocation] = useState(null);
  const [filterCompound, setFilterCompound] = useState({
    typeDetail: null,
    feeType: null,
    location: null,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilter = (typeDetail) => {
    setFilterTypeDetail(typeDetail);
    console.log("선택한 세부시설 : " + typeDetail);
  };

  const handleFeeTypeFilter = (feeType) => {
    setFilterFeeType(feeType);
    console.log("선택한 요금 : " + feeType);
  };

  const handleLocationFilter = (location) => {
    setFilterLocation(location);
    console.log("선택한 지역 : " + location);
  };

  const handleSearch = () => {
    setFilterCompound({
      typeDetail: filterTypeDetail,
      feeType: filterFeeType,
      location: filterLocation,
    });
    console.log("필터링 목록 : " + JSON.stringify(filterCompound));
    setCurrentPage(1);
  };

  const handleCancelFilter = (filterName) => {
    if (filterName === "typeDetail") {
      console.log("취소한 세부시설 : " + filterTypeDetail);
      setFilterTypeDetail(null);
    } else if (filterName === "feeType") {
      console.log("취소한 요금시설 : " + filterFeeType);
      setFilterFeeType(null);
    } else if (filterName === "location") {
      console.log("취소한 지역시설 : " + filterLocation);
      setFilterLocation(null);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, [filterCompound, currentPage]);

  const fetchFacilities = async () => {
    try {
      let apiUrl = "http://127.0.0.1:8000/map/facility/";
      if (filterCompound !== null) {
        apiUrl = "http://127.0.0.1:8000/map/compoundFacility/";
      }

      const response = await axios.post(apiUrl, filterCompound, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFacilities(response.data);
      console.log("보내는 데이터 확인 : " + response.data);
    } catch (error) {
      console.error("Error fetching facilities:", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="facility-list-container">
      <h2>Facility List</h2>
      <div className="filter-box">
        <div className="filter-group">
          <h3>시설</h3>
          {facilityTypes.map((type) => (
            <button
              key={type.id}
              onClick={() =>
                filterTypeDetail === type.id
                  ? handleCancelFilter("typeDetail")
                  : handleFilter(type.id)
              }
              className={filterTypeDetail === type.id ? "selected" : ""}
            >
              {type.name}
            </button>
          ))}
        </div>
        <div className="filter-group">
          <h3>요금</h3>
          {feeTypes.map((feeType) => (
            <button
              key={feeType}
              onClick={() =>
                filterFeeType === feeType
                  ? handleCancelFilter("feeType")
                  : handleFeeTypeFilter(feeType)
              }
              className={filterFeeType === feeType ? "selected" : ""}
            >
              {feeType}
            </button>
          ))}
        </div>
        <div className="filter-group">
          <h3>지역</h3>
          {locationOptions.map((location) => (
            <button
              key={location}
              onClick={() =>
                filterLocation === location
                  ? handleCancelFilter("location")
                  : handleLocationFilter(location)
              }
              className={filterLocation === location ? "selected" : ""}
            >
              {location}
            </button>
          ))}
        </div>
        <div className="search-button">
          <button onClick={handleSearch}>검색</button>
        </div>
      </div>

      <div className="facility-boxes">
        {facilities
          .slice(
            (currentPage - 1) * facilitiesPerPage,
            currentPage * facilitiesPerPage
          ) // 현재 페이지에 해당하는 시설만 선택
          .map((facility) => (
            <Link
              to={`/facility/${facility.id}`}
              key={facility.id}
              className="facility-box"
            >
              <h3>{facility.name}</h3>
            </Link>
          ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          이전 페이지
        </button>
        <span>{currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={facilities.length <= currentPage * facilitiesPerPage}
        >
          다음 페이지
        </button>
      </div>
      
        
      
    </div>
  );
}

export default FacilityList;

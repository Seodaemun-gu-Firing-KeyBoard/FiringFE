import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const typeMapping = {
  100: {
    name: "체육시설",
    dCode_mapping: {
      101: "농구장",
      102: "다목적경기장",
      103: "배구장",
      104: "배드민턴장",
      105: "야구장",
      106: "족구장",
      107: "축구장",
      108: "테니스장",
      109: "풋살장",
      115: "골프장",
      116: "교육시설",
      117: "수영장",
      125: "운동장",
      126: "체육관",
      127: "탁구장",
    },
  },
  200: {
    name: "문화체험",
    dCode_mapping: {
      202: "단체봉사",
      203: "전시/관람",
      204: "문화행사",
      205: "교육체험",
      206: "농장체험",
      207: "공원탐방",
      208: "서울형키즈카페",
      209: "삼림여가",
    },
  },
  500: {
    name: "공간시설",
    dCode_mapping: {
      501: "녹화장소",
      502: "캠핑장",
      504: "강당",
      505: "강의실",
      506: "다목적실",
      507: "전시실",
      508: "주민공유공간",
      509: "회의실",
      510: "민원등기타",
      511: "공연장",
      513: "광장",
      514: "청년공간",
    },
  },
};

function FacilityDetail() {
  const [facility, setFacility] = useState(null);
  const { id } = useParams(); // useParams로 경로 매개변수(id) 추출

  useEffect(() => {
    fetchFacilityDetail(id);
  }, [id]);

  const fetchFacilityDetail = async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/map/facility/${id}`
      );
      setFacility(response.data);
    } catch (error) {
      console.error("Error fetching facility detail:", error);
    }
  };

  if (!facility) {
    return <div>Loading...</div>;
  }

  const typeName = typeMapping[facility.type].name;
  const typeDetailName =
    typeMapping[facility.type].dCode_mapping[facility.typeDetail];

  return (
    <div className="detailed-facility-container">
      <h2>{facility.name}</h2>
      <p>
        시설종류 : {typeName}/{typeDetailName}
      </p>
      <img src={facility.image} alt="Facility" />
      <p>{facility.target}</p>
      <p>{facility.location}</p>
      <p>{facility.use}</p>
      <p>{facility.reception}</p>
      <p>{facility.select}</p>
      <p>{facility.recruit}</p>
      <p>{facility.application}</p>
      <p>{facility.cancel}</p>
      <p>{facility.fee}</p>
      <p>{facility.reserve}</p>
      <p>{facility.call}</p>
      <p>{facility.address}</p>
      <a href={facility.siteUrl} target="_blank" rel="noopener noreferrer">
        예약하러가기
      </a>
    </div>
  );
}

export default FacilityDetail;

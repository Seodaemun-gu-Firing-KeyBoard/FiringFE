import React, { useEffect, useState } from "react";
import axios from "axios";
import FacilityList from "../facility/FacilityList";
import "./SearchComponent.css"; // 추가한 CSS 파일을 import
import ListBar from '../main-bar/list-bar';
import BoxBar from '../main-bar/box-bar';
import { Link } from "react-router-dom";

function SearchComponent() {
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState(null);
  const [filterTypeDetail, setFilterTypeDetail] = useState("all");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=2lhimp3vcd&submodules=geocoder";
    script.async = true;
    script.onload = initializeMap;
    document.head.appendChild(script);
  }, []);

  const initializeMap = () => {
    const naver = window.naver || {};
    const mapOptions = {
      center: new naver.maps.LatLng(37.580541, 126.922365),
      zoom: 10,
      mapTypeControl: true,
      zoomControl: true,
      scaleControl: true,
      mapDataControl: true,
    };

    const newMap = new naver.maps.Map("map", mapOptions);
    setMap(newMap);

    const infoWindow = new naver.maps.InfoWindow();

    axios
      .get("http://127.0.0.1:8000/map/facility/")
      .then((response) => response.data)
      .then((facilities) => {
        const filteredFacilities = facilities.filter(
          (facility) =>
            filterTypeDetail === "all" ||
            facility.typeDetail === filterTypeDetail
        );

        filteredFacilities.forEach((facility) => {
          naver.maps.Service.geocode(
            {
              query: facility.address,
            },
            function (status, response) {
              if (status === naver.maps.Service.Status.ERROR) {
                console.log("주소 검색 실패: " + response.message);
                return;
              }
              if (response.v2.meta.totalCount === 0) {
                console.log("검색 결과가 없습니다.");
                return;
              }

              const result = response.v2.addresses[0];
              const point = new naver.maps.Point(result.x, result.y);
              const marker = new naver.maps.Marker({
                position: point,
                map: newMap,
              });

              naver.maps.Event.addListener(marker, "click", function () {
                infoWindow.setContent(`
                  <div class="info-window">
                    <h3>${facility.name}</h3>
                    <p>${facility.address}</p>
                    <a href="/facility/${facility.id}">상세 정보 보기</a>
                  </div>
                `);
                infoWindow.open(newMap, marker); // Use the new map instance
              });
            }
          );
        });
      })
      .catch((error) => {
        console.error("시설 목록 가져오기 실패:", error);
        setLoading(false);
      });
  };

  const handleCurrentLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const currentPosition = new window.naver.maps.LatLng(lat, lng);

          const marker = new window.naver.maps.Marker({
            position: currentPosition,
            map: map, // Use the existing map instance
          });
          map.setCenter(currentPosition);
          map.setZoom(10);
        },
        function (error) {
          alert("현재 위치를 가져올 수 없습니다.");
        }
      );
    } else {
      alert("브라우저가 위치 정보를 지원하지 않습니다.");
    }
  };
  const handleSearchFacilityClick = () => {
    const addressInput = document.getElementById("addressInput");
    const address = addressInput.value;
    if (address.trim() === "") {
      alert("주소를 입력해주세요.");
      return;
    }
    searchAddress(address);
  };

  function searchAddress(address) {
    const naver = window.naver || {};

    naver.maps.Service.geocode(
      {
        query: address,
      },
      function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          alert("주소 검색 실패: " + response.message);
          return;
        }
        if (response.v2.meta.totalCount === 0) {
          alert("검색 결과가 없습니다.");
          return;
        }

        const result = response.v2.addresses[0];
        const point = new naver.maps.Point(result.x, result.y);
        const marker = new naver.maps.Marker({
          position: point,
          map: map,
        });

        map.setCenter(point);
        map.setZoom(17);
      }
    );
  }

  const handleFilterChange = (typeDetail) => {
    setFilterTypeDetail(typeDetail);
  };

  return (
    <div>
      <div className="navbar" id="mb">
        <div className="g">
          <ul className="navbar__logo">
            <Link to="/">
              <img src="img/logo.png" alt="Logo" />
            </Link>
          </ul>
          <div className="">공공시설 예약서비스</div>
        </div>
        <ListBar className="list" />
        <BoxBar className="box" />
      </div>

      <div>
        <div className="container">
          <div className="input-container">
            <input
              type="text"
              id="addressInput"
              placeholder="주소를 입력해주세요."
            />
            <button onClick={handleSearchFacilityClick}>검색</button>
          </div>
          <button onClick={handleCurrentLocationClick} className="location-button">
            현재위치 보기
          </button>
          <div className="place-list">
            <FacilityList handleFilterChange={handleFilterChange} />
          </div>
          <div id="map"></div>
        </div>
      </div>
      </div>
      );
  }
      export default SearchComponent;

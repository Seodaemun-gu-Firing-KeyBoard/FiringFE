import React, { useEffect, useState } from "react";
import axios from "axios";

function MapComponent({ facilityType }) {
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState(null);

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
      zoom: 15,
      mapTypeControl: true,
      zoomControl: true,
      scaleControl: true,
      mapDataControl: true,
    };

    const newMap = new naver.maps.Map("map", mapOptions); // Create a new map instance
    setMap(newMap); // Set the map instance in state

    const infoWindow = new naver.maps.InfoWindow();

    axios
      .get("http://127.0.0.1:8000/map/facility/")
      .then((response) => response.data)
      .then((facilities) => {
        facilities.forEach((facility) => {
          if (facility.type == facilityType) {
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
                  map: newMap, // Use the new map instance
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
          }
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
          map.setZoom(13);
        },
        function (error) {
          alert("현재 위치를 가져올 수 없습니다.");
        }
      );
    } else {
      alert("브라우저가 위치 정보를 지원하지 않습니다.");
    }
  };

  return (
    <div>
      <button onClick={handleCurrentLocationClick}>현재위치 보기</button>
      <div id="map" style={{ width: "1000px", height: "1000px" }}></div>
    </div>
  );
}

export default MapComponent;

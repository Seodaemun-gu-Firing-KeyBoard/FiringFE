import React, { useEffect, useState } from "react";
import axios from "axios";

function MapComponent({ location }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 네이버 지도 API 스크립트 동적으로 추가
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=2lhimp3vcd&submodules=geocoder";
    script.async = true;
    script.onload = initializeMap; // 스크립트 로드 후 initializeMap 함수 실행
    document.head.appendChild(script);
  }, []);

  const initializeMap = () => {
    const naver = window.naver || {};

    // map 설정 및 초기화
    const mapOptions = {
      center: new naver.maps.LatLng(37.580541, 126.922365),
      zoom: 13,
      mapTypeControl: true,
      zoomControl: true,
      scaleControl: true,
      mapDataControl: true,
    };

    const map = new naver.maps.Map("map", mapOptions);
    const infoWindow = new naver.maps.InfoWindow();

    // 시설 목록 가져와서 지도에 띄우기
    axios
      .get("http://127.0.0.1:8000/map/facility/")
      .then((response) => response.data)
      .then((facilities) => {
        facilities.forEach((facility) => {
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
                map: map,
              });

              // 마커 클릭 시 정보창에 시설 이름과 주소 표시
              naver.maps.Event.addListener(marker, "click", function () {
                infoWindow.setContent(`
                  <div class="info-window">
                    <h3>${facility.name}</h3>
                    <p>${facility.address}</p>
                    <a href="/facility/${facility.id}">상세 정보 보기</a>
                  </div>
                `);
                infoWindow.open(map, marker);
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

  return (
    <div>
      {/* 지도 컨텐츠 */}
      <div id="map" style={{ width: "1000px", height: "1000px" }}></div>
    </div>
  );
}

export default MapComponent;

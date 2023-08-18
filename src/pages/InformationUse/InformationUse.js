// InformationUse.js
import React from "react";
import "./InformationUse.css"; // 별도의 CSS 파일을 만들어서 여기에서 불러옵니다.
import ListBar from '../../component/main-bar/list-bar';
import BoxBar from '../../component/main-bar/box-bar';
import { Link } from "react-router-dom";


function InformationUse() {
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
    <div className="information-container">
      
      <p>
        공공시설 예약서비스는 다양한 종류의 공공시설을 손쉽게 예약하고 이용할 수
        있는 서비스입니다. 체육시설, 문화체험 공간, 회의실 등 다양한 시설을
        예약하여 다양한 목적으로 활용하세요.
      </p>
      <div className="service-features">
        <div className="feature">
          <h3>다양한 시설 선택</h3>
          <p>농구장, 수영장, 다목적실 등 다양한 시설을 선택하여 예약하세요.</p>
        </div>
        <div className="feature">
          <h3>간편한 예약 절차</h3>
          <p>온라인으로 간편하게 예약하고 결제할 수 있습니다.</p>
        </div>
        <div className="feature">
          <h3>이용 시 유의사항 안내</h3>
          <p>예약 시 유의사항과 이용 규칙을 확인하여 원활한 이용을 도와드립니다.</p>
        </div>
      </div>
    </div>
    </div>  
  );
}

export default InformationUse;

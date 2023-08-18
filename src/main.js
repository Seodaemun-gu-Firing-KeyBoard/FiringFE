import logo from "./logo.svg";
import "./main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Home from "./homepage.js";
import ListBar from "./component/main-bar/list-bar";
import BoxBar from "./component/main-bar/box-bar";
import ModalBulb from "./component/bulb/modalBulb";
import { useState } from "react";

function Main() {
  const bname = "메인페이지";
  const ex =
    "메인 페이지 입니다.\n상단바에서는 이용안내, 고객센터, 로그인, 회원가입, 마이페이지 서비스를 이용하실 수 있습니다.\n" +
    '중간에 보이는 배너는 이달의 추천 장소입니다. "즉시예약하기"로 서비스를 즐겨주세요!\n' +
    "카테고리로 장소를 나누어 쉽게 원하는 시설을 찾을 수 있는 필터링 서비스를 제공하고 있습니다.";

  return (
    <div>
      <ModalBulb bname={bname} ex={ex} />
      <nav className="navbar" id="mb">
        <div className="g">
          <ul className="navbar__logo">
            <Link to="/">
              <img src="img/logo.png" />
            </Link>
          </ul>

          <ul className="navbar__search">
            <Link to={`/searchFacility`}>
              <div className="navbar__search-input">검색창 이동</div>
            </Link>
            {/* <Link to="/search">
              <div className="navbar__search-input">
                <form className="d-flex" role="search">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                  <button className="btn btn-outline-success" type="submit">
                    가고싶은 공공시설을 검색하세요 !! (｡•̀ᴗ-)✧ {" "}
                  </button>
                </form>
              </div>
            </Link> */}
          </ul>
        </div>
        <ListBar className="list" />
        <BoxBar className="box" />
      </nav>
      <Home />

      <br></br>
      <br></br>
      <div id="footer">
        <p> 서대문구 불타는키보드 | 공공시설 예약서비스</p>
      </div>
    </div>
  );
}

export default Main;

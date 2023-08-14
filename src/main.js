import logo from './logo.svg';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import { Link } from 'react-router-dom';
import Home from './homepage.js'
import ListBar from './component/main-bar/list-bar';
import BoxBar from './component/main-bar/box-bar';

function Main() {
  return (
    <div>
      <nav className="navbar" id='mb'>
        <div className='g'>
          <ul className="navbar__logo">
            <Link to="/">
                <img src="img/logo.png" />
            </Link>
          </ul>

          <ul className="navbar__search">
            <Link to="/search">
              <div className="navbar__search-input">
                <form className="d-flex" role="search">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                  <button className="btn btn-outline-success" type="submit">가고싶은 공공시설을 검색하세요 ! </button>
                </form>
              </div>
            </Link>
          </ul>
        </div>
          <ListBar className="list"/>
          <BoxBar className="box"/>
        </nav>
        <Home/>

      


    <br></br>
    <br></br>
      <div id="footer">
        <p> 서대문구 불타는키보드 | 공공시설 예약서비스</p>
      </div>
    </div>
  );
}

export default Main;

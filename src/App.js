import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Search from './search.js'
import Home from './homepage.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
            <ul className="navbar__logo">
              <Link to="/Home">
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
            
            <ul className="navbar__menu">
              <li className="nav-item"><a className="nav-link" href="search.js">이용안내</a></li>
              <li className="nav-item"><a className="nav-link" href="#">고객센터</a></li>
              <li className="nav-item"><a className="nav-link" href="#">로그인</a></li>
              <li className="nav-item"><a className="nav-link" href="#">회원가입</a></li>
            </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>

      


    <br></br>
    <br></br>
      <div id="footer">
        <p> 서대문구 불타는키보드 | 공공시설 예약서비스</p>
      </div>
    </div>
  );
}

export default App;

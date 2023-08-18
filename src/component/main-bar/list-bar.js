import './list-bar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


function ListBar() {
  return (
    <ul className="navbar__menu">
      <li className="nav-item"><Link to="/InformationUse"><a>이용안내</a></Link></li>
      <li className="nav-item"><Link to="/"><a>고객센터</a></Link></li>
      <li className="nav-item"><Link to="/login"><a>로그인</a></Link></li>
      <li className="nav-item"><Link to="/signup"><a>회원가입</a></Link></li>
      <li className="nav-item"><Link to="/mypage"><a>마이페이지</a></Link></li>
    </ul>
   
  );
}

export default ListBar;

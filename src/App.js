import React from 'react';
// import './App.scss';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Locations from './pages/locaions';
import Main from './main';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './login.js';
import Signup from './signup.js';
import Search from './search.js';
import Home from './homepage';
<<<<<<< HEAD
import GymIconPage from './pages/IconPage/Gym.js';     // 변경된 부분
import SpaceIconPage from './pages/IconPage/Space.js'; // 변경된 부분
import CultureIconPage from './pages/IconPage/Culture.js'; // 변경된 부분
=======
import MyPage from './pages/MyPage/mypage';
>>>>>>> e23653a87af125d5c0de03eb44116fc48e8678a8

function App() {
  return (
    <div id='container'>
        <div>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/p/*" element={<Locations/>} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
<<<<<<< HEAD
            <Route path="/gym" element={<GymIconPage />} />     // 변경된 부분
            <Route path="/space" element={<SpaceIconPage />} /> // 변경된 부분
            <Route path="/culture" element={<CultureIconPage />} /> // 변경된 부분
=======
            <Route path='/mypage' element={<MyPage />} />
>>>>>>> e23653a87af125d5c0de03eb44116fc48e8678a8
          </Routes>
      </div>
    </div>
  );
}

export default App;


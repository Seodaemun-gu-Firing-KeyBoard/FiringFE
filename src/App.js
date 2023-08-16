import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Locations from './pages/locaions';
import Main from './main';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './login.js';
import Signup from './signup.js';
import Search from './search.js';
import Home from './homepage';

import GymIconPage from './pages/IconPage/Gym.js';     
import SpaceIconPage from './pages/IconPage/Space.js'; 
import CultureIconPage from './pages/IconPage/Culture.js'; 

import MyPage from './pages/MyPage/mypage';
import MyInfo from './pages/MyPage/MyInfo';
import MyReview from './pages/MyPage/myreview';



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
            <Route path="/gym" element={<GymIconPage />} />     
            <Route path="/space" element={<SpaceIconPage />} /> 
            <Route path="/culture" element={<CultureIconPage />} /> 
            <Route path='/mypage' element={<MyPage />} />
            <Route path="/myinfo" element={<MyInfo/>}/>
            <Route path="/myreview" element={<MyReview/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;


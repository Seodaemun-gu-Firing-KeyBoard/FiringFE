<<<<<<< HEAD
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Locations from "./pages/locaions";
import Main from "./main";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./login.js";
import Signup from "./signup.js";
import Search from "./search.js";
import Home from "./homepage";

import GymIconPage from "./pages/IconPage/Gym.js";
import SpaceIconPage from "./pages/IconPage/Space.js";
import CultureIconPage from "./pages/IconPage/Culture.js";

import MyPage from "./pages/MyPage/mypage";
import MyInfo from "./pages/MyPage/MyInfo";
import MyReview from "./pages/MyPage/myreview";
import FacilityDetail from "./component/facility/FacilityDetail";

function App() {
  return (
    <div id="container">
      <div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/p/*" element={<Locations />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gym" element={<GymIconPage />} />
          <Route path="/space" element={<SpaceIconPage />} />
          <Route path="/culture" element={<CultureIconPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/myinfo" element={<MyInfo />} />
          <Route path="/myreview" element={<MyReview />} />
          <Route path="/facility/:id" element={<FacilityDetail />} />
        </Routes>
=======
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

import GymIconPage from './pages/IconPage/Gym.js';    
import SpaceIconPage from './pages/IconPage/Space.js'; 
import CultureIconPage from './pages/IconPage/Culture.js'; 

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
          </Routes>
>>>>>>> f8f7e66 (채원 커밋)
      </div>
    </div>
  );
}

export default App;

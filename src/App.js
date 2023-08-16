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
import GymIconPage from './pages/IconPage/Gym.js';     // 변경된 부분
import SpaceIconPage from './pages/IconPage/Space.js'; // 변경된 부분
import CultureIconPage from './pages/IconPage/Culture.js'; // 변경된 부분

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
            <Route path="/gym" element={<GymIconPage />} />     // 변경된 부분
            <Route path="/space" element={<SpaceIconPage />} /> // 변경된 부분
            <Route path="/culture" element={<CultureIconPage />} /> // 변경된 부분
          </Routes>
      </div>
    </div>
  );
}

export default App;


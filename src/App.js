import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Locations from "./pages/locaions";
import Main from "./main";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./login.js";
<<<<<<< HEAD
import Signup from "./signup.js";
=======
import Signup from "./Signup.js";
import Search from "./search.js";
>>>>>>> 91fa467 (feat: 회원가입, 로그인)
import Home from "./homepage";

import GymIconPage from "./pages/IconPage/Gym.js";
import SpaceIconPage from "./pages/IconPage/Space.js";
import CultureIconPage from "./pages/IconPage/Culture.js";

import MyPage from "./pages/MyPage/mypage";
import MyInfo from "./pages/MyPage/MyInfo";
import MyReview from "./pages/MyPage/myreview";
import FacilityDetail from "./component/facility/FacilityDetail";
import SearchComponent from "./component/search/SearchComponent";
import InformationUse from "./pages/InformationUse/InformationUse.js";

function App() {
  return (
    <div id="container">
      <div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/p/*" element={<Locations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gym" element={<GymIconPage />} />
          <Route path="/space" element={<SpaceIconPage />} />
          <Route path="/culture" element={<CultureIconPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/myinfo" element={<MyInfo />} />
          <Route path="/myreview" element={<MyReview />} />
          <Route path="/facility/:id" element={<FacilityDetail />} />
          <Route path="/InformationUse" element={<InformationUse/>} />
          <Route path="/searchFacility" element={<SearchComponent />} />
          <Route path="/n=InformationUse" element={<InformationUse />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React , { useState} from 'react';
import  data  from "../../data.json";
import { useParams } from 'react-router-dom';
import TabContent from '../../component/tab/TabContent';
import {Nav} from 'react-bootstrap';
import styled from 'styled-components';
import AlwaysOpenExample from './accordion';
import OffcanvasExample from '../../component/bar/bar';
import './mypage.scss';
import {Link, Routes ,Route} from 'react-router-dom';
import MyInfo from './MyInfo';
import MyReview from './myreview';

const Container = styled.div`
//   height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
    height: 200vw ;
    padding: 1rem;
    margin: 0 auto;
`;
const MyDiv = styled.div`
    height: 100%;
    width: 100%;
    // border: 2px #808080 solid;
    border-radius: 30px;
    padding: 60px;
    padding-top : 30px;
`;
function MyPage() {
  const [reviews,setReviews] = useState([
    {
        title : "좋아요",
        text : "깨끗해여"
    },
    {
        title : "굿",
        text : "ㄱㄱ"
    }
  ]);
  return(
    <>  
        <div id='searchbar'>
            <OffcanvasExample />
        </div>
        <Container>
            <MyDiv>
              <div>
                <h1>[마이 페이지]</h1>
                <div>
                  <div class="b_container">
                    <Link to='/mypage/myinfo'>
                      <button class="btn-1">내 정보</button>
                    </Link>
                    
                    <Link to='/mypage/myreview'>
                      <button class="btn-2">내가 쓴 리뷰 보러가기</button>
                    </Link>
                  </div>
                </div>
              </div>
            </MyDiv>
        </Container>
      
      <Routes> 
        <Route path='/mypage/myinfo' element={<MyInfo/>} />
        <Route path='/mypage/myreview' element={<MyReview reviews={reviews}/>}/>
      </Routes>
    </>
  );
}

export default MyPage;
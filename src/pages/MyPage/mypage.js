import React , { useState} from 'react';
import  data  from "../../data.json";
import { useParams } from 'react-router-dom';
import TabContent from '../../component/tab/TabContent';
import {Nav} from 'react-bootstrap';
import styled from 'styled-components';
import AlwaysOpenExample from './accordion';
import OffcanvasExample from '../../component/bar/bar';
import './mypage.scss';

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
  // const params = useParams();
  // const location = data.locs[params.id - 1];
  const [ user, setUser ] = useState(
    {
        name:'chaewon',
        nickname:'cw02',
        email:'glgl246@naver.com',
    }
  );
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
  function reviewList(reviews) {
      return reviews.map((review,index) => {
        return (
              <li key={index}>
                  <div>{review.title}</div>
                  <div>{review.text}</div>
              </li>
        );
      });
  };
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
                    <button class="btn-1">내 정보</button>
                    <button class="btn-2">내가 쓴 리뷰 보러가기</button>
                  </div>
                </div>
              </div>
            </MyDiv>
        </Container>
      
    </>
  );
}

export default MyPage;
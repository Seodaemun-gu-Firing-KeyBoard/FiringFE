import React , { useState} from 'react';
import styled from 'styled-components';
import OffcanvasExample from '../../component/bar/bar';
import './mypage.scss';
import {Link} from 'react-router-dom';

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
                    <Link to='/myinfo'>
                        <button class="btn-1">내 정보</button>
                    </Link>
                    <Link to='/myreview'>
                        <button class="btn-2">내가 쓴 리뷰 보러가기</button>
                    </Link>
                  </div>
                </div>
              </div>
            </MyDiv>
        </Container>
      
    </>
  );
}

export default MyPage;
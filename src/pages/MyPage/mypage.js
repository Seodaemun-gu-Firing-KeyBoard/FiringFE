import React from "react";
import styled from "styled-components";
import OffcanvasExample from "../../component/bar/bar";
import "./mypage.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalBulb from "../../component/bulb/modalBulb";

const Container = styled.div`
  //   height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 200vw;
  padding: 1rem;
  margin: 0 auto;
`;
const MyDiv = styled.div`
  height: 100%;
  width: 100%;
  // border: 2px #808080 solid;
  border-radius: 30px;
  padding: 60px;
  padding-top: 30px;
`;
function MyPage() {
  const bname = "마이페이지";
  const ex =
    "마이 페이지 입니다.\n해당 페이지에서는 회원님의 회원 정보와 이전에 작성했던 후기 리스트를 확인하실 수 있습니다.";
  return (
    <>
      <div id="searchbar">
        <OffcanvasExample />
      </div>
      <ModalBulb bname={bname} ex={ex} />
      <Container>
        <MyDiv>
          <div>
            <h1>[마이 페이지]</h1>
            <div>
              <div class="b_container">
                <Link to="/myinfo">
                  <button class="btn-1">내 정보</button>
                </Link>
                <Link to="/myreview">
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
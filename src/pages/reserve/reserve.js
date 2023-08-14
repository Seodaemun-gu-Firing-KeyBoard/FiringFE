import React,{Component} from "react";
import styled from 'styled-components';
import './reserve.scss';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReserveDiv = styled.div`
    height: 100%;
    width: 100%;
    border: 2px #808080 solid;
    border-radius: 30px;
    padding: 60px;
`;

class Reserve extends Component{
    constructor(props){
        super(props);
        const locmethod = props.locmethod;          // parameter로 넘어온 val1
        this.state = { locmethod:locmethod };   // Component state에 저장
    }
    render(){
        return(
            <Container>
                <ReserveDiv>
                    <h1>[예약 방법]</h1>
                    <br/>
                    <p>1. 해당 페이지에서 예약하러 가기 버튼을 눌러주세요.</p>
                    <img className="methodimg" src="/images/method/1.jpg"/>
                    <p>2. 예약 날짜 또는 회자 선택 후 예약하기 버튼을 눌러주세요.</p>
                    <img className="methodimg" src="/images/method/2.jpg"/>
                    <p>3. 예약 날짜 확인 후 밑으로 스크롤 해줍니다.</p>
                    <img className="methodimg" src="/images/method/3.jpg"/>
                    <p>4. 빠른 정보 기입을 위해 "신청자 정보와 동일"을 체크해 줍니다.<br/></p>
                    <p>그리고 네모칸을 채워줍니다.</p>
                    <img className="methodimg" src="/images/method/4.jpg"/>
                    <p>5. 제일 아래로 스크롤을 내리고, "전체동의"를 체크해 줍니다.</p>
                    <img className="methodimg" src="/images/method/5.jpg"/>
                    <p>6. 예약하기 버튼을 눌러주고, 알림창 내용을 확인합니다.</p>
                    <img className="methodimg" src="/images/method/6.jpg"/>
                    <p>7. 카카오톡으로 알림톡이 오거나, 마이페이지를 통해 예약 확인이 가능합니다.</p>
                    <img className="methodimg" src="/images/method/7.jpg"/>
                    <img className="methodimg" src="/images/method/8.jpg"/>
                    <p>9. 예약 전에 이용안내를 꼭 확인해 보시길 바랍니다.</p>
                    <img className="methodimg" src="/images/method/9.jpg"/>
                    <p>※ 문자 예약은 개별 연락해 주세요. ※</p>
                </ReserveDiv>
            </Container>
        );
    }
};

export default Reserve;
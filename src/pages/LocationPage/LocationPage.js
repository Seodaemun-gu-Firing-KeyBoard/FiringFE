import React , { useState} from 'react';
import './LocationPage.scss';
import  data  from "../../data.json";
import WithHeaderExample from "../../component/card/card";
import { useParams } from 'react-router-dom';
import TabContent from '../../component/tab/TabContent';
import {Nav} from 'react-bootstrap';
import OffcanvasExample from '../../component/bar/bar';
import ModalBulb from '../../component/bulb/modalBulb';

function LocationPage() {
  const params = useParams();
  const location = data.locs[params.id - 1];
  let loc_id = '230817193452826177'; //임의로 지정. 원래는 장소data에 속해 있어야 함.
  let [clickedTab, setClickedTab] = useState(0);

  const bname = "예약 페이지";
  const ex = "예약 페이지 입니다.\n해당 페이지에서는 \"예약하러가기\" 버튼을 통해서 예약 링크로 이동 할 수 있습니다.\n"+
              "예약 링크에서는 \"예약방법\"을 참고하여 주시고, \"후기\"를 통해 해당 장소의 후기들을 조회,작성 할 수 있습니다.";
  return(
    <>
      <div id='searchbar'>
        <OffcanvasExample />
      </div>
      <ModalBulb bname={bname} ex={ex} />
      <div id='appdiv'>
        <div id='loc'>
          <div className='container-sm' id='first'>
            <img className="locimg" src={`${process.env.PUBLIC_URL}/images/${location.type}/${location.id}.jpg`} 
              alt={`${location.type}`}
            />
          </div>
          <div className='container-sm' id='second'>
            <WithHeaderExample loc_id={loc_id}/>
          </div>
        </div>
        <div id='buttons'>
          <Nav defaultActiveKey="0">
            <Nav.Item eventKey="0" onClick={()=>{setClickedTab(0)}}>
              <button id='tb'>예약 방법</button>
            </Nav.Item>
            <Nav.Item eventKey="1" onClick={()=>{setClickedTab(1)}}>
              <button id='tb'>후기</button>
            </Nav.Item>
          </Nav>
          <TabContent clickedTab={clickedTab} locmethod={location.method}/>
        </div>
        
      </div>
    </>
  );
}

export default LocationPage;
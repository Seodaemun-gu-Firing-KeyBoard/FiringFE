import Card from 'react-bootstrap/Card';
import './card.scss';
import { useParams } from 'react-router-dom';
import data from '../../data.json';
import Info from './info';

function WithHeaderExample({loc_id}) {
  const params = useParams();
  const location = data.locs[params.id - 1];

  return (
    <Card style={{height:100 +'%'}}>
      <Card.Body>
        <Card.Title>{location.name}</Card.Title>
        <Card.Text>
          <p>
            <Info info={location.info}/>
          </p>
        </Card.Text>
        <div id='btn' >
          <a href={`https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=${loc_id}&reSvc=Y`}>
            <button id='a'>예약하러 가기</button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderExample;
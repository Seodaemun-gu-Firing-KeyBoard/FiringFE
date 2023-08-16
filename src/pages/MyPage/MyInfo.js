import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Example from './MyModal';

function KitchenSinkExample() {
    const [ user, setUser ] = useState(
        {
            name:'chaewon',
            nickname:'cw02',
            email:'glgl246@naver.com',
        }
    );
  return (
    <Card style={{ width: '60%' }}>
      <Card.Img variant="top" src="/images/user/Rectangle.png" />
      <Card.Body>
        <Card.Title>{user.name}님의 회원 정보</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>이름 : {user.name} </ListGroup.Item>
        <ListGroup.Item>닉네임 : {user.nickname}</ListGroup.Item>
        <ListGroup.Item>이메일 : {user.email}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Example/>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;
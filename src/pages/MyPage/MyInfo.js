import { useState,useEffect } from 'react';
import OffcanvasExample from '../../component/bar/bar';
import './myinfo.scss';
import axios from 'axios';
// import MyCard from '../../component/mycard/mycard';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Example from '../../pages/MyPage/MyModal';

function MyInfo() {
  //user_id에 따라 다른 회원 정보 
  const user_id = 1;
  const [ user, setUser ] = useState([]);

  useEffect(() => {
        axios.get('http://localhost:3005/Users')
            .then(response => {
                setUser(response.data.user);
                console.log(user);
            });
  }, []);

  function userList(user) {
    return user.map((user,index) =>{   
          if (user.user_id === user_id)
              return (
                <Card style={{ width: '50%' }}>
                {/* <Card.Img variant="top" src="/images/user/Rectangle.png" /> */}
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
    });
  };
  return (
    <>
      <div id='searchbar'>
            <OffcanvasExample />
      </div>
      <div className='info_card'>
        {userList(user)}
      </div>
      
    </>
    
  );
}

export default MyInfo;
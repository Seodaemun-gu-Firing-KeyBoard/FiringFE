import { useState,useEffect } from 'react';
import OffcanvasExample from '../../component/bar/bar';
import './myinfo.scss';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import './MyModal.scss';
// import Example from '../../pages/MyPage/MyModal';

function MyInfo() {
  //user_id에 따라 다른 회원 정보 
  const user_id = 2;
  const [ user, setUser ] = useState([]);
  const [show, setShow] = useState(false);
  //modal 닉네임 수정 안됨.
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout_my = (e) => {
    const {name,value} = e.target;
    setUser({
      ...user,
      [name] : value
    });
  }
  useEffect(() => {
        axios.get('http://localhost:3005/Users')
            .then(response => {
                setUser(response.data.user);
                console.log(user);
            });
  }, []);

  function userList(user) {
    // if문으로 아이디 필터링
    return user.map((user,index) =>{   
          if (user.user_id === user_id)
              return (
                <Card style={{ width: '50%' }}>
                {/* <Card.Img variant="top" src="/images/user/Rectangle.png" /> */}
                <Card.Body>
                    <Card.Title>{user.name}님의 회원 정보</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>이름 : {user.name} </ListGroup.Item>
                    <ListGroup.Item>닉네임 : {user.nickname}</ListGroup.Item>
                    <ListGroup.Item>이메일 : {user.email}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button className='mybtn' variant="primary" onClick={handleShow}>
                    로그아웃 하기
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>로그아웃</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                      <Form>
                        <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                          {/* <Form.Label>로그아웃</Form.Label> */}
                          {/* <Form.Control
                            type="text"
                            name='logout'
                            // onChange={changeNickname}
                            placeholder="새로운 닉네임을 입력해 주세요."
                            // value={user.nickname}
                          /> */}
                          <div>
                            <h3>로그아웃 하시겠습니까?</h3>
                          </div>
                        </Form.Group>
                      
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        logout
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
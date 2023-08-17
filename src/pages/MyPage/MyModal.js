import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './MyModal.scss';

function Example(props) {
  const [show, setShow] = useState(false);
  // const [nickname, setNickname] = useState(props);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeNickname = (e) => {
    const value = e.target;
    
  };
//   const onChange = e =>{
//     const {value,name} = e.target;
//     setState({
//         ...state,
//         [name]: value
//     });
// };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        닉네임 수정하기
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>닉네임 수정하기</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form>
            <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
              <Form.Label>새로운 닉네임</Form.Label>
              <Form.Control
                type="text"
                onChange={changeNickname}
                placeholder="새로운 닉네임을 입력해 주세요."
                value={props.nickname}
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
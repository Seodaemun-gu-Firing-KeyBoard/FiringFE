import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.scss';

function ModalBulb({bname, ex}) {

  const [showmodal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <img src='/images/전구.png' variant="primary" onClick={handleShow} className='imgbulb'/>

      <Modal show={showmodal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {bname}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='moby'>
        <div className='text'>{ex}</div>
        {/* <div>{props.explanation.ex2}</div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBulb;
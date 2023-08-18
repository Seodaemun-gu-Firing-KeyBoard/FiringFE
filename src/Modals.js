import React from "react";
import "./Modals.css";

const SuccessModal = ({ onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <p>로그인에 성공했습니다.</p>
      <button onClick={onClose}>닫기</button>
    </div>
  </div>
);

const ErrorModal = ({ onClose, errorMessage }) => (
  <div className="modal">
    <div className="modal-content">
      <p>{errorMessage}</p>
      <button onClick={onClose}>닫기</button>
    </div>
  </div>
);

export { SuccessModal, ErrorModal };

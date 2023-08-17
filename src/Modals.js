import React from "react";
import "./Modals.css";

const SuccessModal = ({ onClose }) => (
  <div className="Modal">
    <div className="Modal-content">
      <p>로그인에 성공했습니다.</p>
      <button onClick={onClose}>닫기</button>
    </div>
  </div>
);

const ErrorModal = ({ onClose, errorMessage }) => (
  <div className="Modal">
    <div className="Modal-scontent">
      <p>{errorMessage}</p>
      <button onClick={onClose}>닫기</button>
    </div>
  </div>
);

export { SuccessModal, ErrorModal };

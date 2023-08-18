import React from "react";
import "./Modals.css";

const SuccessModal = ({ onClose }) => (
  <div className="Modal2">
    <div className="Modal-content2">
      <p>로그인에 성공했습니다.</p>
      <button onClick={onClose}>닫기</button>
    </div>
  </div>
);

const ErrorModal = ({ onClose, errorMessage }) => (
  <div className="Modal2">
    <div className="Modal-scontent2">
      <p>{errorMessage}</p>
      <button onClick={onClose}>닫기</button>
    </div>
  </div>
);

export { SuccessModal, ErrorModal };

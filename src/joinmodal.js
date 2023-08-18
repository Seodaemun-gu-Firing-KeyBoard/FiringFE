import React from "react";
import "./joinmodal.css"; // 모달 컴포넌트의 CSS 파일

const SuccessModal = ({ onClose }) => (
  <div className="modal1">
    <div className="modal-content1">
      <p>회원가입에 성공했습니다.</p>
      <button onClick={onClose}>닫기</button>
    </div>
  </div>
);

const ErrorModal = ({ onClose, errorMessage }) => (
  <div className="modal1">
    <div className="modal-content1">
      <p>{errorMessage}</p>
      <button onClick={onClose}>닫기</button>
    </div>
  </div>
);

export { SuccessModal, ErrorModal };

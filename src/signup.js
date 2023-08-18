import { Link, useNavigate } from "react-router-dom";
import "./signup.css"; // 회원가입 페이지의 CSS 파일
import axios from "axios";
import { useState } from "react";
import { SuccessModal, ErrorModal } from "./joinmodal"; // 모달 컴포넌트 경로

const SignUpPage = () => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const signUp = () => {
    if (isFormValid) {
      axios
        .post("http://127.0.0.1:8000/signup/", formData) // 회원가입 API 엔드포인트
        .then((response) => {
          console.log(response.data);
          setShowSuccessModal(true);
          setShowErrorModal(false);
        })
        .catch((error) => {
          console.error(error);
          setShowSuccessModal(false);
          setShowErrorModal(true);
          setErrorMessage("회원가입에 실패했습니다.");
        });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    const isEmailValid =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(formData.email);
    const isPasswordValid = formData.password && formData.password.length >= 8;
    // 추가 필드의 유효성 검사를 수행할 수 있습니다.

    setIsFormValid(isEmailValid && isPasswordValid);
  };

  return (
    <div className="SU-background">
      <div className="SU-container">
        <Link to={"/"} className="SU-container-logo">
          공공시설 예약서비스
        </Link>

        <form className="SU-container-form" onSubmit={signUp}>
          <div className="SU-container-form-input-text">이름</div>
          <input
            className="SU-container-form-input"
            placeholder=" 이름 입력"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
          />

          <div className="SU-container-form-input-text">닉네임</div>
          <input
            className="SU-container-form-input"
            placeholder=" 닉네임 입력"
            name="nickname"
            value={formData.nickname || ""}
            onChange={handleChange}
          />

          <div className="SU-container-form-input-text">이메일</div>
          <input
            className="SU-container-form-input"
            placeholder=" 이메일 주소 입력"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />

          <div className="SU-container-form-input-text">비밀번호</div>
          <input
            type="password"
            className="SU-container-form-input"
            placeholder=" 비밀번호 입력 (최소 8자)"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
          />

          <button
            type="submit"
            className={`SU-container-form-signUpButton ${
              !isFormValid
                ? "SU-container-form-signUpButton-unActive"
                : "SU-container-form-signUpButton-active"
            }`}
          >
            회원가입
          </button>
        </form>
      </div>

      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
      {showErrorModal && (
        <ErrorModal
          onClose={() => setShowErrorModal(false)}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default SignUpPage;

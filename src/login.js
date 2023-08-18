import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { SuccessModal, ErrorModal } from "./Modals"; // 모달 컴포넌트 경로

const LogInPage = () => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  //   const ifInput =  (e) => {
  //     e.target;
  //   };

  const login = () => {
    /*props.login();*/
    if (isFormValid) {
      navigator("/");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
    const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(
      formData.username
    );
    setIsFormValid(isEmailValid);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `http://127.0.0.1:8000/login/`,
        // name: "asdf",
        // teamname: "asdf",
        // call: "asdfasdf",
        // detail: "asdf",
        // plan_capacity: "3",
        // dev_capacity: "12",

        // design_capacity: "1",
        formData
      )
      .then((response) => {
        // 요청 성공 시 수행할 작업
        /*props.getUserId(response.data.user.id);*/
        console.log(response.data); // 서버 응답 데이터 출력
        setShowSuccessModal(true);
        setShowErrorModal(false);
      })
      .catch((error) => {
        // 요청 실패 시 수행할 작업
        console.error(error);
        setShowSuccessModal(false);
        setShowErrorModal(true);
        setErrorMessage("로그인에 실패했습니다.");
      });

    // 여기서 폼 데이터를 백엔드로 전송합니다 (Axios 또는 다른 네트워크 요청 라이브러리 사용).
    console.log("폼 데이터:", formData);

    // 제출 후에 필요하다면 폼을 초기화합니다.
  };

  return (
    <div className="LP-background">
      <div className="LP-container">
        <Link to={"/"} className="LP-container-logo">
          공공시설 예약서비스
        </Link>

        <form className="LP-container-form" onSubmit={handleSubmit}>
          <div className="LP-container-form-input-text1">이메일</div>
          <input
            className="LP-container-form-inputID"
            placeholder=" 이메일 주소 입력"
            name="username"
            value={formData.username}
            onChange={handleChange}
          ></input>
          <div className="LP-container-form-input-text2">비밀번호</div>
          <input
            className="LP-container-form-inputPW"
            placeholder=" 비밀번호를 입력 "
            name="password"
            value={formData.password}
            onChange={handleChange}
          ></input>
          <button
            // to={"/"}
            type="submit"
            className={`LP-container-form-logInButton ${
              !isFormValid
                ? "LP-container-form-logInButton-unActive "
                : "LP-container-form-logInButton-active"
            }`}
            onClick={login}
          >
            <div
              className={`LP-container-form-logInButton-text ${
                !isFormValid
                  ? "LP-container-form-logInButton-text-unActive"
                  : "LP-container-form-logInButton-text-active"
              }`}
            >
              로그인
            </div>
          </button>
        </form>
        <div className="LP-container-footer">
          <div className="LP-container-footer-text1">
            아직 회원이 아니신가요?
          </div>
          <Link to={"/signup"} className="LP-container-footer-text2">
            회원가입
          </Link>
        </div>
      </div>

      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
      {showErrorModal && (
        <ErrorModal onClose={() => setShowErrorModal(false)} errorMessage={errorMessage} />
      )}

    </div>

  );
};
export default LogInPage;
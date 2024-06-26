// import "./Signup.css";
import { NavLink } from "react-router-dom";

function Signup({ username, password, passwordCheck, onChange }) {
  return (
    <div className="Signup m-auto ml-0 flex">
      <div className="signup-wrapper m-auto flex flex-col">
        <input
          type="text"
          id="username"
          value={username}
          onChange={onChange}
          placeholder="사용자명"
        />
        <input
          type="text"
          id="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호"
        />
        <input
          type="text"
          id="passwordCheck"
          value={passwordCheck}
          onChange={onChange}
          placeholder="비밀번호 확인"
        />
        <button>회원가입</button>
        <div className="to-login">
          <NavLink to="/">로그인 페이지로 돌아가기</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Signup;

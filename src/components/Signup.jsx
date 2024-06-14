import "./Signup.css"
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="Signup">
      <div className="signup-wrapper">
        <div className="img"></div>
        <h1>회원가입</h1>
        <input type="text" placeholder="사용자명" />
        <input type="text" placeholder="비밀번호" />
        <input type="text" placeholder="비밀번호 확인" />
        <button>회원가입</button>
        <div className="to-login">
          <NavLink to="/">로그인 페이지로 돌아가기</NavLink>
        </div>

      </div>
    </div>
  )
}

export default Signup;
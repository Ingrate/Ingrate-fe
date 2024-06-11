import "./Login.css"
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <div className="login-wrapper">
        <div className="img"></div>
        <div className="title">
          <h1>인그레이트!</h1>
          <h3>당신의 장보기 파트너</h3>
        </div>
        <input type="text" placeholder="사용자명" />
        <input type="text" placeholder="비밀번호" />
        <button>로그인</button>
        <div className="keep-signed">
          <input type="checkbox" />
          <div>자동 로그인</div>
        </div>
        <div className="to-signup">
          <NavLink to="/signup">아직 계정이 없으신가요?</NavLink>
        </div>

      </div>
    </div>
  )
}

export default Login;
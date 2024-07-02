// import "./Signup.css";
import { NavLink, useNavigate } from "react-router-dom";

function Signup({ username, password, passwordCheck, onChange }) {
  const nav = useNavigate();

  return (
    <div className="Signup mr-40 flex">
      <div className="signup-wrapper m-auto flex w-400 flex-col gap-2.5">
        <div className="pl-2 text-xl font-bold">사용자 이름</div>
        <input
          className="mb-5 h-14 rounded-3xl border-2 border-gray-200 pl-5 pr-5 text-lg"
          type="text"
          id="username"
          value={username}
          onChange={onChange}
        />
        <div className="pl-2 text-xl font-bold">비밀번호</div>
        <input
          className="mb-5 h-14 rounded-3xl border-2 border-gray-200 pl-5 pr-5 text-lg"
          type="password"
          id="password"
          value={password}
          onChange={onChange}
        />
        <div className="pl-2 text-xl font-bold">비밀번호 확인</div>
        <input
          className="mb-5 h-14 rounded-3xl border-2 border-gray-200 pl-5 pr-5 text-lg"
          type="password"
          id="passwordCheck"
          value={passwordCheck}
          onChange={onChange}
        />
        <button
          className="mt-6 h-14 rounded-3xl border-2 border-amber-400 bg-amber-300 text-center text-xl font-bold"
          onClick={() => {
            nav("/");
          }}
        >
          회원가입
        </button>
        <div className="to-login pl-2">
          <NavLink to="/">로그인 페이지로 돌아가기</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Signup;

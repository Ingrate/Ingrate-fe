import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserHeader from "../components/UserHeader";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Change_pw_page({ login }) {
  const nav = useNavigate();
  const [username, setUsername] = useState(login.username);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  const onChangePwChk = (e) => {
    setPasswordCheck(e.target.value);
  };

  const onClickChange = () => {
    axios
      .put("/member", { oldPassword: login.password, password, passwordCheck })
      .then((response) => {
        // 요청이 성공한 경우
        if (response.status === 200) {
          console.log("PUT request successful with status 200");
          nav("/user");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    setUsername(login.username);
  }, [login.username]);

  return (
    <>
      <Navbar user={username}></Navbar>
      <UserHeader user={username}></UserHeader>
      <div className="m-auto mt-6 flex w-11/12 flex-col gap-20">
        <h3 className="text-5xl">비밀번호 변경</h3>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="ml-2 text-xl font-bold">새로운 비밀번호</div>
            <input
              type="password"
              value={password}
              onChange={onChangePw}
              className="h-12 w-80 rounded-3xl border-2 pl-5 pr-5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="ml-2 text-xl font-bold">새로운 비밀번호 확인</div>
            <input
              type="password"
              value={passwordCheck}
              onChange={onChangePwChk}
              className="h-12 w-80 rounded-3xl border-2 pl-5 pr-5"
            />
          </div>
        </div>
      </div>
      <div className="button-section absolute bottom-6 left-1/2 m-auto flex w-11/12 -translate-x-1/2 -translate-y-1/2 justify-start gap-6">
        <Button
          text={"뒤로가기"}
          onClick={() => {
            nav(-1);
          }}
        ></Button>
        <Button
          text={"변경하기"}
          onClick={() => {
            nav("/user");
          }}
        ></Button>
      </div>
    </>
  );
}

export default Change_pw_page;

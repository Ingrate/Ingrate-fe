import Navbar from "../components/Navbar";
import UserHeader from "../components/UserHeader";
import Button from "../components/Button";
import { useEffect, useState } from "react";

function User_page({ username }) {
  const [user, setUser] = useState(username);

  useEffect(() => {
    setUser(username);
  }, [username]);

  return (
    <>
      <Navbar user={user}></Navbar>
      <UserHeader user={user}></UserHeader>
      <div className="info-section m-auto flex w-11/12 p-8 pt-16">
        <div className="left-section flex flex-1 flex-col gap-10 text-3xl">
          <div className="flex gap-20">
            <div>작성글</div>
            <div>N</div>
          </div>
          <div className="flex gap-20">
            <div>포인트</div>
            <div>N</div>
          </div>
        </div>
        <div className="right-section m-auto flex flex-1 flex-col gap-3">
          <div className="pl-1 text-2xl">당신의 등급은</div>
          <div className="text-7xl font-bold">마트 대마왕</div>
        </div>
      </div>
      <div className="button-section absolute bottom-6 left-1/2 m-auto flex w-11/12 -translate-x-1/2 -translate-y-1/2 justify-between p-3 pb-0">
        <Button text={"뒤로가기"}></Button>
        <div className="flex gap-6">
          <Button text={"비밀번호 변경"}></Button>
          <Button text={"회원 탈퇴"}></Button>
        </div>
      </div>
    </>
  );
}

export default User_page;

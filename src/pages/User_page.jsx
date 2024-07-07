import Navbar from "../components/Navbar";
import UserHeader from "../components/UserHeader";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/url";

function User_page({ username }) {
  const nav = useNavigate();
  const [name, setName] = useState(username);
  const [user, setUser] = useState({
    username: "",
    posts: "",
    rank: "",
    point: "",
  });

  useEffect(() => {
    setName(username);
  }, [username]);

  useEffect(() => {
    axiosInstance
      .get(`/member`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navbar user={name}></Navbar>
      <UserHeader user={name}></UserHeader>
      <div className="info-section m-auto flex w-11/12 p-8 pt-16">
        <div className="left-section flex flex-1 flex-col gap-10 text-3xl">
          <div className="flex gap-20">
            <div>작성글</div>
            <div>{user.posts}</div>
          </div>
          <div className="flex gap-20">
            <div>포인트</div>
            <div>{user.point}</div>
          </div>
        </div>
        <div className="right-section m-auto flex flex-1 flex-col gap-3">
          <div className="pl-1 text-2xl">당신의 등급은</div>
          <div className="text-7xl font-bold">{user.rank}</div>
        </div>
      </div>
      <div className="button-section absolute bottom-6 left-1/2 m-auto flex w-11/12 -translate-x-1/2 -translate-y-1/2 justify-between">
        <Button
          text={"뒤로가기"}
          onClick={() => {
            nav(-1);
          }}
        ></Button>
        <div className="flex gap-6">
          <Button
            text={"비밀번호 변경"}
            onClick={() => {
              nav("/confirm");
            }}
          ></Button>
          <Button
            text={"회원 탈퇴"}
            onClick={() => {
              nav("/cancel");
            }}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default User_page;

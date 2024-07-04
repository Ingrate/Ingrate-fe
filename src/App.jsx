import "./App.css";
import Login_page from "./pages/Login_page";
import Signup_page from "./pages/Signup_page";
import Main_page from "./pages/Main_page";
import User_page from "./pages/User_page";
import Rate_page from "./pages/Rate_page";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Save_page from "./pages/Save_page";
import Myingredients_page from "./pages/Myingredients_page";
import Confirm_page from "./pages/Confirm_page";
import Cancel_page from "./pages/Cancel_page";
import Change_pw_page from "./pages/Change_pw_page";
import axios from "axios";

function App() {
  const ingredsRef = useRef(3);
  const [ingreds, setIngreds] = useState([]);
  const [ingred, setIngred] = useState({
    name: "",
    amount: "",
    unit: "",
    cost: "",
    memo: "",
  });
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    passwordCheck: "",
  });
  const [login, setLogin] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const nav = useNavigate();

  // 사용자 입력 식재료 배열 get
  useEffect(() => {
    axios
      .get("/ingredient")
      .then((response) => {
        setIngreds(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // 새로운 식재료 정보 post
  const postIngredient = () => {
    axios
      .post("/ingredient", ingred)
      .then((response) => {
        // 요청이 성공한 경우
        if (response.status === 200) {
          console.log("POST request successful with status 200");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // 내 식재료로 등록하는 함수
  const onRegister = () => {
    postIngredient();
    setIngreds([{ id: ingredsRef.current++, ...ingred }, ...ingreds]);
    setIngred({
      name: "",
      amount: "",
      unit: "",
      cost: "",
      memo: "",
    });
    nav("/main");
  };

  // 내 식재료 페이지에서 내용을 수정하는 함수
  const onUpdate = (changed) => {
    setIngreds(
      ingreds.map((item) =>
        String(item.id) === String(changed.id) ? changed : item,
      ),
    );
  };

  // 사용자의 식재료 정보 입력을 반영하는 함수
  const onChangeIngred = (e) => {
    setIngred({ ...ingred, [e.target.id]: e.target.value });
    console.log(ingred);
  };

  const initIngred = () => {
    setIngred({
      name: "",
      amount: "",
      unit: "",
      cost: "",
      memo: "",
    });
  };

  // 내 식재료 페이지에서 식재료 정보를 삭제하는 함수
  const onDelete = (del) => {
    setIngreds(ingreds.filter((item) => String(item.id) !== String(del.id)));
  };

  const onChangeSignup = (e) => {
    setSignup({ ...signup, [e.target.id]: e.target.value });
  };

  const onChangeLogin = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
    console.log(login);
  };

  const postAuthLogin = () => {
    axios
      .post("/auth/login", login)
      .then((response) => {
        if (response.status === 200) {
          console.log("POST request successful with status 200");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const onChangeRememberMe = (e) => {
    setLogin({ ...login, rememberMe: e.target.checked });
    console.log(login);
  };

  // TODO: navbar에 username 표시 횡단 관심사 분리 필요
  // TODO: navbar를 outlet 사용해서 분리 필요
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login_page
              {...login}
              onChange={onChangeLogin}
              onClick={onChangeRememberMe}
              postAuthLogin={postAuthLogin}
            />
          }
        ></Route>
        <Route
          path="/signup"
          element={<Signup_page {...signup} onChange={onChangeSignup} />}
        ></Route>
        <Route
          path="/main"
          element={
            <Main_page
              onChange={onChangeIngred}
              onRegister={onRegister}
              username={login.username}
            />
          }
        ></Route>
        <Route
          path="/user"
          element={<User_page username={login.username} />}
        ></Route>
        <Route path="/confirm" element={<Confirm_page login={login} />}></Route>
        <Route
          path="/change-password"
          element={<Change_pw_page login={login} />}
        ></Route>
        <Route
          path="/cancel"
          element={<Cancel_page username={login.username} />}
        ></Route>
        <Route
          path="/rate"
          element={
            <Rate_page
              ingred={ingred}
              initIngred={initIngred}
              username={login.username}
            />
          }
        ></Route>
        <Route
          path="/save"
          element={
            <Save_page
              ingred={ingred}
              onChange={onChangeIngred}
              onRegister={onRegister}
              username={login.username}
            />
          }
        ></Route>
        <Route
          path="/myIngredients"
          element={
            <Myingredients_page
              ingreds={ingreds}
              onUpdate={onUpdate}
              onChange={onChangeIngred}
              onDelete={onDelete}
              username={login.username}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import Login_page from "./pages/Login_page";
import Signup_page from "./pages/Signup_page";
import Main_page from "./pages/Main_page";
import User_page from "./pages/User_page";
import Rate_page from "./pages/Rate_page";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import Save_page from "./pages/Save_page";
import Myingredients_page from "./pages/Myingredients_page";
import Navbar from "./components/Navbar";

const mokeIngreds = [
  {
    id: 2,
    name: "파",
    amount: 1,
    unit: "단",
    cost: "2100",
    memo: "집 앞 마트",
  },
  {
    id: 1,
    name: "양파",
    amount: 400,
    unit: "g",
    cost: "5600",
    memo: "집 앞 마트",
  },
  {
    id: 0,
    name: "파프리카",
    amount: 300,
    unit: "g",
    cost: "3000",
    memo: "GS 더프레시",
  },
];

function App() {
  const ingredsRef = useRef(3);
  const [ingreds, setIngreds] = useState(mokeIngreds);
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

  // 내 식재료로 등록하는 함수
  const onRegister = () => {
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
        <Route path="/user" element={<User_page />}></Route>
        <Route
          path="/rate"
          element={<Rate_page ingred={ingred} username={login.username} />}
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

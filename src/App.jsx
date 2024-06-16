import "./App.css";
import Login_page from "./pages/Login_page";
import Signup_page from "./pages/Signup_page";
import Main_page from "./pages/Main_page";
import User_page from "./pages/User_page";
import Rate_page from "./pages/Rate_page";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Save_page from "./pages/Save_page";

function App() {
  const [ingred, setIngred] = useState({
    id: "0",
    name: "",
    amount: "",
    unit: "",
    cost: "",
    memo: "",
  });

  const onChange = (e) => {
    setIngred({ ...ingred, [e.target.id]: e.target.value });
  };

  return (
    <Routes>
      <Route path="/" element={<Login_page />}></Route>
      <Route path="/signup" element={<Signup_page />}></Route>
      <Route path="/main" element={<Main_page onChange={onChange} />}></Route>
      <Route path="/user" element={<User_page />}></Route>
      <Route path="/rate" element={<Rate_page ingred={ingred} />}></Route>
      <Route path="/save" element={<Save_page ingred={ingred} />}></Route>
    </Routes>
  );
}

export default App;

import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/url";
// import "./Navbar.css";

function Navbar({ user }) {
  const nav = useNavigate();
  const onClickLogout = () => {
    axiosInstance
      .post(`/auth/logout`)
      .then((response) => {
        if (response.status === 200) {
          console.log("POST request successful with status 200");
          nav("/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="Navbar">
      <div className="bar-wrapper flex h-8 justify-end gap-10 p-6 pr-10 text-lg">
        <NavLink
          to="/user"
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
        >
          {user}
        </NavLink>
        <NavLink
          to="/myIngredients"
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
        >
          내 식재료
        </NavLink>
        <NavLink
          onClick={onClickLogout}
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
        >
          로그아웃
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

import { NavLink } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="bar-wrapper flex h-8 justify-end gap-10 p-6 pr-10 text-lg">
        <NavLink
          to="/user"
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
        >
          사용자명
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
        >
          내 식재료
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
        >
          로그아웃
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

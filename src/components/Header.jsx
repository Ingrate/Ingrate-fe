// import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  return (
    <div className="Header">
      <h1
        className="text-header mb-3 mt-20 cursor-pointer p-8 text-center font-bold"
        onClick={() => {
          nav("/main");
        }}
      >
        Ingrate
      </h1>
    </div>
  );
}

export default Header;

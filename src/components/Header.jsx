// import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  return (
    <div className="Header flex">
      <h1
        className="text-header m-auto mb-12 mt-28 cursor-pointer text-center font-bold"
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

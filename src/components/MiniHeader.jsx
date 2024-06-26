import { useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  return (
    <div className="Header flex">
      <h1
        className="mt-18 ml-3 cursor-pointer text-center text-8xl font-bold"
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

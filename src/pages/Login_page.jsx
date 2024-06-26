import Slogan from "../components/Slogan";
import Login from "../components/Login";

function Login_page({ login, onChange, onClick }) {
  return (
    <div className="m-auto mt-20 flex w-3/4 flex-col">
      <Slogan></Slogan>
      <div className="flex flex-wrap justify-between gap-20 align-middle">
        <div className="m-0 aspect-square w-600 bg-black text-white">로고</div>
        <Login {...login} onChange={onChange} onClick={onClick}></Login>
      </div>
    </div>
  );
}

export default Login_page;

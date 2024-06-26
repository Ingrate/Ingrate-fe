import Signup from "../components/Signup";
import Slogan from "../components/Slogan";

function Signup_page({ signup, onChange }) {
  return (
    <div className="m-auto mt-20 flex w-3/4 flex-col">
      <Slogan></Slogan>
      <div className="flex flex-wrap justify-between gap-20 align-middle">
        <div className="m-0 aspect-square w-600 bg-black text-white">로고</div>
        <Signup {...signup} onChange={onChange}></Signup>
      </div>
    </div>
  );
}

export default Signup_page;

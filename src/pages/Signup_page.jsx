import Signup from "../components/Signup";
import Logo from "../components/Logo";

function Signup_page({ signup, onChange }) {
  return (
    <div className="flex h-screen w-screen flex-wrap justify-center gap-32 align-middle">
      <Logo></Logo>
      <Signup {...signup} onChange={onChange}></Signup>
    </div>
  );
}

export default Signup_page;

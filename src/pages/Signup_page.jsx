import Signup from "../components/Signup";

function Signup_page({ signup, onChange }) {
  return (
    <>
      <div className="img"></div>
      <h1>회원가입</h1>
      <Signup {...signup} onChange={onChange}></Signup>
    </>
  );
}

export default Signup_page;

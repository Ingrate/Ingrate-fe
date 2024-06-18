import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Save from "../components/Save";

function Save_page({ ingred, onChange, onRegister }) {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Save {...ingred} onChange={onChange} onRegister={onRegister}></Save>
    </>
  );
}

export default Save_page;

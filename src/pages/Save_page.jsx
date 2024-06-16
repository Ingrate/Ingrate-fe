import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Save from "../components/Save";

function Save_page({ ingred, onChange }) {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Save {...ingred} onChange={onChange}></Save>
    </>
  );
}

export default Save_page;

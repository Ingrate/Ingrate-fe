import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Save from "../components/Save";

function Save_page({ ingred }) {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Save {...ingred}></Save>
    </>
  );
}

export default Save_page;

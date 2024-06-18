import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Header from "../components/Header";

function Main_page({ onChange }) {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Search onChange={onChange}></Search>
    </div>
  );
}

export default Main_page;

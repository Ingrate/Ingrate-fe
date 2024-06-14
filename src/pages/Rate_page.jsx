import Navbar from "../components/Navbar";
import Rate from "../components/Rate";

function Rate_page({ ingred }) {
  return (
    <>
      <Navbar></Navbar>
      <Rate ingred={ingred}></Rate>
    </>
  )
}

export default Rate_page;
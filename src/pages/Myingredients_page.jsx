import Navbar from "../components/Navbar";
import MiniHeader from "../components/MiniHeader";
import MyIngred from "../components/MyIngred";
import Divider from "../components/Divider";

function Myingredients_page({ ingreds, onUpdate }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="m-auto flex w-11/12">
        <MiniHeader></MiniHeader>
      </div>
      <div className="m-auto mb-5 grid w-11/12 grid-cols-3 pl-16 pr-16 text-4xl font-bold">
        <div>품목</div>
        <div>양</div>
        <div>가격</div>
      </div>
      <Divider></Divider>
      <MyIngred ingreds={ingreds} onUpdate={onUpdate}></MyIngred>
    </>
  );
}

export default Myingredients_page;

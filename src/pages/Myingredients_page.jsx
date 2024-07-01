import Navbar from "../components/Navbar";
import MiniHeader from "../components/MiniHeader";
import MyIngred from "../components/MyIngred";
import Divider from "../components/Divider";
import { useEffect, useState } from "react";

function Myingredients_page({ ingreds, onUpdate, onDelete, username }) {
  const [user, setUser] = useState(username);

  useEffect(() => {
    setUser(username);
  }, [username]);

  return (
    <>
      <Navbar user={user}></Navbar>
      <div className="m-auto mb-36 flex w-11/12">
        <MiniHeader></MiniHeader>
      </div>
      <div className="m-auto mb-5 grid w-5/6 grid-cols-3 pl-16 pr-16 text-4xl font-bold">
        <div>품목</div>
        <div>양</div>
        <div>가격</div>
      </div>
      <div className="m-auto flex w-5/6">
        <Divider></Divider>
      </div>
      <MyIngred
        ingreds={ingreds}
        onUpdate={onUpdate}
        onDelete={onDelete}
      ></MyIngred>
    </>
  );
}

export default Myingredients_page;

import { useState } from "react";
import Modal from "./Modal";

function MyList({ id, name, amount, unit, cost }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className={`${clicked ? "" : "hidden"}`}>
        <Modal></Modal>
      </div>
      <div
        className={`m-auto mt-5 grid w-11/12 grid-cols-3 rounded-4xl border-2 p-5 pl-10 pr-0 text-2xl ${clicked ? "border-amber-400 bg-amber-300" : "bg-transparent"}`}
        onClick={() => {
          setClicked(true);
        }}
      >
        <div>{name}</div>
        <div>
          {amount}
          {unit}
        </div>
        <div>{cost}원</div>
      </div>
    </div>
  );
}

export default MyList;

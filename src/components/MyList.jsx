import { useState } from "react";
import Detail from "./Detail";

function MyList({ id, ingred, onUpdate, onDelete }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className={`${clicked ? "" : "hidden"}`}>
        <Detail
          setClicked={setClicked}
          ingred={ingred}
          onUpdate={onUpdate}
          onDelete={onDelete}
        ></Detail>
      </div>
      <div
        className={`m-auto mt-8 grid w-5/6 grid-cols-3 rounded-4xl border-2 p-5 pl-16 pr-16 text-4xl ${clicked ? "border-amber-400 bg-amber-300" : "bg-transparent"}`}
        onClick={() => {
          setClicked(true);
        }}
      >
        <div>{ingred.name}</div>
        <div>
          {ingred.amount}
          {ingred.unit}
        </div>
        <div>{ingred.cost}원</div>
      </div>
    </div>
  );
}

export default MyList;

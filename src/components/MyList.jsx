import { useState } from "react";
import Detail from "./Detail";

function MyList({ id, name, amount, unit, cost, memo }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className={`${clicked ? "" : "hidden"}`}>
        <Detail
          setClicked={setClicked}
          id={id}
          name={name}
          amount={amount}
          unit={unit}
          cost={cost}
          memo={memo}
        ></Detail>
      </div>
      <div
        className={`m-auto mt-8 grid w-11/12 grid-cols-3 rounded-4xl border-2 p-5 pl-16 pr-16 text-4xl ${clicked ? "border-amber-400 bg-amber-300" : "bg-transparent"}`}
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

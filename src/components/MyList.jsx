import { useState } from "react";

function MyList({ id, name, amount, unit, cost }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className={`flex justify-center ${clicked ? "" : "hidden"}`}>
        <div className="rounded-4xl absolute z-10 mt-5 h-96 w-11/12 bg-white"></div>
        <div
          className={`absolute left-0 top-0 h-screen w-screen bg-black opacity-30`}
        ></div>
      </div>
      <div
        className={`rounded-4xl m-auto mt-5 grid w-11/12 grid-cols-3 border-2 p-5 pl-10 pr-0 text-2xl ${clicked ? "border-amber-400 bg-amber-300" : "bg-transparent"}`}
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

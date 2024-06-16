import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function Save({ name, amount, unit, cost, onChange }) {
  const nav = useNavigate();
  const [memo, setMemo] = useState("");

  const onChangeMemo = (e) => {
    setMemo(e.target.value);
    onChange({ target: { id: "memo", value: e.target.value } });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-600 rounded-4xl m-auto flex justify-evenly bg-amber-300 p-4 align-middle text-2xl">
        <div>{name}</div>
        <div>
          {amount} {unit}
        </div>
        <div>{cost} 원</div>
      </div>
      <input
        onChange={onChangeMemo}
        type="text"
        placeholder="메모"
        className="w-600 rounded-4xl m-auto h-52 bg-amber-300 p-8 pl-10 pr-10 text-center align-middle text-2xl"
      ></input>
      <div className="flex justify-center">
        <Button
          text="저장"
          onClick={() => {
            nav("/main");
          }}
        ></Button>
      </div>
    </div>
  );
}

export default Save;

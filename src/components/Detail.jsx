import { useState } from "react";
import Button from "./Button";

function Detail({ setClicked, ingred, onUpdate, onDelete }) {
  const [editor, setEditor] = useState(false);
  const [changedIngred, setChangedIngred] = useState(ingred);

  const onChange = (e) => {
    setChangedIngred({ ...ingred, [e.target.id]: e.target.value });
  };

  const onClickDone = () => {
    onUpdate(changedIngred);
    setEditor(false);
    setClicked(false);
  };

  const onClickClose = () => {
    setEditor(false);
    setClicked(false);
  };

  const onClickEdit = () => {
    setEditor(true);
  };

  const onClickDelete = () => {
    onDelete(ingred);
    setClicked(false);
  };

  return (
    <div className="flex justify-center">
      <div
        className={`absolute left-0 top-0 flex h-screen w-screen bg-black bg-opacity-10 align-middle`}
      >
        <div
          className={`${editor ? "" : "hidden"} relative z-10 m-auto mt-81 h-96 w-5/6 rounded-5xl border-2 border-gray-300 bg-white`}
        >
          <div className="info-section m-auto mt-5 grid grid-cols-3 p-4 pl-16 pr-16 text-4xl font-bold">
            <input
              className="w-full"
              id="name"
              type="text"
              value={changedIngred.name}
              onChange={onChange}
            />
            <div className="flex w-full">
              <input
                className="w-full"
                id="amount"
                type="text"
                value={changedIngred.amount}
                onChange={onChange}
              />
              <select
                className="w-full"
                name="unit"
                id="unit"
                value={changedIngred.unit}
                onChange={onChange}
              >
                <option value="dan">단</option>
                <option value="gae">개</option>
                <option value="g">g</option>
              </select>
            </div>
            <input
              className="w-full"
              id="cost"
              type="text"
              value={changedIngred.cost}
              onChange={onChange}
            />
          </div>
          <input
            onChange={onChange}
            className="m-14 ml-16 mr-16 text-3xl font-bold"
            id="memo"
            type="text"
            value={changedIngred.memo}
          />
          <div className="button-section absolute bottom-0 right-4 m-9 flex justify-end gap-9">
            <Button text={"수정 완료"} onClick={onClickDone}></Button>
            <Button text={"취소"} onClick={onClickClose}></Button>
          </div>
        </div>
        <div
          className={`${editor ? "hidden" : ""} relative z-10 m-auto mt-81 h-96 w-5/6 rounded-5xl border-2 border-gray-300 bg-white`}
        >
          <div className="info-section m-auto mt-5 grid grid-cols-3 p-4 pl-16 pr-16 text-4xl font-bold">
            <div>{ingred.name}</div>
            <div>
              {ingred.amount}
              {ingred.unit}
            </div>
            <div>{ingred.cost}원</div>
          </div>
          <div className="m-14 ml-16 mr-16 text-3xl font-bold">
            {ingred.memo}
          </div>
          <div className="button-section absolute bottom-0 right-4 m-9 flex justify-end gap-9">
            <Button text={"닫기"} onClick={onClickClose}></Button>
            <Button text={"수정"} onClick={onClickEdit}></Button>
            <Button text={"삭제"} onClick={onClickDelete}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

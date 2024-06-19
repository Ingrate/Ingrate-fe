import Button from "./Button";

function Detail({ setClicked, id, name, amount, unit, cost, memo }) {
  const onClickClose = () => {
    setClicked(false);
  };

  const onClickEdit = () => {};

  const onClickDelete = () => {};

  return (
    <div className="flex justify-center">
      <div
        className={`absolute left-0 top-0 flex h-screen w-screen bg-black bg-opacity-10 align-middle`}
      >
        <div className="mt-81 rounded-5xl relative z-10 m-auto h-96 w-11/12 border-2 border-gray-300 bg-white">
          <div className="info-section m-auto mt-5 grid grid-cols-3 p-4 pl-16 pr-16 text-4xl font-bold">
            <div>{name}</div>
            <div>
              {amount}
              {unit}
            </div>
            <div>{cost}원</div>
          </div>
          <div className="m-14 ml-16 mr-16 text-3xl font-bold">{memo}</div>
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

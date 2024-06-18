function MyList({ id, name, amount, unit, cost }) {
  console.log(name);
  console.log(amount);
  return (
    <div className="MyList rounded-4xl m-auto mt-5 grid w-11/12 grid-cols-3 border-2 p-5 pl-10 pr-0 text-2xl">
      <div>{name}</div>
      <div>
        {amount}
        {unit}
      </div>
      <div>{cost}원</div>
    </div>
  );
}

export default MyList;

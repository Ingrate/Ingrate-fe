function MyList({ id, name, amount, unit, cost }) {
  console.log(name);
  console.log(amount);
  return (
    <div className="MyList">
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

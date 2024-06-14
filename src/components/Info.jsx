function Info({ name, amount, unit, cost }) {
  return (
    <div className="Info">
      <div>내가 입력한 정보</div>
      <div>{name}</div>
      <div>
        <div>{amount}</div>
        <div>{unit}</div>
      </div>
      <div>{cost}</div>
    </div>
  )
}

export default Info;
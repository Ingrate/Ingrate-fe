import "./List.css";

function List({ value, unit }) {
  return (
    <div className="List">
      <div className="value">{value}</div>
      <div className="unit">{unit}</div>
    </div>
  )
}

export default List;
import "./List.css";

function List({ value, onClick }) {
  return (
    <div className="List">
      <div className="value" value={value} onClick={onClick}>{value}</div>
    </div>
  )
}

export default List;
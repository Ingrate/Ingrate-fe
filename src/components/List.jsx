// import "./List.css";

function List({ value, onClick }) {
  return (
    <div className="List p-3.5 text-center">
      <div className="value" value={value} onClick={onClick}>
        {value}
      </div>
    </div>
  );
}

export default List;

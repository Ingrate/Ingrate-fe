// import "./List.css";

function List({ value, onClick }) {
  return (
    <div className="List m-6 cursor-pointer text-center text-xl">
      <div className="value" value={value} onClick={onClick}>
        {value}
      </div>
    </div>
  );
}

export default List;

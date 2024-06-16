// import "./Button.css"

function Button({ text, color, onClick }) {
  return (
    <div className="Button">
      <button className={`w-28 border-2`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;

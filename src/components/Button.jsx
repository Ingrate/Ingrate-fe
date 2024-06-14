import "./Button.css"

function Button({ text, color, onClick }) {
  return (
    <div className="Button">
      <button className={`${color}-button`} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button;
import Info from "./Info";

function Rate({ ingred }) {
  return (
    <div className="Rate">
      <div className="info-section">
        <Info {...ingred}></Info>
      </div>
      <div className="rate-section">
        <h3>99점입니다!</h3>
        <div>나쁘지 않은데요?</div>
      </div>
    </div>
  )
}

export default Rate;
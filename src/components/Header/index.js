import './index.css'

const Header = props => {
  const {score} = props
  return (
    <ul className="headerMain">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="img1"
        alt="website logo"
      />
      <div className="headerDiv1">
        <p className="headH2">
          Score: <span>{score}</span>
        </p>
        <div className="headerDiv2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="img2"
            alt="timer"
          />
          <p className="headH1">60 sec</p>
        </div>
      </div>
    </ul>
  )
}
export default Header

import './index.css'

const GameOver = props => {
  const {score, playAgainClick} = props
  const gotoGame = () => {
    playAgainClick()
  }
  return (
    <div className="gameOverDiv">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="img6"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <h1>{score}</h1>
      <button type="button" className="button1" onClick={gotoGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="img7"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default GameOver

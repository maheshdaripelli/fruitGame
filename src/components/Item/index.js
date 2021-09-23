import './index.css'

const Item = props => {
  const {each, mainClick} = props
  const {id, imageUrl} = each
  const clickingItem = () => {
    mainClick(id)
  }
  return (
    <li>
      <button className="itemDiv" type="button" onClick={clickingItem}>
        <img src={imageUrl} className="img5" alt="match" />
      </button>
    </li>
  )
}
export default Item

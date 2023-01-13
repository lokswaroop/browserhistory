import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <div>
        <img src={logoUrl} className="image" alt="domain logo" />

        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button type="button" className="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem

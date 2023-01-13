import {Component} from 'react'
import HistoryItem from '../historyItem'

import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: '', HistoryList: []}

  filterHistoryList = () => {
    const {searchInput, HistoryList} = this.state
    const filterData = HistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filterData
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {HistoryList} = this.state
    const filteredData = HistoryList.filter(each => each.id !== id)

    this.setState({HistoryList: filteredData})
  }

  render() {
    const {searchInput} = this.state
    const searchResults = this.filterHistoryList()

    return (
      <div>
        <div className="bg">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="con">
            <div>
              <img
                className="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                placeholder="Search history"
              />
            </div>
          </div>
        </div>
        {searchResults.length === 0 ? (
          <p>There is no history to show</p>
        ) : (
          <ul className="card">
            {searchResults.map(each => (
              <HistoryItem
                key={each.id}
                historyDetails={each}
                deleteHistory={this.deleteHistory}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BrowserHistory

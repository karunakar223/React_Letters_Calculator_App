// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeSearchInput = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="flex-container">
          <div className="details-container">
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <label htmlFor="input" className="paragraph">
              Enter the phrase
            </label>
            <input
              type="text"
              id="input"
              className="search"
              placeholder="Enter the phrase"
              onChange={this.onChangeSearchInput}
            />
            <p className="letter-count">No.of letters: {count.length}</p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

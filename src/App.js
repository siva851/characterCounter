import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'


import './App.css'

// Replace your code here
class App extends Component { 
  state = {saerchInput: '', wordsList: []}

  one = event => {
    this.setState({saerchInput: event.target.value})
  }

  start = event => {
    event.preventDefault()
    const {saerchInput} = this.state
    const addedItems = {
      id: uuidv4(),
      item: saerchInput,
    }

    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, addedItems],
      saerchInput: '',
    }))
  }

  render() {
    const {saerchInput, wordsList} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Count the characters like a Boss </h1>
          <div className="container">
            {wordsList.length > 0 ? (
              <ul className="list-container">
                {wordsList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="list-element">
                      {each.item}:{each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="image"
                alt="no user input"
              />
            )}
          </div>
        </div>
        <div className="container-2">
          <h1 className="header">Character Counter</h1>
          <div className="br">
            <form onSubmit={this.start}>
              <div className="input-container">
                <input
                  type="text"
                  className="inputName"
                  placeholder="Enter the characters here"
                  onChange={this.one}
                  value={searchInput}
                />
                <button
                  className="add-button"
                  type="submit"
                  onClick={this.start}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App

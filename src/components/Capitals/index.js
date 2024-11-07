import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedOption: countryAndCapitalsList[0].id}

  onSelectingOption = event => {
    this.setState({selectedOption: event.target.value})
  }

  render() {
    const {selectedOption} = this.state
    return (
      <div className="background">
        <div className="capital-container">
          <h1 className="title">Countries And Capitals</h1>
          <div className="select-capital-container">
            <select className="selectTag" onChange={this.onSelectingOption}>
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country</p>
          </div>
          <h1 className="color-country">
            {countryAndCapitalsList.map(eachItem => {
              let country
              if (eachItem.id === selectedOption) {
                country = eachItem.country
              }
              return country
            })}
          </h1>
        </div>
      </div>
    )
  }
}

export default Capitals

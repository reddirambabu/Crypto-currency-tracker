// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currencyList: []}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const url = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const convertData = data.map(each => ({
      id: each.id,
      currencyLogoUrl: each.currency_logo,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))

    this.setState({isLoading: false, currencyList: convertData})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#123653" height={80} width={80} />
    </div>
  )

  renderListHeader = () => (
    <div className="list-header-container">
      <p className="coin-type">Coin Type</p>
      <div className="converter-container">
        <p className="usd">USD</p>
        <p className="euro">EURO</p>
      </div>
    </div>
  )

  renderCurrencyList = () => {
    const {currencyList} = this.state

    return (
      <div className="body-container">
        <h1 className="body-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="main-image"
        />
        <div className="result-container">
          {this.renderListHeader()}
          <ul className="list-container">
            {currencyList.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                currencyDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>{isLoading ? this.renderLoader() : this.renderCurrencyList()}</div>
    )
  }
}

export default CryptocurrenciesList

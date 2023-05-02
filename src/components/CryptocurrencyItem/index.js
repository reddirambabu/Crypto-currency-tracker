// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} = currencyDetails

  return (
    <li className="list-item-container">
      <div className="logo-container">
        <img src={currencyLogoUrl} alt={currencyName} className="icon" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="converter-container">
        <p className="usd">{usdValue}</p>
        <p className="usd">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

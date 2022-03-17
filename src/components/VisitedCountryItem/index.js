import './index.css'

const VisitedCountryItem = props => {
  const {countryDetails, toggleIsVisited} = props
  const {id, name, imageUrl} = countryDetails
  const onClickRemove = () => {
    toggleIsVisited(id)
  }

  return (
    <li className="item">
      <div className="img-container">
        <img className="img" src={imageUrl} alt="thumbnail" />
      </div>
      <div className="content-container">
        <p className="country-name">{name}</p>
        <button className="button" type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem

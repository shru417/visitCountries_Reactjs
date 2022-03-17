import './index.css'

const CountryItem = props => {
  const {countryDetails, toggleIsVisited} = props
  const {id, name, isVisited} = countryDetails
  const onClickChange = () => {
    toggleIsVisited(id)
  }
  const filterClassName = isVisited ? 'visited' : 'visit'
  const filterText = isVisited ? 'Visited' : 'Visit'
  return (
    <li className="list-item">
      <p className="country-name">{name}</p>
      <button className={filterClassName} type="button" onClick={onClickChange}>
        {filterText}
      </button>
    </li>
  )
}

export default CountryItem

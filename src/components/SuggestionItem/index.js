import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, key, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="each-suggestion">
      <p className="suggestion-para">{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-styles"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

import React from 'react'
import Autosuggest from 'react-autosuggest'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { SearchTerms } from '../store/actions'

const getSuggestions = (value, dataArray) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0 ? [] : dataArray.filter(task => {
    return task.title.toLowerCase()
      .slice(0, inputLength) === inputValue
  })
}
const getSuggestionValue = suggestion => suggestion.title
const renderSuggestion = suggestion => (
  <div>
    {suggestion.title}
  </div>
)
class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataArray: this.props.dataArray,
      fieldValues: '',
      filterdTerms: []
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      fieldValues: newValue
    })
  }
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      filterdTerms: getSuggestions(value, this.props.dataArray)
    });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      filterdTerms: []
    });
  };
  render() {
    const { fieldValues, filterdTerms } = this.state
    const inputProps = {
      placeholder: 'Search a task',
      value: fieldValues,
      onChange: this.onChange
    }
    const renderInputComponent = inputProps => {
     return( <>
        <input
          className='form-input'
          // onChange={(e) => this.props.handleSearch(e, this.state.dataArray)}
          // value={this.props.fieldValues}
          {...inputProps}
        />
      </>)
    }
    return (
      <>
        <Autosuggest
          suggestions={filterdTerms}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          renderInputComponent={renderInputComponent}
        />
      </>
    )
  }
}
const mapStateToProps = state => ({
  visibleItems: state.visibleItems
})

const mapDispatchToProps = dispatch => ({
  handleSearch: (e, targetTerm) => dispatch(SearchTerms(e, targetTerm))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

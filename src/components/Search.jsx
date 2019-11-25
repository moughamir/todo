import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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

const Search = (props) => {

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
        <input
          className='form-input'
          onChange={(e) => props.handleSearch(e, props.dataArray)}
          value={props.fieldValues}
          {...inputProps}
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

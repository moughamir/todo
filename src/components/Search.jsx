import React from 'react'
import { useDispatch } from 'react-redux'
import { SearchTerms } from '../store/actions'
import { Input } from './Input'
import { Button } from './Button'

const Search = (props) => {
  const dispatch = useDispatch()

  const inputProps = {
    placeholder: 'Search a task',
    type: 'text'
  }
  const inputRef = React.createRef()
  return (
    <div className='input-group input-inline '>
      <Input
        config={inputProps}
        className='form-input input-lg' ref={inputRef}
      />
      <Button
        className='btn-primary input-group-btn btn-lg' text='Search'
        handleButtonClick={(e) => dispatch(SearchTerms(e, inputRef.current.value))}
      />
    </div>
  )
}

export default Search

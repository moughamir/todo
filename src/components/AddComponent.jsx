import React from 'react'
import { useDispatch } from 'react-redux'
import { AddTask } from '../store/actions'
import { Input } from './Input'
import { Button } from './Button'

const AddItem = (props) => {
  const dispatch = useDispatch()

  const inputProps = {
    placeholder: 'Add new task',
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
        className='btn-primary input-group-btn btn-lg' text='Add'
        handleButtonClick={(e) => dispatch(AddTask(e, inputRef.current.value))}
      />
    </div>
  )
}

export default AddItem

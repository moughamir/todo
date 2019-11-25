import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Input } from './Input.jsx'
import { Button } from './Button.jsx'
import Link from './Link'
import { ToggleTaskState } from '../store/actions.js'

const Task = props => {
  const { id, title, isCompleted } = props
  const dispatch = useDispatch()
  const inputProps = {
    type: 'checkbox',
    checked: isCompleted,
    taskid: id
  }

  return (
    <>
      <li key={id} className='d-flex c-hand'>
        <Link destination={id}> {title}</Link>
        <div className='divider-vert' />
        <span className='form-group mx-2 d-inline-flex'>
          <label className='form-checkbox form-inline'>
            <Input
              config={inputProps}
              handleInputChange={() => dispatch(ToggleTaskState(id))}
            />
            {/* <input
              type='checkbox' checked={isCompleted}
              onChange={(e) => console.log(e.target.value)}
              ref={node => {
                input = node
              }}
            />
            */}
            <i className='form-icon' />
          </label>
          <Button
            handleButtonClick={e => console.log(e.target)}
            icon='icon-edit'
          />
          <Button
            handleButtonClick={e => console.log(e.target)}
            icon='icon-delete'
          />
        </span>
      </li>
      <div className='divider' />
    </>
  )
}

Task.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
  child: PropTypes.element
}

export default Task

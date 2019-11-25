import React from 'react'
import PropTypes from 'prop-types'
import { Input } from './Input.jsx'
import { Button } from './Button.jsx'

const Task = props => {
  const { id, title, isCompleted } = props
  const inputProps = {
    type: 'checkbox',
    checked: isCompleted,
    taskid: id
  }

  return (
    <>
      <li key={id}>
        {title}
        <span className='form-group'>
          <label className='form-checkbox form-inline'>
            <Input
              config={inputProps}
              handleInputChange={e => console.log(e.target.value)}
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
        </span>
        <Button
          handleButtonClick={e => console.log(e.target)}
          icon='icon-edit'
        />
        <Button
          handleButtonClick={e => console.log(e.target)}
          icon='icon-delete'
        />
      </li>
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

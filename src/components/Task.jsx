import React from 'react'
import PropTypes from 'prop-types'

const Task = (props) => {
  const { id, title, isCompleted } = props
  let input
  return (
    <>
      <li key={id}>
        {title}
        <span className='form-group'>
          <label className='form-checkbox form-inline'>
            <input
              type='checkbox' checked={isCompleted}
              onChange={(e) => console.log(e.target.value)}
              ref={node => {
                input = node
              }}
            />
            <i className='form-icon' />
          </label>
        </span>
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

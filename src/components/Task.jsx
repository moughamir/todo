import React from 'react'
import PropTypes from 'prop-types'

const Task = (props) => {
  const { id, title, isCompleted } = props
  return (
    <>
      <li key={id}>{title} {isCompleted ? 'true' : 'false'} {props.child}</li>
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

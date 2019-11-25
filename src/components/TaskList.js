import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = (props) => {
  const { items = [] } = props
  return (
    <ul>
      {
        items.map(task => (
          <React.Fragment key={task.id}>
            <Task
              id={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
            />
          </React.Fragment>
        ))
      }
    </ul>
  )
}

TaskList.propTypes = {
  items: PropTypes.array
}

export default TaskList

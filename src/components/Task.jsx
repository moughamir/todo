import  React from 'react'

const Task = (props) => {
  let {id, title, isCompleted} = props
  return (
    <>
    <li key={id}>{title} {isCompleted ? "✅" : "⬜"}</li>
    </>
  )
}

export default Task;
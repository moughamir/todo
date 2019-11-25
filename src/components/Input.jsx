import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

export const Input = props => {
  const { config } = props
  const [checked = config.checked, setInputState] = useState()
  // const checkBoxState = useSelector(state => state.tasks[config.taskId])

  // console.log(checked)
  let input
  return (
    <>
      <input
        {...config}
        ref={node => {
          input = node
        }}
        checked={checked}
        onChange={() => setInputState(!checked)}
      />
    </>
  )
}

Input.propTypes = {
  config: PropTypes.object,
  handleInputChange: PropTypes.func
}

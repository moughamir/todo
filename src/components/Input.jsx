import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

export const Input = React.forwardRef((props, inputRef) => {
  const { config } = props
  const [checked = config.checked, setInputState] = useState()
  return (
    <>
      <input
        {...config}
        ref={inputRef}
        checked={checked}
        onChange={() => setInputState(!checked)}
      />
    </>
  )
}
)
Input.propTypes = {
  config: PropTypes.object,
  handleInputChange: PropTypes.func
}

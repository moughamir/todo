import React from 'react'
import PropTypes from 'prop-types'

export const Button = props => {
  const { text = '', handleButtonClick, icon = '' } = props
  return (
    <>
      <button className='btn' onClick={handleButtonClick}>
        {text}
        {icon.length >= 0 ? <i className={`icon ${props.icon}`} /> : ''}
      </button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  handleButtonClick: PropTypes.func,
  icon: PropTypes.string
}

import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Link = ({ destination, children }) => (
  <NavLink
    exact
    to={`/${destination}`}
    activeStyle={{
      textDecoration: 'none'
    }}
    className='text-dark'
  >
    {children}
  </NavLink>
)

Link.propTypes = {
  destination: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired
}

export default Link

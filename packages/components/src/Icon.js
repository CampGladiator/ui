import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ className = '', name, size, ariaHidden = true }) => (
  <i
    className={`icon icon--${name} ${className}`}
    style={{ fontSize: size }}
    aria-hidden={ariaHidden}
  />
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  ariaHidden: PropTypes.bool,
}

export default Icon

import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name, size = 18, ariaHidden = true }) => (
  <i
    className={`icon icon--${name}`}
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

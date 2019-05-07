import React from 'react'
import PropTypes from 'prop-types'

import mods from './internal/mods'

const Input = ({ centered, rounded, separator, className, ...rest }) => (
  <input
    className={mods('input', { centered, rounded, separator }, className)}
    {...rest}
  />
)

Input.propTypes = {
  centered: PropTypes.bool,
  rounded: PropTypes.bool,
  separator: PropTypes.bool,
}

export default Input

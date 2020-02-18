import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import mods from './internal/mods'

const Input = forwardRef(
  ({ centered, rounded, separator, className, ...rest }, ref) => (
    <input
      className={mods('input', { centered, rounded, separator }, className)}
      ref={ref}
      {...rest}
    />
  ),
)

Input.displayName = 'Input'
Input.propTypes = {
  centered: PropTypes.bool,
  rounded: PropTypes.bool,
  separator: PropTypes.bool,
}

export default Input

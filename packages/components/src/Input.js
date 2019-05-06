import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'


const Input = ({
  inputType,
  placeholder,
  value
}) => (
  <input
    className={cn(
      "input",
      `input--${inputType}`
    )}

    placeholder={placeholder}
    value={value}
  />
)

Input.propTypes = {
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default Input

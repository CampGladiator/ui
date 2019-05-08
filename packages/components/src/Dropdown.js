import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({
  options = [],
  default_ = { label: 'SELECT', value: '' },
  ...props
}) => (
  <select className="input input--rounded input--dropdown" {...props}>
    {[default_, ...options].map(
      opt =>
        opt && (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ),
    )}
  </select>
)

const Option = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
})

Dropdown.propTypes = {
  options: PropTypes.arrayOf(Option),
  default_: Option,
}

export default Dropdown

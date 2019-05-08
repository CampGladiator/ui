import React from 'react'

const Option = ({ value, label }) => <option value={value}>{label}</option>

const Dropdown = ({
  options = [],
  onChange,
  value,
  default_ = { label: 'SELECT', value: '' },
}) => (
  <select className="input input--rounded input--dropdown">
    {default_ && <Option {...default_} />}
    {options.map(o => (
      <Option {...o} />
    ))}
  </select>
)

export default Dropdown

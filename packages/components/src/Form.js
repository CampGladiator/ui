import React from 'react'

const Form = ({ onSubmit, children, ...props }) => (
  <form
    onSubmit={e => {
      event.preventDefault()
      props.onSubmit(e)
    }}
    {...props}
  >
    {children}
  </form>
)

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
}

export default Form

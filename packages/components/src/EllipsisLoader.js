import React from 'react'

const EllipsisLoader = ({ label = 'loading' }) => (
  <figure
    className="loader"
    role="alert"
    aria-live="assertive"
    aria-label={label}
  >
    <div className="loader__circle" key={1} />
    <div className="loader__circle" key={2} />
    <div className="loader__circle" key={3} />
  </figure>
)

export default EllipsisLoader

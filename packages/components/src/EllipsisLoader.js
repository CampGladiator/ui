import React from 'react'

import mods from './internal/mods'

const EllipsisLoader = ({ label = 'loading', white }) => (
  <figure
    className={mods('ellipsis-loader', { white })}
    role="alert"
    aria-live="assertive"
    aria-label={label}
  >
    <div className="ellipsis-loader__dot" key={1} />
    <div className="ellipsis-loader__dot" key={2} />
    <div className="ellipsis-loader__dot" key={3} />
  </figure>
)

export default EllipsisLoader

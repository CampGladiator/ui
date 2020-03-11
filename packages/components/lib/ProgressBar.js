import React, { memo } from 'react'
import PropTypes from 'prop-types'
import mods from './internal/mods'

const ProgressBar = memo(
  ({ percentCompleted, progressColor = '#c8102e', className, ...props }) => (
    <div className={mods('progress-bar', {}, className)} {...props}>
      <div
        className="progress-bar__content"
        style={{
          transform: `translate(calc(-100% + ${percentCompleted}%))`,
          background: `${progressColor}`,
        }}
      />
    </div>
  ),
)

ProgressBar.displayName = 'ProgressBar'

ProgressBar.propTypes = {
  percentCompleted: PropTypes.number,
  className: PropTypes.string,
  progressColor: PropTypes.string,
}

export default ProgressBar

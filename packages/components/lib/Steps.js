import React, { memo } from 'react'
import PropTypes from 'prop-types'
import mods from './internal/mods'

const StepsItem = memo(({ steps = [], currentSelectedStep = 0 }) =>
  steps.map((step, index) => {
    let label = ''
    if (step && typeof step === 'string') {
      label = step
    } else {
      ;({ label = '' } = step || {})
    }
    let additionalClassName = ''
    if (currentSelectedStep === index) {
      additionalClassName = 'step--current'
    } else if (index > currentSelectedStep) {
      additionalClassName = 'step--disabled'
    }
    return (
      <li key={`step~${index}`} className={`step ${additionalClassName}`}>
        <span className="step__bullet">{index + 1}</span>
        <h3 className="step__text">{label}</h3>
      </li>
    )
  }),
)

const Steps = memo(
  ({ className, steps = [], currentSelectedStep = 0, ...props }) => {
    if (steps.length > 0) {
      return (
        <ul className={mods('steps', {}, className)}>
          <StepsItem
            steps={steps}
            currentSelectedStep={currentSelectedStep}
            {...props}
          />
        </ul>
      )
    }
    return null
  },
)

Steps.displayName = 'Steps'

Steps.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.array,
  currentSelectedStep: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default Steps

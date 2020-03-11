import React, { memo, isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types'
import mods from './internal/mods'
import ProgressBar from './ProgressBar'
import Steps from './Steps'

const HeaderComponent = memo(
  ({
    className,
    bordered = false,
    step = false,
    fixed = false,
    children,
    ...props
  }) => (
    <header
      className={mods(
        'header',
        { step, fixed, bordered: (!step && bordered) || '' },
        className,
      )}
      {...props}
    >
      {children}
    </header>
  ),
)

const HeaderContent = memo(({ className, children, ...props }) => (
  <div className={mods('header__content', {}, className)} {...props}>
    {children}
  </div>
))

HeaderContent.displayName = 'Header.Content'

HeaderContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

const HeaderBrand = memo(({ asComponent, className, children, ...props }) => {
  const BrandComponent = asComponent || (props.href ? 'a' : 'span')
  return (
    <BrandComponent className={className} {...props}>
      {children}
    </BrandComponent>
  )
})

HeaderBrand.displayName = 'Header.Brand'

HeaderBrand.propTypes = {
  asComponent: (props, propName) => {
    const propValue = props[propName]
    if (!isValidElement(propValue)) {
      return null
    }
    return new Error(
      `Invalid Prop ${propName} Supplied to the Component Header.Brand`,
    )
  },
  className: PropTypes.string,
  children: PropTypes.node,
}

const HeaderSteps = memo(props => <Steps {...props} />)

HeaderSteps.displayName = 'Header.Steps'

HeaderSteps.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.array,
  currentSelectedStep: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

const findCurrentHeaderStep = (currentSelectedStep = '', steps = []) => {
  if (currentSelectedStep) {
    const indexValue = steps.findIndex(step => {
      if (step.value && typeof step.value === 'string') {
        return step.value.toLowerCase() === currentSelectedStep.toLowerCase()
      } else {
        return step.value.indexOf(currentSelectedStep) !== -1
      }
    })
    return indexValue !== -1 ? indexValue : 0
  }
  return 0
}

const hasHeaderStep = (children = null) => {
  let hasStepComp = false
  let currentSelectedStep = 0
  let renderedChild = null
  let noOfSteps = 0
  if (children) {
    renderedChild = React.Children.map(children, child => {
      if (
        child &&
        isValidElement(child) &&
        child.type.displayName === 'Header.Steps'
      ) {
        hasStepComp = true
        currentSelectedStep = findCurrentHeaderStep(
          child.props.currentSelectedStep || '',
          child.props.steps,
        )
        noOfSteps = (child.props.steps && child.props.steps.length) || 0
        return React.cloneElement(child, {
          currentSelectedStep,
        })
      }
      return child
    })
  }
  return { hasStepComp, currentSelectedStep, renderedChild, noOfSteps }
}

const Header = memo(
  ({ children, bordered = false, fixed = false, className, ...props }) => {
    let renderedChild = null
    let hasStepComp = false
    let currentSelectedStep = 0
    let noOfSteps = 0
    if (
      children &&
      isValidElement(children) &&
      children.type.displayName === 'Header.Content'
    ) {
      ;({
        hasStepComp,
        currentSelectedStep,
        renderedChild,
        noOfSteps,
      } = hasHeaderStep(children.props.children))
      renderedChild = cloneElement(children, [], [...renderedChild])
    } else {
      ;({
        hasStepComp,
        currentSelectedStep,
        renderedChild,
        noOfSteps,
      } = hasHeaderStep(children))
      renderedChild = <HeaderContent>{renderedChild}</HeaderContent>
    }
    return (
      <HeaderComponent
        className={className}
        bordered={bordered}
        step={hasStepComp}
        fixed={fixed}
        {...props}
      >
        {renderedChild}
        {hasStepComp && (
          <ProgressBar
            percentCompleted={((currentSelectedStep + 1) / noOfSteps) * 100}
          />
        )}
      </HeaderComponent>
    )
  },
)

Header.displayName = 'Header'

Header.propTypes = {
  className: PropTypes.string,
  bordered: PropTypes.bool,
  fixed: PropTypes.bool,
  children: PropTypes.node,
}

Header.Content = HeaderContent
Header.Brand = HeaderBrand
Header.Steps = HeaderSteps

export default Header

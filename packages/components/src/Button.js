import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import Media from './internal/Media'
import Icon from './Icon'
import bp from './breakpoints'

const Button = ({
  className,
  primary,
  secondary,
  solid,
  outline,
  dark,
  gray,
  white,
  size,
  media = {},
  disabled,
  children,
  onClick,
  icon,
}) => (
  <button
    className={cn(
      'button',
      primary && 'button--primary',
      secondary && 'button--secondary',
      solid && 'button--solid',
      outline && 'button--outline',
      dark && 'button--dark',
      gray && 'button--gray',
      white && 'button--white',
      size && `button--${size}`,
      Media.toModifiers('button', media),
      className,
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {icon && <Icon className="button__icon" name={icon} />}
    {children}
  </button>
)

const Size = PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge'])

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  solid: PropTypes.bool,
  outline: PropTypes.bool,
  dark: PropTypes.bool,
  gray: PropTypes.bool,
  white: PropTypes.bool,
  size: Size,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  media: Media.propTypeFor(Size),
}

export default Button

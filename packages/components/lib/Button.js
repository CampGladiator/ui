import React from 'react'
import PropTypes from 'prop-types'

import Media from './internal/Media'
import Icon from './Icon'
import mods from './internal/mods'
import EllipsisLoader from './EllipsisLoader'

const Button = ({
  className,
  primary,
  secondary,
  solid,
  outline,
  dark,
  gray,
  white,
  loading,
  size,
  media = {},
  disabled,
  children,
  onClick,
  icon,
  ...rest
}) => (
  <button
    className={mods(
      'button',
      { primary, secondary, solid, outline, dark, gray, white },
      size && `button--${size}`,
      Media.toModifiers('button', media),
      loading && 'button--loading',
      className,
    )}
    disabled={disabled}
    onClick={onClick}
    {...rest}
  >
    {icon && <Icon className="button__icon" name={icon} />}
    {loading ? <EllipsisLoader white={solid} /> : children}
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
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  media: Media.propTypeFor(Size),
}

export default Button

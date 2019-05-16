import React from 'react'
import PropTypes from 'prop-types'

import Media from './internal/Media'
import Icon from './Icon'
import mods from './internal/mods'
import bp from './breakpoints'

const startLoader = (event) => {
  let textButton = event.currentTarget.firstElementChild
  event.currentTarget.lastElementChild.classList.toggle("loader")
  event.currentTarget.disabled = true
  event.currentTarget.classList.toggle("button--disabled-color")
  event.currentTarget.removeChild(textButton)

}

const Button = ({
  className,
  primary,
  secondary,
  solid,
  outline,
  dark,
  gray,
  white,
  category,
  size,
  media = {},
  disabled,
  children,
  onClick,
  icon,
  textContent
}) => (
  <button
    className={mods(
      'button',
      { primary, secondary, solid, outline, dark, gray, white },
      size && `button--${size}`,
      Media.toModifiers('button', media),
      className,
    )}
    disabled={disabled}
    onClick= {category === 'loader' ? startLoader : onClick}
  >
    <span>{textContent}</span>
    {icon && <Icon className="button__icon" name={icon} />}
    {children}
  </button>
)

const Size = PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge'])
const Category = PropTypes.oneOf(['normal', 'loader'])

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
  category: Category,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  media: Media.propTypeFor(Size),
  textContent: PropTypes.string,
}

export default Button

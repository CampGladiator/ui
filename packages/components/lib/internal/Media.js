import PropTypes from 'prop-types'
import bp from '../breakpoints'

const toModifiers = (base, media) =>
  Object.entries(media).map(
    ([breakpoint, size]) => `${base}--${size}@${breakpoint}`,
  )

const propTypeFor = propType =>
  PropTypes.shape({
    [bp.phoneOnly]: propType,
    [bp.tabletLandscape]: propType,
    [bp.tabletPortrait]: propType,
    [bp.phoneOnly]: propType,
  })

export default {
  toModifiers,
  propTypeFor,
}

import classNames from 'classnames'

const mods = (base, modifiers, ...rest) => classNames([
  base,
  ...Object.entries(modifiers).map(
    ([mod, active]) => active && `${base}--${mod}`,
  ),
], rest)

export default mods

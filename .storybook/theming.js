import { create } from '@storybook/theming'
import { styled } from '@storybook/theming'

export const infoAddonStyles = styles => ({
  ...styles,
  infoBody: {
    ...styles.infoBody,
    fontFamily: 'Gotham',
    color: '#263746',
    marginTop: '0',
    border: 'none',
  },
  source: {
    h1: {
      ...styles.source.h1,
      letterSpacing: '2px',
      borderBottom: 'none',
      textTransform: 'uppercase',
      fontFamily: 'Gotham',
    },
    h2: {
      ...styles.source.h2,
      letterSpacing: '2px',
      borderBottom: 'none',
      textTransform: 'uppercase',
      fontFamily: 'Gotham',
    },
  },
})

export const storybookTheme = create({
  base: 'light',

  colorPrimary: '#C8102E',
  colorSecondary: '#C8102E',

  appBg: 'white',
  appBorderColor: '#EDEDED',
  appBorderRadius: 0,

  barTextColor: '#99999a',
  barSelectedColor: '#263746',

  fontBase: '"Gotham", sans-serif',
  brandTitle: 'Camp Gladiator',
  brandUrl: 'https://campgladiator.com',
  brandImage:
    'https://s3.amazonaws.com/cgcdn/global-ui/images/logos/campgladiator/full-color-black.svg',

  textInverseColor: 'rgba(255, 255, 255, .9)',
})

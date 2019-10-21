import React from 'react'

import omit from 'storybook-react-omit'

import Button from '../../packages/components/lib/Button'
import bp from '../../packages/components/lib/breakpoints'

export default {
  title: 'Elements|Buttons',

  parameters: {
    layout: { rows: 5, columns: 3, gap: '24px 0' },
    layout: { rows: 5, gap: '24px 100px' },
  },
}

export const primaryStory = () => (
  <>
    <Button solid primary size="xlarge">
      extra large
    </Button>
    <Button solid primary size="large">
      large
    </Button>
    <Button solid primary>
      default
    </Button>
    <Button solid primary size="small">
      small
    </Button>
    <Button solid primary size="xsmall">
      extra small
    </Button>
    <Button primary outline size="xlarge">
      extra large
    </Button>
    <Button primary outline size="large">
      large
    </Button>
    <Button primary outline>
      default
    </Button>
    <Button primary outline size="small">
      small
    </Button>
    <Button primary outline size="xsmall">
      extra small
    </Button>
    <Button primary size="xlarge">
      extra large
    </Button>
    <Button primary size="large">
      large
    </Button>
    <Button primary>default</Button>
    <Button primary size="small">
      small
    </Button>
    <Button primary size="xsmall">
      extra small
    </Button>
    <Button solid size="xlarge" icon="check">
      extra large
    </Button>
    <Button solid size="large" icon="check">
      large
    </Button>
    <Button solid icon="check">
      default
    </Button>
    <Button solid size="small" icon="check">
      small
    </Button>
    <Button solid size="xsmall" icon="check">
      extra small
    </Button>
  </>
)

primaryStory.story = {
  name: 'Primary',
}

export const secondaryStory = () => (
  <>
    <Button solid secondary size="xlarge">
      extra large
    </Button>
    <Button solid secondary size="large">
      large
    </Button>
    <Button solid secondary>
      default
    </Button>
    <Button solid secondary size="small">
      small
    </Button>
    <Button solid secondary size="xsmall">
      extra small
    </Button>
    <Button secondary outline size="xlarge">
      extra large
    </Button>
    <Button secondary outline size="large">
      large
    </Button>
    <Button secondary outline>
      default
    </Button>
    <Button secondary outline size="small">
      small
    </Button>
    <Button secondary outline size="xsmall">
      extra small
    </Button>
    <Button secondary size="xlarge">
      extra large
    </Button>
    <Button secondary size="large">
      large
    </Button>
    <Button secondary>default</Button>
    <Button secondary size="small">
      small
    </Button>
    <Button secondary size="xsmall">
      extra small
    </Button>
  </>
)

secondaryStory.story = {
  name: 'Secondary',
}

export const disabledStory = () => (
  <>
    <Button disabled solid size="xlarge">
      extra large
    </Button>
    <Button disabled solid size="large">
      large
    </Button>
    <Button disabled solid>
      default
    </Button>
    <Button disabled solid size="small">
      small
    </Button>
    <Button disabled solid size="xsmall">
      extra small
    </Button>
    <Button disabled outline size="xlarge">
      extra large
    </Button>
    <Button disabled outline size="large">
      large
    </Button>
    <Button disabled outline>
      default
    </Button>
    <Button disabled outline size="small">
      small
    </Button>
    <Button disabled outline size="xsmall">
      extra small
    </Button>
    <Button disabled size="xlarge">
      extra large
    </Button>
    <Button disabled size="large">
      large
    </Button>
    <Button disabled className="button">
      default
    </Button>
    <Button disabled size="small">
      small
    </Button>
    <Button disabled size="xsmall">
      extra small
    </Button>
  </>
)

disabledStory.story = {
  name: 'Disabled',
}

export const darkStory = () => (
  <>
    <Button solid dark size="xlarge">
      extra large
    </Button>
    <Button solid dark size="large">
      large
    </Button>
    <Button solid dark>
      default
    </Button>
    <Button solid dark size="small">
      small
    </Button>
    <Button solid dark size="xsmall">
      extra small
    </Button>
  </>
)

darkStory.story = {
  name: 'Dark',
}

export const grayStory = () => (
  <>
    <Button gray outline size="xlarge">
      extra large
    </Button>
    <Button gray outline size="large">
      large
    </Button>
    <Button gray outline>
      default
    </Button>
    <Button gray outline size="small">
      small
    </Button>
    <Button gray outline size="xsmall">
      extra small
    </Button>
  </>
)

grayStory.story = {
  name: 'Gray',
}

export const whiteStory = () => (
  <>
    <Button outline white size="xlarge">
      extra large
    </Button>
    <Button outline white size="large">
      large
    </Button>
    <Button outline white>
      default
    </Button>
    <Button outline white size="small">
      small
    </Button>
    <Button outline white size="xsmall">
      extra small
    </Button>
    <Button solid white size="xlarge">
      extra large
    </Button>
    <Button solid white size="large">
      large
    </Button>
    <Button solid white>
      default
    </Button>
    <Button solid white size="small">
      small
    </Button>
    <Button solid white size="xsmall">
      extra small
    </Button>
  </>
)

whiteStory.story = {
  name: 'White',

  parameters: {
    layout: {
      rows: 5,
      template: 'repeat(2, auto)',
      gap: '24px 50px',
      background: '#231F20',
    },
  },
}

export const loadingStory = () => (
  <>
    <Button loading size="xlarge">
      Placeholder
    </Button>
    <Button outline loading size="xlarge">
      Placeholder
    </Button>
    <Button primary solid loading size="xlarge">
      Placeholder
    </Button>
    <Button secondary solid loading size="xlarge">
      Placeholder
    </Button>
    <Button dark solid loading size="xlarge">
      Placeholder
    </Button>
  </>
)

loadingStory.story = {
  name: 'Loading',
  parameters: { layout: { rows: 6, gap: '10px 0' } },
}

export const responsive = () => (
  <div className="text-center">
    <p>Change the viewport and watch the button size change</p>
    <Button
      solid
      media={{
        [bp.bigDesktop]: 'xlarge',
        [bp.desktop]: 'xlarge',
        [bp.tabletLandscape]: 'large',
        [bp.tabletPortrait]: 'small',
        [bp.phoneOnly]: 'xsmall',
      }}
    >
      button
    </Button>
    {omit(
      <style>{`
      @media (max-width: 599px) {
        .button--xsmall\\@phone-only::after {
          content: "@phone-only";
        }
      }

      @media (min-width: 600px) {
        .button--small\\@tablet-portrait::after {
          content: "@tablet-portrait";
        }
      }

      @media (min-width: 900px) {
        .button--large\\@tablet-landscape::after {
          content: "@tablet-landscape";
        }
      }

      @media (min-width: 1200px) {
        .button--xlarge\\@desktop::after {
          content: "@desktop";
        }
      }

      @media (min-width: 1679px) {
        .button--xlarge\\@big-desktop::after {
          content: "@big-desktop";
        }
      }
    `}</style>,
    )}
  </div>
)

responsive.story = {
  parameters: { layout: { rows: 1 } },
}

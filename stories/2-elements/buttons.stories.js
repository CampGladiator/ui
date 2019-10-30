import React from 'react'

import omit from 'storybook-react-omit'

import Button from '../../packages/components/lib/Button'
import bp from '../../packages/components/lib/breakpoints'

const primaryInfoText = `
  # BUTTONS
  Buttons are a very common component used throughout CG interfaces. Almost all calls-to-action are accompanied by one or more buttons. Because of their frequent use, there are several styles to choose from and they should be selected with functionality in mind.

  ## BUTTON RULES:
    * When grouped, buttons should always be the same size.
    * When grouped, buttons should not share the same styles (except for size) [ie. a solid red button should not be next to another solid red button]. In these cases, use a different style such as outline and/or a different color combo. Using solid buttons alongside outline buttons of the same color is a safe practice.
    * Do not manipulate the hover states of buttons, as this can cause inconsistency in the design system.

  ### SOLID
    Solid buttons are the most commonly used and should be the primary button type used, especially when you have only one button used in a view.

  ### OUTLINE
    Outline buttons allow for a different visual effect. This is helpful when buttons are shown in groups to break up the monotony that would be created by having multiple solid buttons next to eachother.

  ### SIZES
    Button sizes convey heirarchy and meaning and can help drive attention and engagement to important calls-to-action. The default style should be uesd in the majority of cases. When grouping buttons be sure all buttons in the group are of the same size. Also keep in mind that the most extreme sizes are typically reserved for device specific circumstances (ie. extra-large buttons work well for the largest call to action on a desktop, while extra-small buttons are good for mobile.
`

export default {
  title: 'Elements|Buttons',

  parameters: {
    layout: { rows: 5, columns: 3, gap: '24px 0' },
    layout: { rows: 5, gap: '24px 100px' }
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
  parameters: {
    info: {
      text: primaryInfoText,
    }
  }
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
const disabledText = `
  # DISABLED
  Disabled buttons are designed to serve as placeholders for active buttons when the button action is not available. This is especially useful for things like login or continue buttons that aren't available until the user completes a certain action (ie. entering their login info). Using disabled buttons can help improve the user experience by letting the user know they can't continue without further action. Disabled buttons should replace active buttons along with e.preventDefault() logic after a form submission button has been pressed in order to prevent the user from submitting the form multiple times.
`
disabledStory.story = {
  name: 'Disabled',
  parameters: {
    info: disabledText
  }
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
const loadingInfoText = `
  # LOADING BUTTON
  Loading buttons are designed to use with forms where it gives users immediate feedback upon submit rather than leaving them wondering while the browser does its thing.
  Using loading buttons can help improve the user experience by letting the user know they can't continue further until the browser actions are performed.
`

loadingStory.story = {
  name: 'Loading',
  parameters: {
    layout: { rows: 6, gap: '10px 0' },
    info: loadingInfoText,
  },
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

const responsiveInfoText = `
  # RESPONSIVE
  Responsive buttons are designed to support different resolutions of viewport, The button size changes based on changing viewport resolution.
`

responsive.story = {
  parameters: {
    layout: { rows: 1 } ,
    info: responsiveInfoText
  },
}

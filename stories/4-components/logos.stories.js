import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Components|Logos', module)
  .add(
    'Full Logos',
    () => (
      <>
        <div className="container">
          <div className="background-light-gray text-pavement space-x-m space-y-xxxl text-center">
            <a
              href=""
              className="logo logo--cg-full-color-black"
              style={{ height: '60px', margin: '24px' }}
            >
              Camp Gladiator
            </a>
            <a
              href=""
              className="logo logo--cg-full-color-white"
              style={{ height: '60px', margin: '24px' }}
            >
              Camp Gladiator
            </a>
            <a
              href=""
              className="logo logo--cg-full-black-white"
              style={{ height: '60px', margin: '24px' }}
            >
              Camp Gladiator
            </a>
            <a
              href=""
              className="logo logo--cg-full-white"
              style={{ height: '60px', margin: '24px' }}
            >
              Camp Gladiator
            </a>
            <a
              href=""
              className="logo logo--cg-full-black"
              style={{ height: '60px', margin: '24px' }}
            >
              Camp Gladiator
            </a>
          </div>
        </div>
      </>
    ),
    {
      layout: { rows: 1, template: '100vw' },
      info: {
        text: `
                  ## FULL LOGOS
                  Declaring logos can be done by adding the required logo classes to just about any element. However, the best practice for usability would be to set the logo itself as an anchor tag to allow linking. If the logo is not meant to link out, a simple <div> tag would be the best alternative. Additionally, you must declare a height on your logo in order for it to display. This can be done inline or via a new CSS class. Setting the height does not prevent the logo from scaling responsively - for example, if the logo's container get's too small to fit the logo. For accessibility, you should declare inner HTML text that describes the logo (ie. 'Camp Gladiator' for full logos).
                `,
      },
    },
  )
  .add(
    'Logo Icon',
    () => (
      <>
        <div className="container">
          <div className="background-light-gray text-pavement space-x-m space-y-xxxl text-center">
            <a
              href=""
              className="logo logo--cg-icon-default"
              style={{ height: '60px', margin: '24px' }}
            >
              CG
            </a>
            <a
              href=""
              className="logo logo--cg-icon-white"
              style={{ height: '60px', margin: '24px' }}
            >
              CG
            </a>
            <a
              href=""
              className="logo logo--cg-icon-black"
              style={{ height: '60px', margin: '24px' }}
            >
              CG
            </a>
            <a
              href=""
              className="logo logo--cg-icon-gray"
              style={{ height: '60px', margin: '24px' }}
            >
              CG
            </a>
            <a
              href=""
              className="logo logo--cg-icon-light"
              style={{ height: '60px', margin: '24px' }}
            >
              CG
            </a>
            <a
              href=""
              className="logo logo--cg-icon-navy"
              style={{ height: '60px', margin: '24px' }}
            >
              CG
            </a>
          </div>
        </div>
      </>
    ),
    {
      layout: { rows: 1, template: '100vw' },
      info: {
        text: `
                    ## LOGO ICON
                    Like full logos, you must declare a height on your logo icon in order for it to display. This can be done inline or via a new CSS class. For accessibility, you should declare inner HTML text that describes the logo (ie. 'CG' for the icon logos)
                  `,
      },
    },
  )

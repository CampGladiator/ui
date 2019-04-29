import React from 'react'

import { storiesOf } from '@storybook/react'
import omit from 'storybook-react-omit'

storiesOf('Layout|Container', module).add(
  'Default',
  () => (
    <>
      <div className="container">
        {omit(
          <div className="background-light-gray text-pavement space-x-m space-y-xxxl text-center">
            <p>
              This is a container for a page's content.
              <br />
              Its max width is <code>960px</code>
            </p>
          </div>,
        )}
      </div>
      <div className="container container--large">
        {omit(
          <div className="container container--large">
            <div className="background-light-gray text-pavement space-x-m space-y-xxxl text-center">
              <p>
                This one is large.
                <br />
                It is <code>1160px</code>
              </p>
            </div>
          </div>,
        )}
      </div>
      <div className="container container--small">
        {omit(
          <div className="container container--small">
            <div className="background-light-gray text-pavement space-x-m space-y-xxxl text-center">
              <p>
                ...and this one is only <code>560px</code>
              </p>
            </div>
          </div>,
        )}
      </div>
    </>
  ),
  {
    layout: { rows: 3, template: '100vw', gap: '24px 0' },
  },
)

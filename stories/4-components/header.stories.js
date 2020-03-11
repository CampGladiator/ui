import React from 'react'
import Header from '../../packages/components/lib/Header'
import Button from '../../packages/components/lib/Button'
import { BrowserRouter, Switch, Link } from 'react-router-dom'

export default {
  title: 'Components|Header',
}

export const defaultHeader = () => (
  <>
    <Header />

    <Header bordered> Header With Border Line </Header>

    <Header fixed>
      <Header.Brand
        className="logo logo--cg-icon-default"
        href="/"
        style={{
          height: '40px',
          width: '100px',
        }}
      />
      <h2>Fixed Header Visible Here</h2>
    </Header>

    <Header className="background-gladiator" />

    <Header className="background-navy" />
  </>
)

defaultHeader.story = {
  name: 'Default',
  parameters: {
    layout: {
      template: '100%',
      rows: 4,
      background: '#99999A',
      gap: '100px',
      justify: 'initial',
    },
    info: {
      text: `
        ## Header
        Header component is used to show the headers in websites.
        
        ### Default
        Default Header just contains the header with background color.

        ### Bordered
        Header will have the thin border line below the header component.

        ### Fixed
        Header will be always visible and will be tied to the viewport.
      `,
    },
  },
}

export const contentHeader = () => (
  <>
    <Header> Header With Some Content </Header>
    <Header>
      <Header.Content className="text-gladiator">
        Header With Some Custom Content
      </Header.Content>
    </Header>
    <Header className="background-gladiator">
      <Header.Content className="text-navy">
        <div className="font-display">CampGladiator</div>
        <Button outline secondary size="small">
          PROFILE
        </Button>
      </Header.Content>
    </Header>
  </>
)

contentHeader.story = {
  name: 'With Content',
  parameters: {
    layout: {
      template: '100%',
      rows: 3,
      background: '#99999A',
      gap: '100px',
      justify: 'initial',
    },
    info: {
      text: `
          ### With Content
          Header with content is used to render any element inside the header.
        `,
    },
  },
}

export const brandHeader = () => (
  <>
    <Header>
      <Header.Brand
        className="logo logo--cg-icon-default"
        href="/"
        style={{
          height: '40px',
          width: '100px',
        }}
      />
    </Header>
    <Header className="background-gladiator">
      <Header.Brand
        className="logo logo--cg-full-white"
        style={{
          height: '40px',
          width: '200px',
        }}
      />
    </Header>
    <Header className="background-navy">
      <Header.Content>
        <Header.Brand
          className="logo logo--cg-full-white"
          href="/"
          style={{
            height: '40px',
            width: '200px',
          }}
        />
      </Header.Content>
    </Header>
    <BrowserRouter>
      <Switch>
        <Header>
          <Header.Brand
            asComponent={Link}
            to={{ pathname: '/' }}
            style={{
              height: '40px',
              width: '200px',
            }}
          >
            <img
              src="https://s3.amazonaws.com/cgcdn/global-ui/images/logos/campgladiator/full-color-black.svg"
              alt="CG Logo"
              style={{ width: '200px', height: '40px' }}
            />
          </Header.Brand>
        </Header>
      </Switch>
    </BrowserRouter>
  </>
)

brandHeader.story = {
  name: 'With Brand',
  parameters: {
    layout: {
      template: '100%',
      rows: 4,
      background: '#99999A',
      gap: '100px',
      justify: 'initial',
    },
    info: {
      text: `
            ### With Brand
            Brand is used to show the branding logo on the header.
            Brand can also use the React Router Link component.
          `,
    },
  },
}

export const stepsHeader = () => {
  const steps = [
    {
      label: 'Step One/Two',
      value: ['/page1', '/page2'],
    },
    {
      label: 'Step Three',
      value: '/page3',
    },
    {
      label: 'Step Four',
      value: ['/', '/page4', '/page5'],
    },
    {
      label: 'Step Six',
      value: '/page6',
    },
  ]
  return (
    <>
      <Header>
        <Header.Steps steps={steps} currentSelectedStep={'/page3'} />
      </Header>

      <Header>
        <Header.Content>
          <Header.Steps steps={steps} />
        </Header.Content>
      </Header>

      <Header>
        <Header.Steps steps={steps} currentSelectedStep="/page6" />
      </Header>

      <Header>
        <Header.Brand
          className="logo logo--cg-icon-default"
          href="/"
          style={{
            height: '40px',
            width: '100px',
          }}
        />
        <Header.Steps steps={steps} currentSelectedStep={'/page3'} />
      </Header>
      <Header>
        <Header.Content>
          <Header.Brand
            className="logo logo--cg-icon-default"
            href="/"
            style={{
              height: '40px',
              width: '100px',
            }}
          />
          <Header.Steps steps={steps} currentSelectedStep={'/'} />
        </Header.Content>
      </Header>

      <Header>
        <Header.Brand
          className="logo logo--cg-icon-default"
          href="/"
          style={{
            height: '40px',
            width: '100px',
          }}
        />
        <Header.Steps steps={steps} currentSelectedStep={'/'} />

        <Button outline secondary size="small">
          PROFILE
        </Button>
      </Header>
    </>
  )
}

stepsHeader.story = {
  name: 'With Steps',
  parameters: {
    layout: {
      template: '100%',
      rows: 6,
      background: '#99999A',
      gap: '100px',
      justify: 'initial',
    },
    info: {
      text: `
              ### With Steps
              Steps is used to show the steps progress in header along with progress bar.
            `,
    },
  },
}

import React from 'react'

import Button from '../../packages/components/lib/Button'

export default {
  title: 'Components|Button groups',

  parameters: {
    layout: { rows: 4, gap: '20px 0' },
  },
}

export const primaryStory = () => (
  <>
    <div className="button-group">
      <Button solid primary large className="button-group__left">
        left large
      </Button>
      <Button primary outline large className="button-group__right">
        right large
      </Button>
    </div>
    <div className="button-group">
      <Button solid primary className="button-group__left">
        left default
      </Button>
      <Button primary outline className="button-group__right">
        right default
      </Button>
    </div>
    <div className="button-group">
      <Button solid primary small className="button-group__left">
        left small
      </Button>
      <Button primary outline small className="button-group__right">
        right small
      </Button>
    </div>
    <div className="button-group">
      <Button solid primary xsmall className="button-group__left">
        left extra small
      </Button>
      <Button primary outline xsmall className="button-group__right">
        right extra small
      </Button>
    </div>
  </>
);

primaryStory.story = {
  name: "Primary",
  parameters: {
    layout: { rows: 4, gap: "20px 0" },
    info: {
      text: `
        ## Button Group
        Button groups that allow the user to toggle between two options. These are helpful for allowing users to change data views within your UI. 
        Button group must have a parent container with the only items in the container being the button controls. 
        Use the '.button-group' class on the parent container.
        
        ### Primary button group
        Primary button can be combined with outline button to display two different buttons in a group.
        The left primary button should have class "button-group__left" and the right outlined button should have class "button-group__right".
      `
    }
  }
};

export const secondaryStory = () => (
  <>
    <div className="button-group">
      <Button solid secondary large className="button-group__left">
        left large
      </Button>
      <Button secondary outline large className="button-group__right">
        right large
      </Button>
    </div>
    <div className="button-group">
      <Button solid secondary className="button-group__left">
        left default
      </Button>
      <Button secondary outline className="button-group__right">
        right default
      </Button>
    </div>
    <div className="button-group">
      <Button solid secondary small className="button-group__left">
        left small
      </Button>
      <Button secondary outline small className="button-group__right">
        right small
      </Button>
    </div>
    <div className="button-group">
      <Button solid secondary xsmall className="button-group__left">
        left extra small
      </Button>
      <Button secondary outline xsmall className="button-group__right">
        right extra small
      </Button>
    </div>
  </>
);

secondaryStory.story = {
  name: "Secondary",
  parameters: {
    layout: { rows: 4, gap: "20px 0" },
    info: {
      text: `
        ### Secondary button group
        Secondary button can be combined with outline button to display toggle option with a secondary button.
        The left secondary button should have class "button-group__left" and the right outlined button should have class "button-group__right".
      `
    }
  }
};

export const darkStory = () => (
  <>
    <div className="button-group">
      <Button solid dark large className="button-group__left">
        left large
      </Button>
      <Button dark outline large className="button-group__right">
        right large
      </Button>
    </div>
    <div className="button-group">
      <Button solid dark className="button-group__left">
        left default
      </Button>
      <Button dark outline className="button-group__right">
        right default
      </Button>
    </div>
    <div className="button-group">
      <Button solid dark small className="button-group__left">
        left small
      </Button>
      <Button dark outline small className="button-group__right">
        right small
      </Button>
    </div>
    <div className="button-group">
      <Button solid dark xsmall className="button-group__left">
        left extra small
      </Button>
      <Button dark outline xsmall className="button-group__right">
        right extra small
      </Button>
    </div>
  </>
);

darkStory.story = {
  name: "Dark",
  parameters: {
    layout: { rows: 4, gap: "20px 0" },
    info: {
      text: `
        ### Dark button group
        Dark button can be combined with outline button to display toggle option with a dark button.
        The left dark button should have class "button-group__left" and the right outlined button should have class "button-group__right".
      `
    }
  }
};

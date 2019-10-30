import React from 'react'

export default {
  title: 'Components|Charts',
}

export const defaultCounterStory = () => (
  <>
    <div className="counter-default counter-default--large">12</div>
    <div className="counter-default counter-default--normal">8</div>
    <div className="counter-default counter-default--small">2</div>
  </>
)

defaultCounterStory.story = {
  name: 'Simple Counter / Default',
  parameters: { 
    layout: { rows: 1, cols: 3, gap: '50px' },
    info: {
      text: `
        ## Simple Counter
        Small count and labeling component to indicate the counter. 
        A number should be wrapped in div with a class "counter-default counter-default--" and appended with "large" | "normal" | "small"
      `
    }
  }
}

export const condensedCounterStory = () => (
  <>
    <div className="counter-condensed counter-condensed--normal">12</div>
  </>
)

condensedCounterStory.story = {
  name: 'Simple Counter / Condensed',
  parameters: { 
    layout: { rows: 1, cols: 3, gap: '50px' },
    info: {
      text: `
        ## Condensed Counter
        Condensed counter is numerical indicators of how many items are associated. 
        A number should be wrapped in div with a class "counter-condensed counter-condensed--normal"
      `
    }
  }
}

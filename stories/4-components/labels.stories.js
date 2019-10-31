import React from 'react'

export default {
  title: 'Components|Labels',
}

export const positions = () => (
  <>
    <figure style={{ position: 'relative' }}>
      <img src="https://cgui.campgladiator.com/images/shirt.jpg" width="200" />
      <legend className="image-label image-label--tr">Label</legend>
    </figure>
    <figure style={{ position: 'relative' }}>
      <img src="https://cgui.campgladiator.com/images/shirt.jpg" width="200" />
      <legend className="image-label image-label--tl">Label</legend>
    </figure>
    <figure style={{ position: 'relative' }}>
      <img src="https://cgui.campgladiator.com/images/shirt.jpg" width="200" />
      <legend className="image-label image-label--bl">Label</legend>
    </figure>
    <figure style={{ position: 'relative' }}>
      <img src="https://cgui.campgladiator.com/images/shirt.jpg" width="200" />
      <legend className="image-label image-label--br">Label</legend>
    </figure>
  </>
)

positions.story = {
  parameters: { 
    layout: { rows: 2 },
    info: {
      text: `
        ## Labels
        Labels are floating 'badges' that are useful for overlaying information about a particular element on the page 
        to help provide contect. An example would be showing a 'SALE' label over a store product on display. 
        When using labels, since these do act as overlays, please ensure no important content is being covered up 
        by the label itself. Labels are automatically positioned absolutely assuming they will be nested within a 
        relatively positioned container element. By default, labels appear at the top right of any relatively 
        positioned container element. Labels will automatically scale to a more compact size when the viewport 
        is less than 1024px wide.

        ### Label Positioning
        While the default positioning for labels is top right, this can be overridden using modifier 
        classes when top right positioning doesn't work within the context of the container element. 
        Ideally, you should try to avoid having different placments of labels for elements on the same page. 
        Placing labels in different areas makes it more difficult for users to find them and can lead to confusion. 
        Where possible, use the default placement.
      `
    }
  }
}

export const colors = () => (
  <>
    <figure style={{ position: 'relative' }}>
      <img src="https://cgui.campgladiator.com/images/shirt.jpg" width="200" />
      <legend className="image-label image-label--tr">Label</legend>
    </figure>
    <figure style={{ position: 'relative' }}>
      <img src="https://cgui.campgladiator.com/images/shirt.jpg" width="200" />
      <legend className="image-label image-label--navy image-label--tr">
        Label
      </legend>
    </figure>
    <figure style={{ position: 'relative' }}>
      <img src="https://cgui.campgladiator.com/images/shirt.jpg" width="200" />
      <legend className="image-label image-label--gladiator image-label--tr">
        Label
      </legend>
    </figure>
  </>
)

colors.story = {
  parameters: { 
    layout: { columns: 3 },
    info: {
      text: `
        ### Label Colors
        Colors for labels are designed to be used to help create visual relationships between categories. 
        For example, if you have a label for 'Sale' and another for 'New' you might use Navy for all of the 
        'New' item labels and Red for all of the 'Sale' item labels.
      `
    }
  }
}

export const sizes = () => (
  <>
    <figure style={{ position: 'relative' }}>
      <img src="https://cgui.campgladiator.com/images/shirt.jpg" width="200" />
      <legend className="image-label image-label--tr">Label</legend>
    </figure>
    <figure style={{ position: 'relative' }}>
      <img src="https://cgui.campgladiator.com/images/shirt.jpg" width="200" />
      <legend className="image-label image-label--tr image-label--small">
        Label
      </legend>
    </figure>
  </>
)

sizes.story = {
  parameters: { 
    layout: true,
    info: {
      text: `
        ### Label Sizing
        Sizes for labels convey heirarchy and meaning and can help drive attention and engagement to
        important calls-to-action.
      `
    }
  }
}

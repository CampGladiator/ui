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
  parameters: { layout: { rows: 2 } },
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
  parameters: { layout: { columns: 3 } },
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
  parameters: { layout: true },
}

import React from 'react'

export default {
  title: 'Base|Typography',
}

export const headings = () => (
  <>
    <div>
      <h1 className="font-gotham">heading 1</h1>
      <h2 className="font-gotham">heading 2</h2>
      <h3 className="font-gotham">heading 3</h3>
      <h4 className="font-gotham">heading 4</h4>
      <h5 className="font-gotham">heading 5</h5>
      <h6 className="font-gotham">heading 6</h6>
    </div>
    <div className="text-left">
      <h1 className="font-united font-united--h1">heading 1</h1>
      <h2 className="font-united font-united--h2">heading 2</h2>
      <h3 className="font-united font-united--h3">heading 3</h3>
      <h4 className="font-united font-united--h4">heading 4</h4>
      <h5 className="font-united font-united--h5">heading 5</h5>
      <h6 className="font-united font-united--h6">heading 6</h6>
    </div>
  </>
)

const headingsInfoText = `
  ## TYPOGRAPHY
  Typography for CG for UI's is strictly limited to our two main font families: 'United Italic Condensed Heavy' and 'Gotham'. 
  Used together, these typefaces unify our brand and work well to communicate the energy and mission of CG.

  ### UNITED HEADINGS
  United font is a display heading font only. It is well-suited for large page header sections. 
  Rarely if ever should United headings be used in tandem. Typically, if a subheading or sibling heading is needed, 
  Gotham is the best choice. Additionally, United should be the larger of the paired text, 
  using Gotham for the subheading and/or smaller text sections. 
  It's best to use this font sparingly in order to maximize it's visual impact. 
  As per CG brand standards, the United font must always be ALL-CAPS.

  ### GOTHAM HEADINGS
  Gotham headings are more versitile than United and can be useful in a larger array of situations. 
  When creating a heading/subheading that both use the Gotham font, 
  try pairing an H1, H2, or H3 with an H4, or H5. Since H1-H3 use a bold font-weight and H4-H5 use the normal font-weight, 
  these groupings tend to be more visually appealing and make it easier to discern hierarchy. 
  Example: H2 heading text would pair well with H5 subheading text. Gotham headings should always be ALL-CAPS.
`

headings.story = {
  parameters: {
    layout: { rows: 1, gap: '0 100px' },
    info: {
      text: headingsInfoText,
    },
  },
}

export const sizes = () => (
  <>
    <span>
      <code class="text-navy">.text-xxl</code> <small>(48px)</small>
    </span>
    <span>
      <code class="text-navy">.text-xl</code> <small>(32px)</small>
    </span>
    <span>
      <code class="text-navy">.text-l</code> <small>(24px)</small>
    </span>
    <span>
      <code class="text-navy">.text-m</code> <small>(18px)</small>
    </span>
    <span>
      <code class="text-navy">.text-s</code> <small>(16px)</small>
    </span>
    <span>
      <code class="text-navy">.text-xs</code> <small>(14px)</small>
    </span>
    <span className="text-truncate text-xxl">
      The quick brown fox jumps over the lazy dog
    </span>
    <span className="text-truncate text-xl">
      The quick brown fox jumps over the lazy dog
    </span>
    <span className="text-truncate text-l">
      The quick brown fox jumps over the lazy dog
    </span>
    <span className="text-truncate text-m">
      The quick brown fox jumps over the lazy dog
    </span>
    <span className="text-truncate text-s">
      The quick brown fox jumps over the lazy dog
    </span>
    <span className="text-truncate text-xs">
      The quick brown fox jumps over the lazy dog
    </span>
  </>
)

const sizesInfoText = `
  ## SIZES
  Use font sizes to help convey importance and heirarchy. These overrides are designed specifically for the text.
`

sizes.story = {
  parameters: {
    layout: {
      template: '200px 700px',
      rows: 6,
      gap: '20px',
    },
    info: {
      text: sizesInfoText,
    },
  },
}

export const weights = () => (
  <>
    <span className="weight-3 text-xxl">Aa</span>
    <span className="weight-4 text-xxl">Aa</span>
    <span className="weight-bold text-xxl">Aa</span>
  </>
)

const weightsInfoText = `
  ## WEIGHTS
  These helper classes can be used to quickly and easily override text weights. 
  Font weight overrides will only work with Gotham font. 
  This can be useful for paragraph text and Gotham headings.
`

weights.story = {
  parameters: {
    layout: { cols: 3, gap: '20px' },
    info: {
      text: weightsInfoText,
    },
  },
}

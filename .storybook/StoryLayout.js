import React from 'react'

const makeColumnTemplate = (template, columns) =>
  template ? template : columns ? `repeat(${columns}, 1fr)` : 'auto'

export default ({
  children,
  background,
  rows = 1,
  columns,
  justify = 'left',
  template,
  offsetTop = 0,
  gap = 0,
  height = 'auto',
}) => (
  <>
    <style>{`
      #story-root {
        background: ${background};
        margin: auto;
        max-height: 100%;
        display: grid;
        grid-template-rows: repeat(${rows}, 1fr);
        grid-template-columns: ${makeColumnTemplate(template, columns)};
        grid-auto-flow: column;
        justify-items: ${justify};
        align-items: center;
        gap: ${gap};
        width: 100vw;
        padding: 100px;
        padding-top: ${100 + offsetTop}px;
        justify-content: center;
        position: relative;
        height: ${height};
      }
    `}</style>
    {children}
  </>
)

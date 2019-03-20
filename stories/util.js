import React from 'react'

export const StoryLayout = ({
  children,
  background,
  rows = 1,
  columns = 1,
  template,
  gap,
}) => (
  <div
    style={{
      background,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        margin: 'auto',
        maxHeight: '100%',
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: template || `repeat(${columns}, 1fr)`,
        gridAutoFlow: 'column',
        justifyItems: 'left',
        alignItems: 'center',
        gap,
      }}
    >
      {children}
    </div>
  </div>
)

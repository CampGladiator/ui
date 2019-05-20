import React from 'react'

const EllipsisLoader = ({
}) => (
      <div className="loader">
        {[...Array(3)].map((n, i) => {
          return <div className="loader__circle" key={i + 1}></div>
        }
      )}
      </div>
  )



export default EllipsisLoader

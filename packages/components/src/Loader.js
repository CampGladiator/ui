import React from 'react'
import PropTypes from 'prop-types'

const Loader = ({
    localSize
}) => (
    <div> {/* className="loader" */}
        {[...Array(localSize)].map((n, i) => {
            return <div className="loader__circle" key={i + 1}></div>
        }
      )}
    </div>
)

Loader.defaultProps = {
  localSize: 3
}

Loader.propTypes = {
  localSize: PropTypes.number,

}

export default Loader

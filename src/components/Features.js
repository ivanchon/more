import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div className="row text-center">
        <div key={item.title} className="col-12">
          <p className="has-text-centered">
            <img alt="" src={item.image} />
          </p>
          <p>{item.title}</p>
        </div>
        <div className="col-6">
          <p>{item.text}</p>
        </div>
        <div className="col-6">
          <p>{item.text2}</p>
        </div>
      </div>
    ))}


  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      text2: PropTypes.string,
    })
  ),
}

export default FeatureGrid

import React from 'react'
import PropTypes from 'prop-types'
import { QAPageTemplate } from '../../templates/qa-page'

const QAPagePreview = ({ entry, getAsset }) => {

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <QAPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      testimonials={testimonials}
    />
  )
}

QAPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default QAPagePreview

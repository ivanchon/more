import React from 'react'
import PropTypes from 'prop-types'
import { AlbumsPageTemplate } from '../../templates/albums-page'

const AlbumsPagePreview = ({ entry, widgetFor }) => (
  <AlbumsPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    heading={entry.getIn(['data', 'heading'])}
    description={entry.getIn(['data', 'description'])}
    content={widgetFor('body')}

  />
)

AlbumsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AlbumsPagePreview

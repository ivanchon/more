import React from 'react'
import PropTypes from 'prop-types'
import { AlbumsPageTemplate } from '../../templates/albums-page'

const AlbumsPagePreview = ({ entry, widgetFor }) => (
  <AlbumsPageTemplate
    title={entry.getIn(['data', 'title'])}
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

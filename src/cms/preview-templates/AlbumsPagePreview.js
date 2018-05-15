import React from 'react'
import PropTypes from 'prop-types'
import { AlbumsPageTemplate } from '../../templates/albums-page'

const AlbumsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'songs', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <AlbumsPageTemplate
      title={entry.getIn(['data', 'title'])}
      year={entry.getIn(['data', 'heading'])}
      image={entry.getIn(['data', 'image'])}
      aboutEs={entry.getIn(['data', 'aboutEs'])}
      aboutEn={entry.getIn(['data', 'aboutEn'])}
      songs={{ blurbs }}
    />
  )
}

AlbumsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AlbumsPagePreview

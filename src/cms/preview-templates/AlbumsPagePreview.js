import React from 'react'
import PropTypes from 'prop-types'
import { AlbumsPageTemplate } from '../../templates/albums-page'

const AlbumsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'songs', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <AlbumsPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      year={entry.getIn(['data', 'heading'])}
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

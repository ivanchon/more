import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { withPrefix } from 'gatsby-link'

import ImageGallery from 'react-image-gallery';

import GalleryAlice from '../components/GalleryAlice'



//img imports
import reco from '../img/record.png'
import amsd from '../img/alco-amor-supremo-d.jpg'
import amsu from '../img/alco-amor-supremo.jpg'


export default class GalleryPage extends React.Component {


  render() {


    const images = [
      {
        original: '/img/gallery/CM1.jpg',
        thumbnail: '/img/gallery/CM1.jpg',
      },
      {
        original: '/img/gallery/CM2.jpg',
        thumbnail: '/img/gallery/CM2.jpg'
      },
      {
        original: '/img/gallery/CM3.jpg',
        thumbnail: '/img/gallery/CM3.jpg'
      },
      {
        original: '/img/gallery/CM4.jpg',
        thumbnail: '/img/gallery/CM4.jpg'
      },
      {
        original: '/img/gallery/CM5.jpg',
        thumbnail: '/img/gallery/CM5.jpg'
      },
      {
        original: '/img/gallery/CM1.jpg',
        thumbnail: '/img/gallery/CM1.jpg',
      },
      {
        original: '/img/gallery/CM2.jpg',
        thumbnail: '/img/gallery/CM2.jpg'
      },
      {
        original: '/img/gallery/CM3.jpg',
        thumbnail: '/img/gallery/CM3.jpg'
      },
      {
        original: '/img/gallery/CM4.jpg',
        thumbnail: '/img/gallery/CM4.jpg'
      },
      {
        original: '/img/gallery/CM5.jpg',
        thumbnail: '/img/gallery/CM5.jpg'
      },
      {
        original: '/img/gallery/CM1.jpg',
        thumbnail: '/img/gallery/CM1.jpg',
      },
      {
        original: '/img/gallery/CM2.jpg',
        thumbnail: '/img/gallery/CM2.jpg'
      },
      {
        original: '/img/gallery/CM3.jpg',
        thumbnail: '/img/gallery/CM3.jpg'
      },
      {
        original: '/img/gallery/CM4.jpg',
        thumbnail: '/img/gallery/CM4.jpg'
      },
      {
        original: '/img/gallery/CM5.jpg',
        thumbnail: '/img/gallery/CM5.jpg'
      },
      {
        original: '/img/gallery/CM6.jpg',
        thumbnail: '/img/gallery/CM6.jpg'
      }


    ]


    return (

      <section id="galeria" className="header-push-down music-section">
          <div className="container py-5 pb-10">
              <div className="row">
                <div className="col">
                  <h2 className="headers-h2">
                    Galería
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1> GALERIA mia</h1>
                  <GalleryAlice />
                </div>
            </div>

              <div className="row">
                <div className="col">
                  <h1> GALERIA 1</h1>
                  <ImageGallery items={images} showPlayButton={false} showPlayButton={false} disableThumbnailScroll={false} />
                </div>
            </div>
          </div>
      </section>
    )
  }
}

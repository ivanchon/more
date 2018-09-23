import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {injectGlobal} from 'styled-components'

import SongSingle from '../components/SongSingle'
//image imports
import amsd from '../img/alco-amor-supremo-d.jpg'
import coll from '../img/alco-colab.jpg'


injectGlobal`

#album-single{
  h3 {
    text-align: left;
    font-size: 40px;
    font-family: 'Pathway Gothic One', sans-serif;
    font-weight: 100 !important;
    color: #f3f0f0;
    margin-top: 0 !important;
  }

  h4{
    color: #fff;
    font-family: 'Courgette', cursive;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin-top: 3rem;
    }
  }

  p {  color: #808080;}
}

`;


export default class MusicPage extends React.Component {
  render() {

    return (
      <section id="album-single" className="header-push-down music-section">
        <div className="container py-5 pb-10">
          <div className="row">
            <div className="col-12">
              <h2 className="h2-headers pb-5">
                Covers
              </h2>

            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-5">
              <img className="img-fluid"
                style={{ borderRadius: '5px' }}
                src={coll} alt="Amor Supremo Desnudo"
              />
            </div>
            <div className="col-md-7 text-center">
              <h4>Acerca de</h4>
              <p>Aquí puedes encontrar todas las colaboraciones en las que he participado a lo largo de mi carrera, asi como tributos que me han invitado. Gracias a Dios todo esto ha sido orgánicamente, invitaciones de pura naturalidad y ganas de colaborar entre artistas que se entienden y comparten visiones y sueños. </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1196005&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

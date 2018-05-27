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
                Colaboraciones
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
              <p>Aquí puedes encontrar todas las colaboraciones en las que he participado a lo largo de mi carrera, asi como tributos que me han invitado. Gracias a Dios todo esto ha sido orgánicamente, invitaciones de pura naturalidad y ganas de colaborar entre artistas que se entienden y comparten visiones y sueños. He aprendido de cada tributo y de cada colaboración de manera importante ya que cada artista es un mundo diferente lleno de emociones y sentimientos que quieren comunicar algo y ese algo es lo que nos une pero el proceso de creación siempre es muy interesante para mi, pues no solamente conozco al artista si no al humano detrás y su técnica al crear su arte mas personal que en este caso es la música. Siempre les estaré agradecida a cada uno de ellos.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <iframe src="https://open.spotify.com/embed?uri=spotify:user:ivnprorsum:playlist:10V5VPJAESCozIjYtGbzVE&theme=white" width="100%" height="1440" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

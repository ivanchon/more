import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Music from '../components/Music'
//import AlbumCont from '../components/Music'
//import { Record, Album, Title, Arrow, CoverHolder, Cover, Label, Button } from '../components/Music'


//image imports
/*
import reco from '../img/record.png'
import amsd from '../img/alco-amor-supremo-d.jpg'
import amsu from '../img/alco-amor-supremo.jpg'
import dell from '../img/alco-dejenme-llorar.jpg'
import deld from '../img/alco-dejenme-llorar-d.jpg'
import juse from '../img/alco-jugando.jpg'
import mido from '../img/alco-mientras.jpg'
import apre from '../img/alco-aprendiendo.jpg'
import nino from '../img/alco-nino.jpg'
import coll from '../img/alco-colab.jpg'
*/


export default class MusicPage extends React.Component {
  render() {

    return (
      <section id="musica" className="header-push-down music-section">
        <div className="container pb-10">
          <div className="row">
            <div className="col">
              <h2 className="headers-h2">
                Música
              </h2>
            </div>
          </div>
          <Music/>
        </div>
      </section>
    )
  }
}

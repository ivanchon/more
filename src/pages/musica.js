import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'


import Music from '../components/Music'


export default class MusicPage extends React.Component {
  render() {

    return (
      <section id="musica" className="header-push-down music-section">
          <div className="container py-5 pb-10">
              <div className="row">
                <div className="col">
                  <h2 className="headers-h2">
                    Música
                  </h2>
                </div>
              </div>
              <div className="row">
              <Music/>
            </div>
          </div>
      </section>
    )
  }
}

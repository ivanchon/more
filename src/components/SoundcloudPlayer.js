import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectGlobal} from 'styled-components'
import {Container, Row, Col} from 'reactstrap'

injectGlobal`
.player {
  position: fixed;
  bottom: -30px;
  width: 100%;
  z-index: 2000;
}
`;


const SoundcloudPlayer = () => (
    <div className="player">
      <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280133854&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </div>
)

export default SoundcloudPlayer

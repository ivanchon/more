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
}
`;


const SpotPlayer = () => (
    <div className="player">
      <iframe src="https://open.spotify.com/embed?uri=spotify:user:ivnprorsum:playlist:10V5VPJAESCozIjYtGbzVE&theme=white" width="100%" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
)

export default SpotPlayer

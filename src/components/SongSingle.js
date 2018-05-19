import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { v4 } from 'uuid'


const SongWrapper = styled.div`
  text-align: center;
`;

var num = 1;
var numa= 1;
var numb= 1;

const SongSingle = props => (
  <SongWrapper key={v4()} className="row text-center">
    <div className='tab'>
      <input id={'tab-'+numa++} type="checkbox" name="tabs"/>
      <label htmlFor={'tab-'+numb++} style={{width:'100%'}}>{props.titulo}</label>
      <div className="tab-content row" style={{borderTop:'1px solid #ddd'}}>
        <div className="col-6">
          <p>{props.letrasEs}</p>
        </div>
        <div className="col-6">
          <p>{props.letrasEn}</p>
        </div>
      </div>
    </div>
  </SongWrapper>


);


export default SongSingle

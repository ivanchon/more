import React from 'react'
import PropTypes from 'prop-types'
//import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {injectGlobal} from 'styled-components'
import { v4 } from 'uuid'

injectGlobal`
/* Acordeon styles */
.tab {
  position: relative;
  margin-bottom: 1px;
  width: 100%;
  color: #808080;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 3px;

  label {
    margin-bottom: 0;
  }
}
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
label {
  position: relative;
  display: block;
  padding: 0 0 0 1em;
  background: #f3f0f0;
  font-weight: bold;
  line-height: 3;
  cursor: pointer;
}

.blue label {
  background: #2980b9;
}
.tab-content {
  max-height: 0;

  background: #f5f5f5;
  -webkit-transition: max-height .35s;
  -o-transition: max-height .35s;
  transition: max-height .35s;
}
.blue .tab-content {
  background: #3498db;
}
.tab-content p {
  margin: 1em;
}
/* :checked */
input:checked ~ .tab-content {
  max-height: 40em;
}
/* Icon */
label::after {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 3em;
  height: 3em;
  line-height: 3;
  text-align: center;
  -webkit-transition: all .35s;
  -o-transition: all .35s;
  transition: all .35s;
}
input[type=checkbox] + label::after {
  content: "+";
}
input[type=radio] + label::after {
  content: "x";
}
input[type=checkbox]:checked + label::after {
  transform: rotate(315deg);
}
input[type=radio]:checked + label::after {
  transform: rotateX(180deg);
}
`;

var num = 1;
var numa= 1;
var itemprint = 1;

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div key={v4()} className="row text-center">
        <div className='tab'>
          <input id={'tab-'+num++} type="checkbox" name="tabs"/>
          <label htmlFor={'tab-'+numa++} style={{width:'100%'}}>{item.title}</label>
          <div className="tab-content row" style={{borderTop:'1px solid #ddd'}}>
            <div className="col-6">
              {/*<p> {item.lyricsEs} </p>*/}
              <p dangerouslySetInnerHTML={{ __html: item.lyricsEs }} />
            </div>
            <div className="col-6">
              {/*<p>{item.lyricsEn}</p>*/}
              <p dangerouslySetInnerHTML={{ __html: item.lyricsEn }} />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      lyricsEs: PropTypes.string,
      lyricsEn: PropTypes.string,
    })
  ),
}

export default FeatureGrid

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {injectGlobal} from 'styled-components'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

injectGlobal`

`;

//image imports
import reco from '../img/record.png'
import cm01 from '../img/gallery/CM1.jpg'
import cm02 from '../img/gallery/CM2.jpg'
import cm03 from '../img/gallery/CM3.jpg'
import cm04 from '../img/gallery/CM4.jpg'
import cm05 from '../img/gallery/CM5.jpg'



const GalleryAlice = () => (

	<AliceCarousel fadeOutAnimation={true} buttonsDisabled={true}>
	    <img src={cm01} className="yours-custom-class" />
	    <img src={cm02} className="yours-custom-class" />
	    <img src={cm03} className="yours-custom-class" />
	    <img src={cm04} className="yours-custom-class" />
	    <img src={cm05} className="yours-custom-class" />
	  </AliceCarousel>


)

export default GalleryAlice

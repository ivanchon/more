import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {injectGlobal} from 'styled-components'

injectGlobal`

.slider{
	max-width: 90%; /*Same as width of the large image*/
	position: relative;
  background-color: rgba(255,105,180, 0.3);
	/*Instead of height we will use padding*/
	padding-top: 650px; /*That helps bring the labels down*/
	margin: 100px auto;
	/*Lets add a shadow*/
	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.75);
}


/*Last thing remaining is to add transitions*/
.slider>img{
	position: absolute;
	left: 0; top: 0;
	transition: all 0.5s;
  /*width: 100%;
  display: block;*/
}

.slider input[name='slide_switch'] {
	display: none;
}

.slider label {
	/*Lets add some spacing htmlFor the thumbnails*/
	margin: 18px 0 0 18px;
	border: 3px solid #999;

	float: left;
	cursor: pointer;
	transition: all 0.5s;

	/*Default style = low opacity*/
	opacity: 0.6;
}

.slider label img{
	display: block;
}

/*Time to add the click effects*/
.slider input[name='slide_switch']:checked+label {
	border-color: #666;
	opacity: 1;
}

/*Clicking any thumbnail now should change its opacity(style)*/
/*Time to work on the main images*/
.slider input[name='slide_switch'] ~ img {
	opacity: 0;
	transform: scale(1.1);
}
/*That hides all main images at a 110% size
On click the images will be displayed at normal size to complete the effect
*/
.slider input[name='slide_switch']:checked+label+img {
	opacity: 1;
	transform: scale(1);
}
/*Clicking on any thumbnail now should activate the image related to it*/

`;


//image imports
import reco from '../img/record.png'
import cm01 from '../img/gallery/CM1.jpg'
import cm02 from '../img/gallery/CM2.jpg'
import cm03 from '../img/gallery/CM3.jpg'
import cm04 from '../img/gallery/CM4.jpg'



const Gallery = () => (

    <div className="slider">
    	<input type="radio" name="slide_switch" id="id1" defaultChecked="checked"/>
    	<img src='/img/gallery/CM3.jpg' />
      <label htmlFor="id1">
        <img src={cm01} width="100"/>
      </label>

    	<input type="radio" name="slide_switch" id="id2" />
    	<label htmlFor="id2">
    		<img src={cm02} width="100"/>
    	</label>
    	<img src="/img/gallery/CM2.jpg" className="img-fluid"/>

    	<input type="radio" name="slide_switch" id="id3"/>
    	<label htmlFor="id3">
    		<img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg" width="100"/>
    	</label>
    	<img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg"/>

    	<input type="radio" name="slide_switch" id="id4"/>
    	<label htmlFor="id4">
    		<img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg" width="100"/>
    	</label>
    	<img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg"/>

    	<input type="radio" name="slide_switch" id="id5"/>
    	<label htmlFor="id5">
    		<img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg" width="100"/>
    	</label>
    	<img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg"/>

      <input type="radio" name="slide_switch" id="id6"/>
      <label htmlFor="id6">
        <img src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg" width="100"/>
      </label>
      <img src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg"/>

      <input type="radio" name="slide_switch" id="id7"/>
      <label htmlFor="id7">
        <img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg" width="100"/>
      </label>
      <img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg"/>

      <input type="radio" name="slide_switch" id="id8"/>
      <label htmlFor="id8">
        <img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg" width="100"/>
      </label>
      <img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg"/>

      <input type="radio" name="slide_switch" id="id9"/>
      <label htmlFor="id9">
        <img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg" width="100"/>
      </label>
      <img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg"/>
    </div>

)

export default Gallery

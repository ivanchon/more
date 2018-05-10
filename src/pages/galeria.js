import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {injectGlobal} from 'styled-components'

import AliceCarousel from 'react-alice-carousel'

//image imports
import cm01 from '../img/gallery/CM1.jpg'
import cm02 from '../img/gallery/CM2.jpg'
import cm03 from '../img/gallery/CM3.jpg'
import cm04 from '../img/gallery/CM4.jpg'
import cm05 from '../img/gallery/CM5.jpg'

//wallpapers-thumbs
import thd1 from '../img/wallpapers/thumbD_01.png'
import thd2 from '../img/wallpapers/thumbD_02.png'
import thd3 from '../img/wallpapers/thumbD_03.png'
import thm1 from '../img/wallpapers/thumbM_01.png'
import thm2 from '../img/wallpapers/thumbM_02.png'
import thm3 from '../img/wallpapers/thumbM_03.png'

//wallpapers-hires
import wpa1 from '../img/wallpapers/2560x1440-A.jpg'
import wpa2 from '../img/wallpapers/1920x1440-A.jpg'
import wpa3 from '../img/wallpapers/1920x1200-A.jpg'
import wpa4 from '../img/wallpapers/1920x1080-A.jpg'


injectGlobal`

  .alice-carousel__wrapper{
    max-height: 730px;
    border: none;

    @media (min-width: 992px) and (max-width: 1200px) {
      max-height: 618px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      max-height: 458px;
      object-fit: contain;
    }

    @media (min-width: 576px) and (max-width: 767px) {
      max-height: 338px;
      object-fit: contain;
    }
  }

  .alice-carousel{
    padding: 0px;
      border: 0px;
  }

  .img-holder{
    text-align: center;
  }

  .img-holder img{
    @media (min-width: 576px) and (max-width: 767px) {
      object-fit: contain;
    }
  }

  .carousel__thumbs {
    list-style-type: none;
    text-align: center;
  }

  .carousel__thumbs li{
    display: inline-block;
    max-height: 100px;
    padding: 0 5px;
    margin-bottom: 10px;
  }

  .carousel__thumbs li img{
    max-height: 100px;
  }

  .wallres{
    text-transform: uppercase;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 2px;
    font-family: 'Pathway Gothic One', sans-serif;

    @media (max-width: 576px) {
      margin-top: 0.5rem;
      margin-bottom: 0.25rem;
    }

  }

`;

const WallBlock = styled.div`
  background: pink;
`;

const BtnWall = styled.a`
  background: transparent;
  border: 2px solid #FFF;
  border-radius: 0px;
  color: #FFF;
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  /*max-width: 10rem;*/
  padding: 5px;
  transition: 0.5s;

  &:hover{
    background-color: #eed0d2;
    text-decoration: none;
    color: #fff;
    transition: 0.5s;
  }

  @media (max-width: 767px) {
    max-width: 15rem;
    margin: 0.5rem auto;
  }

`;


const WallpaperBlock = props => (
  <WallBlock className={props.class}>
    <div className="row">
      <div className="col-12 col-md-7">
        <img src={props.thumb} className="img-fluid" alt=""/>
      </div>
      <div className="col-12 col-md-5">
        <p>Resolucion</p>
        <a href={props.image1} target="_blank">{props.sizeDesc1}</a>
        <a href={props.image2} target="_blank">{props.sizeDesc2}</a>
        <a href={props.image3} target="_blank">{props.sizeDesc3}</a>
        <a href={props.image4} target="_blank">{props.sizeDesc4}</a>
      </div>
    </div>
  </WallBlock>
);




export default class GalleryPage2 extends React.Component {
  renderThumbs = () =>
  <ul className="carousel__thumbs">
    {
      [cm02,cm01,cm03,cm04,cm05,cm01,cm02,cm03,cm04,cm05,cm01,cm02,cm03,cm04,cm05].map((item, i) =>
        <li key={i} onClick={() => this.Carousel._onDotClick(i)}><img src={item} className="" /></li>)
    }
  </ul>;

  render() {
  return (
    <section id="galeria" className="header-push-down music-section">
    <div className="container py-5 pb-10">
      <div className="row">

        <div className="col">
          <h2 className="h2-headers">Galería</h2>
        </div>
      </div>
        <div className="row">
          <div className="col">
            <AliceCarousel style={{ marginBottom: '2rem'}}
              dotsDisabled={true}
              buttonsDisabled={true}
              fadeOutAnimation={true}
              ref={ el => this.Carousel = el }
            >
              <div className="img-holder"><img className="img-fluid" src={cm02}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm01}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm03}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm04}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm05}/></div>
            </AliceCarousel>
            {/*<h3>Navigation</h3>
            <button onClick={() => this.Carousel._slidePrev()}>Prev button</button>
            <button onClick={() => this.Carousel._slideNext()}>Next button</button>*/}
            { this.renderThumbs() }
          </div>
        </div>
        <div className="row pt-5">
          <WallBlock
            class="col-12 col-lg-6"
            thumb={thd1}
            image1={wpa1}
            image2={wpa2}
            image3={wpa3}
            image4={wpa4}
            sizeDesc1="2560 x 1440"
            sizeDesc2="1920 x 1440"
            sizeDesc3="1920 x 1200"
            sizeDesc4="1920 x 1080"
          />
          <div className="col">
            <h2 className="h2-headers">Wallpapers</h2>
            <h2 className="h3-headers">Desktop</h2>
          </div>
        </div>
        <div className="row pt-2 pb-5 text-center mx-auto">
          <div className="col-12 col-lg-6 pb-5">
            <div class="row">
              <div class="col-12 col-sm-7">
                {/*<!-- ONE -->*/}
                <img src={thd1} className="img-fluid" alt=""/>
              </div>
              <div class="col-12 col-sm-5">
                <p className="wallres">Resoluci&oacute;n</p>
                <BtnWall href={wpa1} target="_blank">2560 x 1440</BtnWall>
                <BtnWall href={wpa2} target="_blank">1920 x 1440</BtnWall>
                <BtnWall href={wpa3} target="_blank">1920 x 1200</BtnWall>
                <BtnWall href={wpa4} target="_blank">1920 x 1080</BtnWall>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 pb-5">
            <div class="row">
              <div class="col-12 col-md-7">
                {/*<!-- TWO -->*/}
                <img src={thd2} className="img-fluid" alt=""/>
              </div>
              <div class="col-12 col-md-5">
                <p className="wallres">Resoluci&oacute;n</p>
                <BtnWall href={wpa1} target="_blank">2560 x 1440</BtnWall>
                <BtnWall href={wpa2} target="_blank">1920 x 1440</BtnWall>
                <BtnWall href={wpa3} target="_blank">1920 x 1200</BtnWall>
                <BtnWall href={wpa4} target="_blank">1920 x 1080</BtnWall>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12 col-md-7">
                {/*<!-- THREE -->*/}
                <img src={thd3} className="img-fluid" alt=""/>
              </div>
              <div class="col-12 col-md-5">
                <p className="wallres">Resoluci&oacute;n</p>
                <BtnWall href={wpa1} target="_blank">2560 x 1440</BtnWall>
                <BtnWall href={wpa2} target="_blank">1920 x 1440</BtnWall>
                <BtnWall href={wpa3} target="_blank">1920 x 1200</BtnWall>
                <BtnWall href={wpa4} target="_blank">1920 x 1080</BtnWall>
              </div>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
  }
  }

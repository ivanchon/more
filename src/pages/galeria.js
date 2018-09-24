import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {injectGlobal} from 'styled-components'

import AliceCarousel from 'react-alice-carousel'

//image gallery  imports
import cm01 from '../img/gallery/CM1.jpg'
import cm02 from '../img/gallery/CM2.jpg'
import cm03 from '../img/gallery/CM3.jpg'
import cm04 from '../img/gallery/CM4.jpg'
import cm05 from '../img/gallery/CM5.jpg'
import cm06 from '../img/gallery/CM6.jpg'
import cm07 from '../img/gallery/CM7.jpg'
import cm08 from '../img/gallery/CM8.jpg'
import cm09 from '../img/gallery/CM9.jpg'
import cm10 from '../img/gallery/CM10.jpg'
import cm11 from '../img/gallery/CM11.jpg'
import cm12 from '../img/gallery/CM12.jpg'
import cm13 from '../img/gallery/CM13.jpg'
import cm14 from '../img/gallery/CM14.jpg'
import cm15 from '../img/gallery/CM15.jpg'
import cm16 from '../img/gallery/CM16.jpg'
import cm17 from '../img/gallery/CM17.jpg'
import cm18 from '../img/gallery/CM18.jpg'
import cm19 from '../img/gallery/CM19.jpg'
import cm20 from '../img/gallery/CM20.jpg'
import cm21 from '../img/gallery/CM21.jpg'
import cm22 from '../img/gallery/CM22.jpg'
import cm23 from '../img/gallery/CM23.jpg'
import cm24 from '../img/gallery/CM24.jpg'
import cm25 from '../img/gallery/CM25.jpg'
import cm26 from '../img/gallery/CM26.jpg'
import cm27 from '../img/gallery/CM27.jpg'
import cm28 from '../img/gallery/CM28.jpg'
import cm29 from '../img/gallery/CM29.jpg'
import cm30 from '../img/gallery/CM30.jpg'
import cm31 from '../img/gallery/CM31.jpg'
import cm32 from '../img/gallery/CM32.jpg'
import cm33 from '../img/gallery/CM33.jpg'
import cm34 from '../img/gallery/CM34.jpg'
import cm35 from '../img/gallery/CM35.jpg'
import cm36 from '../img/gallery/CM36.jpg'
import cm37 from '../img/gallery/CM37.jpg'
import cm38 from '../img/gallery/CM38.jpg'
import cm39 from '../img/gallery/CM39.jpg'
import cm40 from '../img/gallery/CM40.jpg'
import cm41 from '../img/gallery/CM41.jpg'
import cm42 from '../img/gallery/CM42.jpg'
import cm43 from '../img/gallery/CM43.jpg'
import cm44 from '../img/gallery/CM44.jpg'
import cm45 from '../img/gallery/CM45.jpg'
import cm46 from '../img/gallery/CM46.jpg'
import cm47 from '../img/gallery/CM47.jpg'
import cm48 from '../img/gallery/CM48.jpg'
import cm49 from '../img/gallery/CM49.jpg'
import cm50 from '../img/gallery/CM50.jpg'


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

import wpb1 from '../img/wallpapers/2560x1440-B.jpg'
import wpb2 from '../img/wallpapers/1920x1440-B.jpg'
import wpb3 from '../img/wallpapers/1920x1200-B.jpg'
import wpb4 from '../img/wallpapers/1920x1080-B.jpg'

import wpc1 from '../img/wallpapers/2560x1440-C.jpg'
import wpc2 from '../img/wallpapers/1920x1440-C.jpg'
import wpc3 from '../img/wallpapers/1920x1200-C.jpg'
import wpc4 from '../img/wallpapers/1920x1080-C.jpg'

//wallpapers-mobile
import wpma1 from '../img/wallpapers/A-IpadPro.jpg'
import wpma2 from '../img/wallpapers/A-Galaxy-IphonePlus.jpg'
import wpma3 from '../img/wallpapers/A-Galaxy-IphonePlus.jpg'
import wpma4 from '../img/wallpapers/A-Iphone5-5s.jpg'

//wallpapers-mobile
import wpmb1 from '../img/wallpapers/A-IpadPro.jpg'
import wpmb2 from '../img/wallpapers/A-Galaxy-IphonePlus.jpg'
import wpmb3 from '../img/wallpapers/A-Galaxy-IphonePlus.jpg'
import wpmb4 from '../img/wallpapers/A-Iphone5-5s.jpg'

//wallpapers-mobile
import wpmc1 from '../img/wallpapers/A-IpadPro.jpg'
import wpmc2 from '../img/wallpapers/A-Galaxy-IphonePlus.jpg'
import wpmc3 from '../img/wallpapers/A-Galaxy-IphonePlus.jpg'
import wpmc4 from '../img/wallpapers/A-Iphone5-5s.jpg'



injectGlobal`

  .alice-carousel__wrapper {
    max-height: 730px;
    border: solid 1px transparent;

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
  background: transparent;
`;

const BtnWall = styled.a`
  background: transparent;
  border: 2px solid #FFF;
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
  <WallBlock className="col-12 col-lg-6 py-4">
    <div className="row">
      <div className="col-12 col-sm-7">
        <img src={props.thumb} className="img-fluid" alt=""/>
      </div>
      <div className="col-12 col-sm-5">
        <p className="wallres">Resolucion</p>
        <BtnWall href={props.image1} target="_blank">{props.sizeDesc1}</BtnWall>
        <BtnWall href={props.image2} target="_blank">{props.sizeDesc2}</BtnWall>
        <BtnWall href={props.image3} target="_blank">{props.sizeDesc3}</BtnWall>
        <BtnWall href={props.image4} target="_blank">{props.sizeDesc4}</BtnWall>
      </div>
    </div>
  </WallBlock>
);


const WallpaperMBlock = props => (
  <WallBlock className="col-12 col-lg-6 py-4">
    <div className="row">
      <div className="col-12 col-sm-7">
        <img src={props.thumb} className="img-fluid" alt=""/>
      </div>
      <div className="col-12 col-sm-5">
        <p className="wallres">Resolucion</p>
        <BtnWall href={props.image1} target="_blank">{props.sizeDesc1}</BtnWall>
        <BtnWall href={props.image2} target="_blank">{props.sizeDesc2}</BtnWall>
        <BtnWall href={props.image3} target="_blank">{props.sizeDesc3}</BtnWall>
        <BtnWall href={props.image4} target="_blank">{props.sizeDesc4}</BtnWall>
        <BtnWall href={props.image5} target="_blank">{props.sizeDesc5}</BtnWall>
      </div>
    </div>
  </WallBlock>
);


export default class GalleryPage2 extends React.Component {
  renderThumbs = () =>
  <ul className="carousel__thumbs">
    {
      [cm02,cm01,cm03,cm04,cm05,cm06,cm07,cm08,cm09,cm10,cm11,cm12,cm13,cm14,cm15,cm16,cm17,cm18,cm19,cm20,cm21,cm22,cm23,cm24,cm25,cm26,cm27,cm28,cm29,cm30,cm31,cm32,cm33,cm34,cm35,cm36,cm37,cm38,cm39,cm40,cm41,cm42,cm43,cm44,cm45,cm46,cm47,cm48,cm49,cm50].map((item, i) =>
        <li key={i} onClick={() => this.Carousel._onDotClick(i)}><img src={item} className="" /></li>)
    }
  </ul>;

  render() {
    
  return (
    <section id="galeria" className="header-push-down music-section">
    <div className="container pb-10">
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
              <div className=""><img className="img-fluid" src={cm02}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm01}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm03}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm04}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm05}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm06}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm07}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm08}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm09}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm10}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm11}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm12}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm13}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm14}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm15}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm16}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm17}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm18}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm19}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm20}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm21}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm22}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm23}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm24}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm25}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm26}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm27}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm28}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm29}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm30}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm31}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm32}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm33}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm34}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm35}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm36}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm37}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm38}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm39}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm40}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm41}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm42}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm43}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm44}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm45}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm46}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm47}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm48}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm49}/></div>
              <div className="img-holder"><img className="img-fluid" src={cm50}/></div>
            </AliceCarousel>
            {/*<h3>Navigation</h3>
            <button onClick={() => this.Carousel._slidePrev()}>Prev button</button>
            <button onClick={() => this.Carousel._slideNext()}>Next button</button>*/}
            { this.renderThumbs() }
          </div>
        </div>
        <div className="row pt-5">
          <div className="col">
            <h2 className="h2-headers">Wallpapers</h2>
            <h2 className="h3-headers">Desktop</h2>
          </div>
        </div>
        <div className="row pt-2 pb-5 text-center mx-auto">
          <div className="col-12 col-lg-6 pb-5">
            <div className="row">
              <div className="col-12 col-sm-7">
                {/*<!-- ONE -->*/}
                <img src={thd1} className="img-fluid" alt=""/>
              </div>
              <div className="col-12 col-sm-5">
                <p className="wallres">Resoluci&oacute;n</p>
                <BtnWall href={wpa1} target="_blank">2560 x 1440</BtnWall>
                <BtnWall href={wpa2} target="_blank">1920 x 1440</BtnWall>
                <BtnWall href={wpa3} target="_blank">1920 x 1200</BtnWall>
                <BtnWall href={wpa4} target="_blank">1920 x 1080</BtnWall>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 pb-5">
            <div className="row">
              <div className="col-12 col-sm-7">
                {/*<!-- TWO -->*/}
                <img src={thd2} className="img-fluid" alt=""/>
              </div>
              <div className="col-12 col-sm-5">
                <p className="wallres">Resolución</p>
                <BtnWall href={wpb1} target="_blank">2560 x 1440</BtnWall>
                <BtnWall href={wpb2} target="_blank">1920 x 1440</BtnWall>
                <BtnWall href={wpb3} target="_blank">1920 x 1200</BtnWall>
                <BtnWall href={wpb4} target="_blank">1920 x 1080</BtnWall>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12 col-sm-7">
                {/*<!-- THREE -->*/}
                <img src={thd3} className="img-fluid" alt=""/>
              </div>
              <div className="col-12 col-sm-5">
                <p className="wallres">Resolución</p>
                <BtnWall href={wpc1} target="_blank">2560 x 1440</BtnWall>
                <BtnWall href={wpc2} target="_blank">1920 x 1440</BtnWall>
                <BtnWall href={wpc3} target="_blank">1920 x 1200</BtnWall>
                <BtnWall href={wpc4} target="_blank">1920 x 1080</BtnWall>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col">
            <h2 className="h2-headers">Wallpapers</h2>
            <h2 className="h3-headers">Móvil</h2>
          </div>
        </div>
        <div className="row pt-2 pb-5 text-center mx-auto">
          <WallpaperBlock
            thumb={thm1}
            image1={wpma1}
            image2={wpma2}
            image3={wpma3}
            image4={wpma4}
            sizeDesc1="Galaxy • iPhone Plus"
            sizeDesc2="iPad"
            sizeDesc3="iPhone 6 • 7 • 8"
            sizeDesc4="iPhone 5S"
          />
          <WallpaperBlock
            thumb={thm2}
            image1={wpmb1}
            image2={wpmb2}
            image3={wpmb3}
            image4={wpmb4}
            sizeDesc1="Galaxy • iPhone Plus"
            sizeDesc2="iPad"
            sizeDesc3="iPhone 6 • 7 • 8"
            sizeDesc4="iPhone 5S"
          />
          <WallpaperBlock
            thumb={thm3}
            image1={wpmc1}
            image2={wpmc2}
            image3={wpmc3}
            image4={wpmc4}
            sizeDesc1="Galaxy • iPhone Plus"
            sizeDesc2="iPad"
            sizeDesc3="iPhone 6 • 7 • 8"
            sizeDesc4="iPhone 5S"
          />
        </div>
      </div>{/*<!-- whole container -->*/}
    </section>
  );
  }
  }

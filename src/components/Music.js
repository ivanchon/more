import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

//image imports
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

const Record = styled.img`
  max-width: 100%;
  height: auto;
  max-width: 280px;
  max-height: 280px;
  display: inline-block;
  position: absolute;
  right: -65px;
  bottom: 0;
  transition: all 0.6s ease-in-out;
  z-index: -1;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: 250px;
    max-height: 250px;
  }
`;

const Album = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;

  &:hover ${Record} {
    right: -95px;
  }

`;

const Title = styled.h3`
  background-color: green;
  display: none;
`;

const Arrow = styled.div`
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #808080;
  position: absolute;
  left: -10px;
  top: 37px;
  bottom: -20px;
  z-index: -1;
`;

const CoverHolder = styled.div`
  max-width: 280px;
  max-height: 280px;
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  background: #101113;
  box-shadow: 0 0 4px rgba(0, 0, 0, .5);

  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: 250px;
    max-height: 250px;
  }

`;


const Cover = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0.95;

  &:hover{
    opacity: 1;
  }

`;

const Label = styled.div`
    position: absolute;
    left: -10px;
    top: 0;
    background: #302d38;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    padding: 10px;
    z-index: 1;
`;

const Button = styled.div`
  background-color: transparent;
  border: 2px solid #FFF;
  color: #FFF;
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 2px;
  padding: 5px;
  white-space: nowrap;
  vertical-align: middle;
  transition: background-color .15s;

  &:hover{
    background-color: #eed0d2;
  }
`;

const AlbumCont = props => (
  <Album className="col-6 col-lg-4">
    <Link to={props.link}>
      <Title>{props.title}</Title>
      <CoverHolder>
          <Arrow></Arrow>
          <Record src={reco} className="vinyl" alt="record"/>
          <Cover src={props.cover} alt={props.title} />
          <Label>{props.label}</Label>
      </CoverHolder>
      <Button>Canciones y Letras</Button>
    </Link>
  </Album>
);


const Music = () => (

        <div className="row album-compo">
          <AlbumCont
            link="/albums/amor-supremo/"
            title="Amor Supremo Desnudo"
            cover={amsd}
            label="Nuevo"
          />
          <AlbumCont
            link="/albums/amor-supremo"
            title="Amor Supremo"
            cover={amsu}
            label="2015"
          />
          <AlbumCont
            link="/bio/"
            title="Déjenme Llorar Deluxe"
            cover={deld}
            label="deluxe"
          />
          <AlbumCont
            link="/bio/"
            title="Déjenme Llorar"
            cover={dell}
            label="2012"
          />
          <AlbumCont
            link="/bio/"
            title="Jugando en Serio"
            cover={juse}
            label="2011"
          />

          <AlbumCont
            link="/bio/"
            title="Mientras Dormías"
            cover={mido}
            label="2010"
          />

          <AlbumCont
            link="/bio/"
            title="Aprendiendo a Aprender"
            cover={apre}
            label="2009"
          />
          <AlbumCont
            link="/bio/"
            title="Niña del Tambor"
            cover={nino}
            label="Navideño"
          />

          <AlbumCont
            link="/bio/"
            title="Colaboraciones y Tributos"
            cover={coll}
            label="CM"
          />
        </div>

)

export default Music

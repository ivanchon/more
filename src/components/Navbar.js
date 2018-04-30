import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = () => (

  <header id="header" className="header">
          <div className="container ">


  <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: 'rgba(165, 165, 165, 0.9)', borderBottom: '1px solid #eed0d2'}}>
      <a className="navbar-brand" href="#">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Carla" style={{ width: '120px' }} />
          </figure>
        </Link>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">Menu</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item"><a className="scrollto nav-link" href="#promo">Inicio</a></li>
          <li className="nav-item"><a className="scrollto nav-link" href="#gigs">Conciertos</a></li>
          <li className="nav-item"><a className="scrollto nav-link" href="#videos">Videos</a></li>
          <li className="nav-item"><a className="scrollto nav-link" href="#music">Música</a></li>
          <li className="nav-item"><a className="scrollto nav-link" href="/bio">Bio</a></li>
          <li className="nav-item"><a className="scrollto nav-link" href="#merch">Tienda</a></li>
          <li className="nav-item"><a className="scrollto nav-link" href="#contact">Contacto</a></li>
          <li className="nav-item"><a className="scrollto nav-link" href="/blog/">Blog</a></li>
          <li className="nav-item"><a className="scrollto nav-link" href="/galeria">Galería</a></li>
          <li className="nav-item"><a className="scrollto nav-link" href="/qa">Q&#38;A</a></li>

        </ul>

        <div className="center-block-social">
            <ul className="nav navbar-nav navbar-nav-social navbar-right">
                <li className="nav-item nav-social">
                    <a href="https://www.youtube.com/user/CarlaMorrisonMusic"><i className="fa fa-youtube"></i></a>
                </li>
                <li className="nav-item nav-social">
                    <a href="https://open.spotify.com/artist/0XK6kT7xcZAlcYrNjOgzJe"><i className="fa fa-spotify"></i></a>
                </li>
                <li className="nav-item nav-social">
                    <a href="https://itunes.apple.com/us/artist/carla-morrison/id292289334"><i className="fa fa-apple"></i></a>
                </li>
                <li className="nav-item nav-social">
                    <a href="https://www.facebook.com/CARLAMORRISONOFICIALMX"><i className="fa fa-facebook"></i></a>
                </li>
                <li className="nav-item nav-social">
                    <a href="https://www.instagram.com/carlitamorrison/"><i className="fa fa-instagram"></i></a>
                </li>
                <li className="nav-item nav-social">
                    <a href="https://twitter.com/CarlaMorrisonMx"><i className="fa fa-twitter"></i></a>
                </li>
                <li className="nav-item nav-social">
                    <a id="toggleMusic" href="#">
                      <i className="music-icon fa fa-volume-up"></i>
                    </a>
                    <div style={{display:'none'}}>
                      <audio id="audio-player" autoplay>
                        <source className="ogg-type" src="../../static/landing/backgroundMusic1.ogg" type="audio/ogg"/>
                        <source className="mp3-type" src="../../static/landing/backgroundMusic1.mp3" type="audio/mpeg"/>
                          Your browser does not support the audio element.
                      </audio>
                    </div>
                </li>
                <li className="nav-item nav-social">
                    <a id="switch-music" href="#"><i className="music icon fa fa-angle-double-right"></i></a>
                </li>
            </ul>
        </div>




      </div>
    </nav>
</div>
</header>



)

export default Navbar

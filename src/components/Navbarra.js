import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbarra = () => (

  <header id="header" className=" header">

      <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: 'rgba(165, 165, 165, 0.9)', borderBottom: '1px solid #eed0d2'}}>
        <div className="container">
          <a className="navbar-brand" href="/">
              <figure className="image">
                <img src={logo} alt="Carla" style={{ width: '120px', marginTop:'5px' }} />
              </figure>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="scrollto nav-link" href="/#gigs">Conciertos</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="/videos">Videos</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="/musica">Música</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="/bio">Bio</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="/#tienda">Tienda</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="#contacto">Contacto</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="/blog">Blog</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="/galeria">Galería</a></li>
              <li className="nav-item"><a className="scrollto nav-link" href="/qa">Q&A</a></li>
            </ul>

            <div className="center-block-social d-none d-lg-block">
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
              </ul>
            </div>
          </div>
          </div>
        </nav>

  </header>



)

export default Navbar

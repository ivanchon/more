import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import youtube from '../img/icon-youtube.svg'
import spotify from '../img/icon-spotify.svg'
import apple from '../img/icon-apple.svg'
import facebook from '../img/icon-facebook.svg'
import instagram from '../img/icon-instagram.svg'
import twitter from '../img/icon-twitter.svg'

import calendar from '../img/icon-calendar.svg'
import info from '../img/icon-info.svg'
import newspaper from '../img/icon-newspaper.svg'




const Footer = () => (

<div>
  <footer id="contacto" className="footer pt-5">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="title is-2 h2-headers">Contacto</h2>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-10 mx-auto">
          <p className="">¡Aquí puedes encontrar diferentes maneras de contactarme! Asegúrate de suscribirte a mi newsletter, podrás encontrar las últimas noticias, promos especiales para mis fans, y ¡hasta regalos exclusivos!</p>
        </div>
      </div>
      <div className="row contact-block text-center py-5">
        <div className="col">
          <span className="icon">
            <img src={calendar} alt="Youtube" />
          </span>
          <h4 className="title is-4">Newsletter</h4>
          <Link to="/newsletter">Subscribirme</Link>
        </div>
        <div className="col">
          <span className="icon">
            <img src={info} alt="Youtube"/>
          </span>
          <h4 className="title is-4">Fans</h4>
          <a href="mailto:hola@carlamorrisonmusica.com">info@carlamorrisonmusica.com</a>
        </div>
        <div className="col">
          <span className="icon">
            <img src={newspaper} alt="Youtube" />
          </span>
          <h4 className="title is-4">Prensa/Management</h4>
          <a href="mailto:info@carlamorrisonmusica.com">info@carlamorrisonmusica.com</a>
        </div>
      </div>
      <div className="row text-center pt-5">
        <div className="col">
          <div className="social-media-block">
            <ul className="list-inline social-media-list">
              <li>
                <a
                  className="navbar-item"
                  href="https://www.youtube.com/user/CarlaMorrisonMusic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={youtube} alt="Youtube" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="navbar-item"
                  href="https://open.spotify.com/artist/0XK6kT7xcZAlcYrNjOgzJe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={spotify} alt="Github" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="navbar-item"
                  href="https://itunes.apple.com/us/artist/carla-morrison/id292289334"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={apple} alt="Github" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="navbar-item"
                  href="https://www.facebook.com/CARLAMORRISONOFICIALMX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={facebook} alt="Github" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="navbar-item"
                  href="https://www.instagram.com/carlitamorrison/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={instagram} alt="Github" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="navbar-item"
                  href="https://twitter.com/CarlaMorrisonMx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={twitter} alt="Twitter" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="container-fluid copyright">
    <div className="row text-center">
      <div className="col">
          <p className="copyright">MORRISON PRODUCTIONS® México, 2018.</p>
      </div>
    </div>
  </div>
</div>

)

export default Footer

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
  <footer className="footer">
    <div class="container">
      <div className="row">
        <div className="col">
          <h2 className="title is-2">Contacto</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto">
          <p className="has-text-centered">¡Aquí puedes encontrar diferentes maneras de contactarme! Asegúrate de suscribirte a mi newsletter, podrás encontrar las últimas noticias, promos especiales para mis fans, y ¡hasta regalos exclusivos!</p>
        </div>
      </div>
      <div className="row contact-block has-text-centered">
        <div className="col">
          <span className="icon">
            <img src={calendar} alt="Youtube" />
          </span>
          <h4 className="title is-4">Newsletter</h4>
          <a href="mailto:hola@carlamorrisonmusica.com">Subscribirme</a>
        </div>
        <div className="col">
          <span className="icon">
            <img src={info} alt="Youtube" />
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
      <div className="row text-centered">
        <div className="col is-centered">
          <div className="social-media-block">
            <ul className="list-inline social-media-list">
              <li>
                <a
                  className="navbar-item"
                  href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
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
                  href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
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
                  href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
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
                  href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
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
                  href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
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
                  href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={twitter} alt="Github" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="copyright container is-fullhd">
    <div className="columns">
      <div className="column has-text-centered">
          <p className="copyright">MORRISON PRODUCTIONS® México, 2018.</p>
      </div>
    </div>
  </div>
</div>

)

export default Footer

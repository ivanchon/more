import React from 'react'
import Link from 'gatsby-link'


const Footer = () => (

  <footer>
    <div className="footer">
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">Contacto</h2>
        </div>
      </div>
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <p className="has-text-centered">¡Aquí puedes encontrar diferentes maneras de contactarme! Asegúrate de suscribirte a mi newsletter, podrás encontrar las últimas noticias, promos especiales para mis fans, y ¡hasta regalos exclusivos!</p>
        </div>
      </div>
      <div className="columns has-text-centered">
        <div className="column ">
          <h4 className="title is-4">Newsletter</h4>
          <a href="mailto:hola@carlamorrisonmusica.com">Subscribirme</a>
        </div>
        <div className="column">
          <h4 className="title is-4">Fans</h4>
          <a href="mailto:hola@carlamorrisonmusica.com">info@carlamorrisonmusica.com</a>
        </div>
        <div className="column">
          <h4 className="title is-4">Prensa/Management</h4>
          <a href="mailto:info@carlamorrisonmusica.com">info@carlamorrisonmusica.com</a>
        </div>
      </div>
      <div className="columns has-text-centered">
        <div className="column ">
          <div class="social-media-block">
            <ul class="list-inline social-media-list">
              <li><a href="https://www.youtube.com/user/CarlaMorrisonMusic"><i class="fa fa-youtube"></i></a></li>
              <li><a href="https://open.spotify.com/artist/0XK6kT7xcZAlcYrNjOgzJe"><i class="fa fa-spotify"></i></a></li>
              <li><a href="https://itunes.apple.com/us/artist/carla-morrison/id292289334"><i class="fa fa-apple"></i></a></li>
              <li><a href="https://www.facebook.com/CARLAMORRISONOFICIALMX"><i class="fa fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/carlitamorrison/"><i class="fa fa-instagram"></i></a></li>
              <li><a href="https://twitter.com/CarlaMorrisonMx"><i class="fa fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright container is-fullhd">
      <div class="columns">
        <div class="column has-text-centered">
            <p class="copyright">MORRISON PRODUCTIONS® México, 2018.</p>
        </div>
      </div>
    </div>
  </footer>

)

export default Footer

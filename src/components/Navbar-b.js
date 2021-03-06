import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-fixed-top is-dark" style={{backgroundColor: 'rgba(165, 165, 165, 0.3)', borderBottom: '1px solid #eed0d2'}}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image" >
            <img src={logo} alt="Carla" />
          </figure>
        </Link>

        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Inicio
          </Link>
          <Link className="navbar-item" to="/#conciertos">
            Conciertos
          </Link>
          <Link className="navbar-item" to="/#conciertos">
            Videos
          </Link>
          <Link className="navbar-item" to="/#conciertos">
            Musica
          </Link>
          <Link className="navbar-item" to="/bio">
            Bio
          </Link>
          <Link className="navbar-item" to="/bio">
            Tienda
          </Link>
          <Link className="navbar-item" to="/#contacto">
            Contacto
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/products">
            Products
          </Link>
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar



/*
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
*/

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {injectGlobal} from 'styled-components'


injectGlobal`

  form input{
    opacity: 1;
    position: relative;  
    z-index: 0;

  }
  `


export default class NewsletterPage extends React.Component {
  render() {

    return (
      <section id="musica" className="header-push-down music-section">
        <div className="container pb-10" >
          <div className="row">
            <div className="col col-md-8 mx-auto text-center">
              <h2 className="headers-h2">
              ¡SUSCRÍBETE A NUESTRO NEWSLETTER!
              </h2>
            </div>
          </div>
          <div className="row newslettter-form">
            <div className="col col-md-8 mx-auto py-4 px-5" style={{ background: 'white', marginBottom:'3em'}}>
              <form name="contact" method="POST" netlify>
                <div className="form-group">
                  <label for="exampleInputEmail1">Correo Electronico</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introducir email"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Nombre</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Nombre"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Apellidos</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Apellidos"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Cumpleaños</label>
                  <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Introducir Cumpleaños"/>
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Sexo</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label class="form-check-label" for="inlineRadio1">Hombre</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label class="form-check-label" for="inlineRadio2">Mujer</label>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Pais</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Indroducir Pais"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Ciudad</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Indroducir Ciudad"/>
                </div>
                <button type="submit" className="btn btn-primary">Envíar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

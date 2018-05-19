import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {injectGlobal} from 'styled-components'

import SongSingle from '../components/SongSingle'
//image imports
import amsd from '../img/alco-amor-supremo-d.jpg'


injectGlobal`

#album-single{
  h3 {
    text-align: left;
    font-size: 40px;
    font-family: 'Pathway Gothic One', sans-serif;
    font-weight: 100 !important;
    color: #f3f0f0;
    margin-top: 0 !important;
  }

  h4{
    color: #fff;
    font-family: 'Courgette', cursive;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin-top: 3rem;
    }
  }

  p {  color: #808080;}
}




`;





export default class MusicPage extends React.Component {
  render() {

    return (
      <section id="album-single" className="header-push-down music-section">
        <div className="container py-5 pb-10">
          <div className="row">
            <div className="col-12">
              <h2 className="h2-headers">
                Amor Supremo Desnudo
              </h2>
              <h3 className="h3-year">
                2017
              </h3>
            </div>
          </div>
          <div className="row pb-5 text-center">
            <div className="col-md-6">
              <img className="img-fluid"
                style={{ borderRadius: '5px' }}
                src={amsd} alt="Amor Supremo Desnudo"
              />
            </div>
            <div className="col-md-6">
              <h4>Acerca de</h4>
              <p>Mi Segundo disco de larga duración fue hecho en una casa que rentamos en Playas de Tijuana, México en un tiempo aproximado de 8 meses y las voces fueron grabadas en el cuarto de mi madre en la ciudad de Tecate Baja California. Fue producido por Alejandro Jiménez y Damián Jiménez y co producido por mi. Estuvo muy influenciado por el sonido denso de sintetizadores y por el soundtrack y mensaje de la película Interstellar intentando dar al escucha una experiencia mucho mas llena al poder escuchar y expandir su experiencia auditiva y visual mientras se escuchara el disco. Fue mezclado por Claudius Mittendorfer en Nueva York así como también masterizado por Steve Falone en Sterling Sound NYC.</p>
              <p>My Second LP Album was done in a house we rented in Playas de Tijuana, Mexico in a 8 months time. It was produced by Alejandro Jimenez and Demian Jimenez and co produced by me. It was primarily influenced by heavy synthesizers, by Interstellar movie soundtrack and also giving the listener a more Fuller experience by being able to listen and expand their imagination. It was mixed by Claudius Mittendorfer in New York City and mastered by Steve Falone in Sterling Sound NYC.</p>
            </div>
          </div>

          <SongSingle
            titulo="1 - Un Beso"
            letrasEs={["Eres la ilusión que yo persigo,", <br></br>, "eres bueno y maldito", <br></br>, "Yo quiero tocarte y poder", <br></br>, "seguirte por doquier.", <br></br>, "Vámonos lejos,", <br></br>, "vámonos lejos", <br></br>, "donde nadie", <br></br>, "me prohiba tu calor.", <br></br>, "Yo te voy a robar,", <br></br>, "te voy a secuestrar.", <br></br>, "Yo te voy a robar un beso.", <br></br>, "Yo te voy a robar,", <br></br>, "te voy a secuestrar.", <br></br>, "Yo te voy a robar un beso.", <br></br>, "Eres la infusión que necesito,", <br></br>, "eres muy calientito.", <br></br>, "Yo quiero acercarme y poder", <br></br>, "contagiarme de tu ser.", <br></br>, "Vámonos lejos,", <br></br>, "vámonos lejos", <br></br>, "donde nadie", <br></br>, "me prohiba tu amor.", <br></br>, "Cómo consigo tener", <br></br>, "una cucharadita de tu miel."]}
            letrasEn={["Eres la ilusión que yo persigo,", <br></br>, "eres bueno y maldito", <br></br>, "Yo quiero tocarte y poder", <br></br>, "seguirte por doquier.", <br></br>, "Vámonos lejos,", <br></br>, "vámonos lejos", <br></br>, "donde nadie", <br></br>, "me prohiba tu calor.", <br></br>, "Yo te voy a robar,", <br></br>, "te voy a secuestrar.", <br></br>, "Yo te voy a robar un beso.", <br></br>, "Yo te voy a robar,", <br></br>, "te voy a secuestrar.", <br></br>, "Yo te voy a robar un beso.", <br></br>, "Eres la infusión que necesito,", <br></br>, "eres muy calientito.", <br></br>, "Yo quiero acercarme y poder", <br></br>, "contagiarme de tu ser.", <br></br>, "Vámonos lejos,", <br></br>, "vámonos lejos", <br></br>, "donde nadie", <br></br>, "me prohiba tu amor.", <br></br>, "Cómo consigo tener", <br></br>, "una cucharadita de tu miel."]}
          />
          <SongSingle
            titulo="2 - Flor que nunca fui"
            letrasEs={["La belleza que veo en ti", <br></br>, "traspasa cualquier dimensión,", <br></br>, "es tan grande su proyección", <br></br>, "que me ciega con su resplandor.", <br></br>, "Nunca nadie ha podido", <br></br>, "dejarme sin palabras como tú.", <br></br>, "Todo aquello que gano con hazañas,", <br></br>, "la fé me devolviste tú.", <br></br>, "Tú has roto en mí,", <br></br>, "todas las barreras de dolor", <br></br>, "que construí.", <br></br>, "Tus tratos hacia mí,", <br></br>, "me acaricias con amor como esa flor", <br></br>, "que nunca fui.", <br></br>, "Tú has roto en mí", <br></br>, "todas las barreras de dolor", <br></br>, "que construí.", <br></br>, "Tus tratos hacia mí,", <br></br>, "me acaricias con amor como esa flor", <br></br>, "que nunca fui.", <br></br>, "Contigo las horas se hacen agua,", <br></br>, "que viaja dentro de mí.", <br></br>, "Mi piel expulsando lo que siento", <br></br>, "es una terrible atracción.", <br></br>, "Tú, esa formula novedosa", <br></br>, "que me tomó fuera de mi control.", <br></br>, "Yo me contengo y te observo,", <br></br>, "y aumenta mi ilusión."]}
            letrasEn={["Eres la ilusión que yo persigo,", <br></br>, "eres bueno y maldito", <br></br>, "Yo quiero tocarte y poder", <br></br>, "seguirte por doquier.", <br></br>, "Vámonos lejos,", <br></br>, "vámonos lejos", <br></br>, "donde nadie", <br></br>, "me prohiba tu calor.", <br></br>, "Yo te voy a robar,", <br></br>, "te voy a secuestrar.", <br></br>, "Yo te voy a robar un beso.", <br></br>, "Yo te voy a robar,", <br></br>, "te voy a secuestrar.", <br></br>, "Yo te voy a robar un beso.", <br></br>, "Eres la infusión que necesito,", <br></br>, "eres muy calientito.", <br></br>, "Yo quiero acercarme y poder", <br></br>, "contagiarme de tu ser.", <br></br>, "Vámonos lejos,", <br></br>, "vámonos lejos", <br></br>, "donde nadie", <br></br>, "me prohiba tu amor.", <br></br>, "Cómo consigo tener", <br></br>, "una cucharadita de tu miel."]}
          />
          <SongSingle
            titulo="1 - Un Beso"
            letrasEs={["Eres la ilusión que yo persigo,", <br></br>, "eres bueno y maldito", <br></br>, "Yo quiero tocarte y poder", <br></br>, "seguirte por doquier.", <br></br>, "Vámonos lejos,", <br></br>, "vámonos lejos", <br></br>, "donde nadie", <br></br>, "me prohiba tu calor.", <br></br>, "Yo te voy a robar,", <br></br>, "te voy a secuestrar.", <br></br>, "Yo te voy a robar un beso.", <br></br>, "Yo te voy a robar,", <br></br>, "te voy a secuestrar.", <br></br>, "Yo te voy a robar un beso.", <br></br>, "Eres la infusión que necesito,", <br></br>, "eres muy calientito.", <br></br>, "Yo quiero acercarme y poder", <br></br>, "contagiarme de tu ser.", <br></br>, "Vámonos lejos,", <br></br>, "vámonos lejos", <br></br>, "donde nadie", <br></br>, "me prohiba tu amor.", <br></br>, "Cómo consigo tener", <br></br>, "una cucharadita de tu miel."]}
            letrasEn={["Eres la ilusión que yo persigo,", <br></br>, "eres bueno y maldito", <br></br>, "Yo quiero tocarte y poder", <br></br>, "seguirte por doquier.", <br></br>, "Vámonos lejos,", <br></br>, "vámonos lejos", <br></br>, "donde nadie", <br></br>, "me prohiba tu calor.", <br></br>, "Yo te voy a robar,", <br></br>, "te voy a secuestrar.", <br></br>, "Yo te voy a robar un beso.", <br></br>, "Yo te voy a robar,", <br></br>, "te voy a secuestrar.", <br></br>, "Yo te voy a robar un beso.", <br></br>, "Eres la infusión que necesito,", <br></br>, "eres muy calientito.", <br></br>, "Yo quiero acercarme y poder", <br></br>, "contagiarme de tu ser.", <br></br>, "Vámonos lejos,", <br></br>, "vámonos lejos", <br></br>, "donde nadie", <br></br>, "me prohiba tu amor.", <br></br>, "Cómo consigo tener", <br></br>, "una cucharadita de tu miel."]}
          />
        </div>
      </section>
    )
  }
}

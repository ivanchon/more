import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavbarMain from '../components/NavbarSP'
import SpotPlayer from '../components/SpotPlayer'
import Footer from '../components/Footer'
//import './all.sass'
import './main.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Carla Morrison" />
    <NavbarMain />
    <div>{children()}</div>

    <div >
      <SpotPlayer/>
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

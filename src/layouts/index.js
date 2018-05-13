import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavbarMain from '../components/Navbar'
import Footer from '../components/Footer'
//import './all.sass'
import './main.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Carla Morrison" />
    <NavbarMain />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

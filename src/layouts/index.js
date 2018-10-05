import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavbarMain from '../components/NavbarSP'
import SpotPlayer from '../components/SpotPlayer'
import SoundcloudPlayer from '../components/SoundcloudPlayer'
import Footer from '../components/Footer'
//import favicon from '../img/favicon.ico'

//import './all.sass'
import './main.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Carla Morrison" 
    meta={[
        { name: 'description', content: '...' },
        { name: 'keywords', content: '....' },
    ]}
    link={[
        //{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        { rel: 'shortcut icon', type: 'image/png', href: `../img/favicon.ico` }
    ]}
    
    />
    <NavbarMain />
    <div>{children()}</div>

    <div >
      <SoundcloudPlayer/>
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

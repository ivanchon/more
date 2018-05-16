import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectGlobal} from 'styled-components'

//heros
import hero1 from '../img/a.jpg'
import hero2 from '../img/b.jpg'
import hero3 from '../img/c.jpg'

injectGlobal`
  
.cf4a {
  position: relative;
  height:100vh;
  width: 100%;
  margin:0 auto;
  overflow: hidden;

  @media (max-width: 575.98px) {
    max-height: 40vh;
    margin-top: 94px;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    max-height: 50vh;
    margin-top: 94px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    max-height: 65vh;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    max-height: 80vh;
  }

  @media (min-width: 1200px) {
    height:100vh;
   }

}


.cf4a img {
  position: absolute;
  left:0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


@keyframes cf4FadeInOut {
   0% {
     opacity:1;
   }
   17% {
     opacity:1;
   }
   25% {
     opacity:0;
   }
   92% {
     opacity:0;
   }
   100% {
     opacity:1;
   }
}


.cf4a img {
  animation-name: cf4FadeInOut;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 8s;
}
.cf4a img:nth-of-type(1) {
  animation-delay: 6s;
}
.cf4a img:nth-of-type(2) {
  animation-delay: 4s;
}
.cf4a img:nth-of-type(3) {
  animation-delay: 2s;
}
.cf4a img:nth-of-type(4) {
  animation-delay: 0;
}
`;

const HeroWrapper = styled.div`
  background: pink;
`;

const HeroHome = () => (
    <HeroWrapper className="hero-carousel">
      <div className="cf4a">
        <img src={hero1}/>
        <img src={hero2}/>
        <img src={hero3}/>
        <img src={hero2}/>
      </div>
    </HeroWrapper>
)

export default HeroHome

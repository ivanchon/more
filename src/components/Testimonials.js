import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectGlobal} from 'styled-components'
import { v4 } from 'uuid'

injectGlobal`

  .testimonialswrapper{
    @media (max-width: 575.98px) {
      margin: 10px;
    }
  }

  .speech-bubble {
    position: relative;
    background: #FFF;
    border-radius: .4em;
    min-height: 80px;
    padding: 25px;
    font-family: 'Courgette', cursive;
    font-size: 16px;
    font-weight: 200;
    color: #808080;
    text-align: center;

    & cite {
      font-size: 0.8rem;
      margin-top: 3rem;
    }

  }

  .speech-bubble:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 26px solid transparent;
    border-left-color: #FFF;
    border-right: 0;
    margin-top: -26px;
    margin-right: -26px;

    @media (max-width: 575.98px) {
      display: none;
    }

  }

  .qa-answer {
    border: 1px solid #EED0D2;
    padding: 20px;
    color: #636363;

    & p {
      margin-bottom: 0rem;
    }

    @media (max-width: 575.98px) {
      display: border-box;
      margin-top: 1rem;
    }

  }

`;




const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <div key={v4()} className="row mb-5 mt-5 testimonialswrapper" style={{ marginLeft:'10px', marginRight:'10px'}}>
        <div className="col-12 col-sm-6 speech-bubble align-self-center">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
        <div className="col-12 col-sm-5 ml-auto qa-answer align-self-center">
          <p>{testimonial.answer}</p>
        </div>
      </div>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
      answer: PropTypes.string,
    })
  ),
}

export default Testimonials

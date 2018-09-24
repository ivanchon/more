import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import {injectGlobal} from 'styled-components'

injectGlobal`

.bio-h1 {

    color: #f3f0f0;
    font-family: Pathway Gothic One,sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
}

.bio-heading {
    color: #f3f0f0;
    border: none;
    font-family: 'Courgette', cursive;
    font-size: 28px;
    font-weight: 200;
    margin-bottom: 30px;
}

.bio-container {
    padding: 4rem;
    padding-top: 2rem;
    background-color: #fff;
}

.bio-btn {
  background: #fff;
  border: 2px solid #eed0d2;
  color: #eed0d2;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
  float: right;
  margin-left: 15px;
  padding: 3px 15px;
  transition: 1s;

  &:hover{
    background-color: #eed0d2;
    color: white;
  }

  a {
    color: #eed0d2;

    &:hover{
      text-decoration: none;
      color: white;
    }

  }
}
`

export const BioPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section header-push-down">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="bio-h1 title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <h3 className="title is-size-4 bio-heading">Carla Morrison</h3>
              <div className="bio-container mb-5">
                <div className="row text-right pb-4">
                  <div className="col">
                  <button type="button" className="bio-btn">
                      <a  href="/Biografia_CM_en.pdf" target="_blank" >
                        <i className="fa fa-cloud-download"></i> English
                      </a>
                    </button>

                    <button type="button" className=" bio-btn">
                      <a  href="/Biografia_CM_es.pdf" target="_blank" >
                        <i className="fa fa-cloud-download"></i> Español
                      </a>
                    </button>
                  </div>
              </div>
                <PageContent className="content whitebg" content={content} style={{ backgroundColor: 'white' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BioPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BioPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

BioPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BioPage

export const BioPageQuery = graphql`
  query BioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

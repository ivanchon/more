import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'




export const BioPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content


  return (
    <section className="section section--gradient header-push-down">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="bio-h1">
                {title}
              </h1>
              <h3 className="title is-size-4 bio-heading">Carla Morrison</h3>
              <div className="bio-container mb-5">
                <div className="row text-right pb-4">
                  <div className="col">
                    <button type="button" className="btn btn-light bio-btn">
                      <i class="fa fa-cloud-download"></i> Español</button>

                    <button type="button" className="btn btn-light bio-btn">
                      <i class="fa fa-cloud-download"></i> English</button>
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

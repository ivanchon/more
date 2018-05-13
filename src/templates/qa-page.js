import React from 'react'
import PropTypes from 'prop-types'
import Testimonials from '../components/Testimonials'

export const QAPageTemplate = ({
  title,
  description,
  testimonials,

}) => (
  <section className="section header-push-down pb-5">
    <div className="container">
      <div className="row">
        <div className="col-12 mx-auto">
          <h2 className="h2-headers">
            {title}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p style={{color: '#636363', textAlign:'center'}}>{description}</p>
        </div>
      </div>
      <div className="content">
        <Testimonials testimonials={testimonials} />
      </div>
    </div>
  </section>
)

QAPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.array,
}

const QAPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <QAPageTemplate
      title={frontmatter.title}
      description={frontmatter.description}
      testimonials={frontmatter.testimonials}
    />
  )
}

QAPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default QAPage

export const qaPageQuery = graphql`
  query QAPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        testimonials {
          author
          quote
          answer
        }
      }
    }
  }
`

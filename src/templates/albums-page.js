import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features2'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

export const AlbumsPageTemplate = ({
  image,
  title,
  year,
  aboutEs,
  aboutEn,
  songs,
  main,

}) => (
  <section className="section header-push-down">
    <div className="container pb-5">
      <div className="section">
        <div className="content">
          <div className="row">
            <div className="col-12">
              <h2 className="h2-headers">
                {title}
              </h2>
              <h3 className="is-size-2">
                {year}
              </h3>
            </div>
          </div>
          <div className="row pb-5 text-center">
            <div className="col-md-6">
              <img className="img-fluid"
                style={{ borderRadius: '5px' }}
                src={image}
                //alt={main.image1.alt}
              />
            </div>
            <div className="col-md-6">
              <p>Acerca de</p>
              <p>{aboutEs}</p>
              <p>{aboutEn}</p>
            </div>
          </div>

          <Features gridItems={songs.blurbs} />

        </div>
      </div>
    </div>
  </section>
)

AlbumsPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  aboutEs: PropTypes.string,
  aboutEn: PropTypes.string,
  songs: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const AlbumsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <AlbumsPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      year={frontmatter.year}
      aboutEs={frontmatter.aboutEs}
      aboutEn={frontmatter.aboutEn}
      songs={frontmatter.songs}
      main={frontmatter.main}
    />
  )
}

AlbumsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AlbumsPage

export const albumsPageQuery = graphql`
  query AlbumsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        year
        aboutEs
        aboutEn
        songs {
          blurbs {
            image
            text
            text2
            title
          }
        }
      }
    }
  }
`

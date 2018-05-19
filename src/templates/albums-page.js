import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features2'
import {injectGlobal} from 'styled-components'

injectGlobal`

.album-section{

  color: #808080;

  h2{

  }

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
  }
}

.h3-year {
}

.h2-headers{
  margin-bottom: 0px !important;
}
`;


export const AlbumsPageTemplate = ({
  image,
  title,
  year,
  aboutEs,
  aboutEn,
  songs
}) => (
  <section className="section album-section header-push-down">
    <div className="container pb-5">
      <div className="section">
        <div className="content">
          <div className="row">
            <div className="col-12">
              <h2 className="h2-headers">
                {title}
              </h2>
              <h3 className="h3-year">
                {year}
              </h3>
            </div>
          </div>
          <div className="row pb-5 text-center">
            <div className="col-md-6">
              <img className="img-fluid"
                style={{ borderRadius: '5px' }}
                src={image} alt={title}
              />
            </div>
            <div className="col-md-6">
              <h4>Acerca de</h4>
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
  title: PropTypes.string,
  year: PropTypes.number,
  image: PropTypes.string,
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
      title={frontmatter.title}
      year={frontmatter.year}
      image={frontmatter.image}
      aboutEs={frontmatter.aboutEs}
      aboutEn={frontmatter.aboutEn}
      songs={frontmatter.songs}
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
        year
        image
        aboutEs
        aboutEn
        songs {
          blurbs {
            title
            lyricsEs
            lyricsEn
          }
        }
      }
    }
  }
`

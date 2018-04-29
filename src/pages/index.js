import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

//img imports
import bomt from '../img/home-album-bomt.png'

import tieTee1 from '../img/tienda-tee1.gif'
import tieTee2 from '../img/tienda-tee2.gif'
import tieCup1 from '../img/tienda-cup.gif'
import tieSwea from '../img/tienda-sweat.gif'



export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section id="contenido">


        <section className="hero is-medium has-carousel">
          <div className="hero-carousel carousel-animated carousel-animate-fade">
            <div className='carousel-container'>
              <div className='carousel-item has-background is-active'>
                <img className="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>



        <section class="hero" >
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Hero title
              </h1>
              <h2 class="subtitle">
                Hero subtitle
              </h2>
            </div>
          </div>
        </section>

        <section class="container">
          <div class="columns">
            <div class="column">
              <h2 class="title">
                Concerts
              </h2>
              <h3 class="subtitle has-text-right">
                <Link className="button is-text" to="/bio">
                  See All →
                </Link>
              </h3>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
              <div className="columns">
                <div className="column">
                  <h2 className="title is-2">
                    Videos
                  </h2>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="video-container">
                    <iframe width="100%" height="auto" src="//youtube.com/embed/C-u5WLJ9Yk4" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="column">
                  <div class="video-container">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/CduA0TULnow" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div class="video-container">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/CduA0TULnow" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="column">
                  <div class="video-container">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/CduA0TULnow" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
              <h4 className="subtitle has-text-right">
                <Link className="button is-text" to="/bio">
                  See All →
                </Link>
              </h4>
          </div>
        </section>


        <section id="albums">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="title is-2">
                  Videos
                </h2>
              </div>
            </div>
            <div className="columns is-multiline is-mobile">
              <div className="column has-text-centered is-half-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
                <img src={bomt} alt="Women's Invitation" className="bomt-box"/>
              </div>
              <div className="column has-text-centered is-half-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
                <img src={bomt} alt="Women's Invitation" className="bomt-box"/>
              </div>
              <div className="column has-text-centered is-half-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
                <img src={bomt} alt="Women's Invitation" className="bomt-box"/>
              </div>
              <div className="column has-text-centered is-half-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd">
                <img src={bomt} alt="Women's Invitation" className="bomt-box"/>
              </div>
            </div>
          <h4 className="subtitle has-text-right">
            <Link className="button is-text" to="/bio">
              Ver mas →
            </Link>
          </h4>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280133854&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
          </div>
            <h4 className="subtitle has-text-right">
              <Link className="button is-text" to="/bio">
                Ver mas →
              </Link>
            </h4>
          </div>
        </section>


        <section id="blog">
          <div className="container">
            <div className="columns">
              <div className="content">
                <h2 className="has-text-weight-bold is-size-2">Blog</h2>
              </div>
            </div>
            <div className="columns">
              {posts
                .filter(post => post.node.frontmatter.templateKey === 'blog-post')
                .map(({ node: post }) => (
                  <div
                    className="column"
                    style={{ border: '1px solid #eaecee', padding: '1em 2em', margin: '1em' }}
                    key={post.id}
                  >
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="tienda">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h2 className="title is-2">
                    Tienda
                  </h2>
                </div>
              </div>
              <div className="columns is-multiline is-mobile">
                <div className="column has-text-centered is-half-mobile ">
                  <img src={tieTee1} alt="Women's Invitation" className="bomt-box"/>
                </div>
                <div className="column has-text-centered is-half-mobile">
                  <img src={tieTee2} alt="Women's Invitation" className="bomt-box"/>
                </div>
                <div className="column has-text-centered is-half-mobile">
                  <img src={tieCup1} alt="Women's Invitation" className="bomt-box"/>
                </div>
                <div className="column has-text-centered is-half-mobile">
                  <img src={tieSwea} alt="Women's Invitation" className="bomt-box"/>
                </div>
              </div>
            <h4 className="subtitle has-text-right">
              <Link className="button is-text" to="/bio">
                Ver mas →
              </Link>
            </h4>
            </div>
          </section>



      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

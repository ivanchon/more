import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

//img imports

//heros
import hero1 from '../img/a.jpg'
import hero2 from '../img/b.jpg'
import hero3 from '../img/c.jpg'

import amsd from '../img/alco-amor-supremo-d.jpg'
import amsu from '../img/alco-amor-supremo.jpg'
import dell from '../img/alco-dejenme-llorar-d.jpg'
import deld from '../img/alco-dejenme-llorar.jpg'
import juse from '../img/alco-jugando.jpg'
import mido from '../img/alco-mientras.jpg'



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
                <img className="is-background" src={hero1} alt="" />
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



        <section className="hero" >
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Hero title
              </h1>
              <h2 className="subtitle">
                Hero subtitle
              </h2>
            </div>
          </div>
        </section>

        <section className="container" id="conciertos">
          <div className="row">
            <div className="col">
              <h2 className="headings-h2">
                Conciertos
              </h2>
              <h3 className="subtitle has-text-right">
                <Link className="button is-text" to="/bio">
                  Ver todos →
                </Link>
              </h3>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className="title is-2">
                    Videos
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="100%" height="auto" src="//youtube.com/embed/C-u5WLJ9Yk4" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col">
                  <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/CduA0TULnow" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/CduA0TULnow" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col">
                  <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/CduA0TULnow" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4 className="subtitle has-text-right">
                    <Link className="button is-text" to="/bio">
                      See All →
                    </Link>
                  </h4>
                </div>
              </div>
          </div>
        </section>


        <section id="albums">
          <div className="container py-5">
            <div className="row">
              <div className="column">
                <h2 className="title is-2">
                  Musica
                </h2>
              </div>
            </div>
            <div className="row py-5">
              <div className="col-6 col-sm-6 col-md-4">
                <img className="img-fluid" src={amsd} alt="Amor Supremo"/>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <img className="img-fluid" src={amsu} alt="Amor Supremo"/>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <img className="img-fluid" src={deld} alt="Amor Supremo"/>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <img className="img-fluid" src={dell} alt="Amor Supremo"/>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <img className="img-fluid" src={juse} alt="Amor Supremo"/>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <img className="img-fluid" src={mido} alt="Amor Supremo"/>
              </div>
            </div>
          <h4 className="subtitle text-right">
            <Link className="button is-text" to="/bio">
              Ver mas →
            </Link>
          </h4>
          <div className="row py-5">
            <div className="col-10 mx-auto">
              <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280133854&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
          </div>
            <h4 className="subtitle text-right">
              <Link className="button is-text" to="/bio">
                Ver mas →
              </Link>
            </h4>
          </div>
        </section>


        <section id="blog">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="has-text-weight-bold is-size-2">Blog</h2>
              </div>
            </div>
            <div className="row">
              {posts
                .filter(post => post.node.frontmatter.templateKey === 'blog-post')
                .map(({ node: post }) => (
                  <div
                    className="col"
                    style={{ border: '1px solid #eaecee', padding: '1em 2em', margin: '0.5em' }}
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
              <div className="row">
                <div className="column">
                  <h2 className="title is-2">
                    Tienda
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-3">
                  <img className="img-fluid" src={tieTee1} alt="Women's Invitation"  />
                </div>
                <div className="col-6 col-md-3">
                  <img className="img-fluid" src={tieTee2} alt="Women's Invitation"  />
                </div>
                <div className="col-6 col-md-3">
                  <img className="img-fluid" src={tieCup1} alt="Women's Invitation"  />
                </div>
                <div className="col-6 col-md-3">
                  <img className="img-fluid"  src={tieSwea} alt="Women's Invitation"  />
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

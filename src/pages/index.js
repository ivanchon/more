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

        <section className="hero-carousel">
          <div className="cf4a">
            <img src={hero1}/>
            <img src={hero2}/>
            <img src={hero3}/>
            <img src={hero2}/>
          </div>
        </section>


        <section className="hero is-medium has-carousel">
          <div className="hero-carousel carousel-animated carousel-animate-fade">
            <div className='carousel-container'>
              <div className='carousel-item has-background is-active'>
                <img className="is-background" src={hero1} alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src={hero1} alt="" />
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


        <section className="container py-5" id="conciertos">
          <div className="row">
            <div className="col">
              <h2 className="h2-headers">
                Siguientes Conciertos
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col text-right">
              <a className="subtitle">
                <Link className="btn btn-ghost-primary" to="/bio">
                  Ver todos →
                </Link>
              </a>
            </div>
          </div>
        </section>

        <section id="videos">
          <div className="container py-5">
              <div className="row">
                <div className="col">
                  <h2 className="headers-h2">
                    Videos
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="100%" height="auto" src="//youtube.com/embed/ZKuUcErjS-A" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/uSkZKHtkEdc" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-12 col-md-6">
                  <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/YxCNd7nknyQ" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/B9GiF26kAvo" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="row py-5">
                <div className="col text-right">
                  <a className="subtitle">
                    <Link className="btn btn-ghost-primary" to="/bio">
                      Ver mas →
                    </Link>
                  </a>
                </div>
              </div>
          </div>
        </section>

        <section id="musica" className="mt-5">
          &nbsp;
        </section>
        <section id="" className="">
          <div className="container">
            <div className="row">
              <div className="column">
                <h2 className="headers-h2">
                  Musica
                </h2>
                <h3 className="h3-headers">Discos</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 py-4">
                <img className="img-fluid" src={amsd} alt="Amor Supremo"/>
              </div>
              <div className="col-6 col-sm-6 col-md-4 py-4">
                <img className="img-fluid" src={amsu} alt="Amor Supremo"/>
              </div>
              <div className="col-6 col-sm-6 col-md-4 py-4">
                <img className="img-fluid" src={deld} alt="Amor Supremo"/>
              </div>
              <div className="col-6 col-sm-6 col-md-4 py-4">
                <img className="img-fluid" src={dell} alt="Amor Supremo"/>
              </div>
              <div className="col-6 col-sm-6 col-md-4 py-4">
                <img className="img-fluid" src={juse} alt="Amor Supremo"/>
              </div>
              <div className="col-6 col-sm-6 col-md-4 py-4">
                <img className="img-fluid" src={mido} alt="Amor Supremo"/>
              </div>
            </div>
            <div className="row">
              <div className="col text-right">
                <a className="subtitle">
                  <Link className="btn btn-ghost-primary" to="/bio">
                    Ver mas →
                  </Link>
                </a>
              </div>
            </div>
            <div className="row pt-5 pb-3">
              <div className="col mx-auto">
                <h3 className="h3-headers">Covers</h3>
              </div>
            </div>
            <div className="row pb-5">

              <div className="col-10 mx-auto">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280133854&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              </div>
            </div>
            <div className="row">
              <div className="col text-right">
                <a className="btn btn-ghost-primary">
                  <Link className="btn btn-ghost-primary" to="/bio">
                    Ver mas →
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </section>


        <section id="blog">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="headers-h2">Blog</h2>
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
            <div className="container py-5">
              <div className="row">
                <div className="column">
                  <h2 className="headers-h2">
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
              <div className="row pt-5">
                <div className="col text-right">
                  <button className="btn btn-ghost-primary" href="https://www.kichink.com/stores/carla-morrison-oficial">
                      Ver mas →
                  </button>
                </div>
              </div>
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

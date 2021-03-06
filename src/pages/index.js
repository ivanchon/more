import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectGlobal } from 'styled-components'
import { DiscussionEmbed } from "disqus-react"


injectGlobal`
  #blog .card-deck {
    display: grid;

    @media (min-width: 0) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .card {
      @media (max-width: 991.8px) {
        margin-bottom: 2rem;
      }
    }
  }
`;

//component imports
import 'bootstrap/dist/css/bootstrap.css';
import Music from '../components/Music'
import HeroHome from '../components/HeroHome'

import tieTee1 from '../img/tienda-tee1.gif'
import tieTee2 from '../img/tienda-tee2.gif'
import tieCup1 from '../img/tienda-cup.gif'
import tieSwea from '../img/tienda-sweat.gif'


export default class IndexPage extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

      
      if ( this.props.location.pathname.indexOf('blog') >= 0 )
      {
        const disqusShortname = 'example';
        const disqusConfig = {
            url: this.props.article.url,
            identifier: this.props.article.id,
            title: this.props.article.title,
        };
      }



    return (
      <section id="contenido">

        <HeroHome />
        {/*
        <section className="hero-carousel">
          <div className="cf4a">
            <img src={hero1}/>
            <img src={hero2}/>
            <img src={hero3}/>
            <img src={hero2}/>
          </div>
        </section>*/}

        {/*<section className="container py-5" id="conciertos">
          <div className="row">
            <div className="col">
              <h2 className="h2-headers">
                Siguientes Conciertos
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col text-right">
                <Link className="btn btn-ghost-primary" to="/bio">
                  Ver todos →
                </Link>
            </div>
          </div>
      </section>*/}

        {/*<section id="conciertos" className="music-section">
          <div className="container pt-5">
            <div className="albums-block">
              <div className="row">
                <div className="col">
                  <h2 className="headers-h2">
                    Conciertos
                  </h2>
                </div>
              </div>
              <div className="row" style={{borderBottom: '1px solid rgba(255,255,255,0.5)', marginBottom:'1em'}}>
                <div className="col-12 col-md-3" style={{color: 'white'}}>
                  <p><strong>APR 30</strong></p>
                </div>
                <div className="col-12 col-md-6 text-left" >
                  <p>La Linea Festival - Music Room - Liverpool</p>
                </div>
                <div className="col-12 col-md-3 text-right">
                  <a className="btn-ghost-secondary" href="https://www.bandsintown.com/e/1013883295-carla-morrison-at-liverpool-philharmonic" target="_blank">RSVP</a>
                  <a className="btn-ghost-secondary" style={{marginLeft: '1em'}} href="https://www.comono.co.uk/live/carla-morrison-4/" target="_blank">Boletos</a>
                </div>
              </div>
              <div className="row" style={{borderBottom: '1px solid rgba(255,255,255,0.5)', marginBottom:'1em'}}>
                <div className="col-12 col-md-3" style={{color: 'white'}}>
                  <p><strong>MAY 03</strong></p>
                </div>
                <div className="col-12 col-md-6 text-left" >
                  <p>La Linea Festival - The Station - Bristol</p>
                </div>
                <div className="col-12 col-md-3 text-right">
                  <a className="btn-ghost-secondary" href="https://www.bandsintown.com/e/1013617444-carla-morrison-at-the-station" target="_blank">RSVP</a>
                  <a className="btn-ghost-secondary" style={{marginLeft: '1em'}} href="https://www.comono.co.uk/live/carla-morrison-3/" target="_blank">Boletos</a>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-3" style={{color: 'white'}}>
                  <p><strong>MAY 05</strong></p>
                </div>
                <div className="col-12 col-md-6 text-left" >
                  <p>La Linea Festival - EartH - London</p>
                </div>
                <div className="col-12 col-md-3 text-right">
                  <a className="btn-ghost-secondary" href="https://www.bandsintown.com/e/1013567746-carla-morrison-at-london-earth" target="_blank">RSVP</a>
                  <a className="btn-ghost-secondary" style={{marginLeft: '1em'}} href="https://www.comono.co.uk/live/carla-morrison-2/" target="_blank">Boletos</a>
                </div>
              </div>
          </div>
        </div>
    </section>*/}

        <section id="videos" className="music-section">
          <div className="container pt-5">
            <div className="albums-block">
              <div className="row">
                <div className="col">
                  <h2 className="headers-h2">
                    Videos
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="100%" height="auto" src="//youtube.com/embed/ZKuUcErjS-A" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/uSkZKHtkEdc" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-12 col-md-6">
                  <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/YxCNd7nknyQ" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="640" height="360" src="//www.youtube.com/embed/B9GiF26kAvo" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col text-right">
                  <a className="btn btn-ghost-primary" href="https://www.youtube.com/user/CarlaMorrisonMusic" target="_blank">
                    Ver mas →
                  </a>
                </div>
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
                  Música
                </h2>
                <h3 className="h3-headers">Discos</h3>
              </div>
            </div>
            <Music/>
            <div className="row">
              <div className="col text-right">
                <Link className="btn btn-ghost-primary" to="/musica">
                  Ver mas →
                </Link>
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
                <Link className="btn btn-ghost-primary" to="/covers">
                  Ver mas →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="blog">
          <div className="container pt-5">
            <div className="row">
              <div className="col">
                <h2 className="headers-h2">Blog</h2>
              </div>
            </div>
            <div className="card-deck">
              {posts
                .filter(post => post.node.frontmatter.templateKey === 'blog-post')
                .map(({ node: post }) => (
                  <div
                    className="card"
                    style={{ backgroundColor: 'transparent', border: '1px solid #eaecee', borderRadius: '0px' }}
                    key={post.id}
                  >
                    <Link className="has-text-primary" to={post.fields.slug}>
                      <img className="img-fluid" src={post.frontmatter.image}/>
                    </Link>
                    <div className="card-body">
                      <p>
                        <Link className="has-text-primary" to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                        <span><br/></span>
                        <small>{post.frontmatter.date}</small>
                      </p>
                      <p>
                        {post.excerpt}
                        <br />
                        <br />
                        <Link className="btn btn-outline-light btn-sm" to={post.fields.slug}>
                          Leer mas →
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
              <div className="col text-right">
                <Link className="btn btn-ghost-primary" to="/blog">
                  Ver mas →
                </Link>
              </div>
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
              <div className="row text-center row-store">
                <div className="col-6 col-md-3">
                  <img className="img-fluid" src={tieTee1} alt="Articulo Tienda" />
                  <h5 className="pt-3">Camiseta AS Desnudo</h5>
                  <p>T-shirt Mujer<br/>
                     $250.00</p>
                  <a className="btn-ghost-secondary" href="https://www.kichink.com/buy/1587931/carla-morrison-oficial/playera-as-desnudo-mujer" target="_blank">Comprar Ahora</a>
                </div>
                <div className="col-6 col-md-3">
                  <img className="img-fluid" src={tieSwea} alt="Articulo Tienda" />
                  <h5 className="pt-3">Sudadera AS Desnudo</h5>
                  <p>Sudadera Unisex<br/>
                     $600.00</p>
                  <a className="btn-ghost-secondary" href="https://www.kichink.com/buy/1588863/carla-morrison-oficial/sudadera-as-desnudo-unisex" target="_blank">Comprar Ahora</a>
                </div>
                <div className="col-6 col-md-3">
                  <img className="img-fluid" src={tieCup1} alt="Articulo Tienda" />
                  <h5 className="pt-3">Taza AS Desnudo</h5>
                  <p>Taza<br/>
                     $150.00</p>
                  <a className="btn-ghost-secondary" href="https://www.kichink.com/buy/1580309/carla-morrison-oficial/taza-as-desnudo" target="_blank">Comprar Ahora</a>
                </div>
                <div className="col-6 col-md-3">
                  <img className="img-fluid" src={tieTee2} alt="Articulo Tienda" />
                  <h5 className="pt-3">Camiseta B&N</h5>
                  <p>Camiseta Mujer<br/>
                     $250.00</p>
                  <a className="btn-ghost-secondary" href="https://www.kichink.com/buy/1195360/carla-morrison-oficial/t-shirt-bn-mujer" target="_blank">Comprar Ahora</a>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col text-right">
                  <a className="btn btn-ghost-primary" href="https://www.kichink.com/stores/carla-morrison-oficial" target="_blank">
                      Ver mas →
                  </a>
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
    allMarkdownRemark(
      limit: 3
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ){
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

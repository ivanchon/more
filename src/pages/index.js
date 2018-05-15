import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

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
              <div className="row pt-5">
                <div className="col text-right">
                  <a className="subtitle">
                    <Link className="btn btn-ghost-primary" to="/bio">
                      Ver mas →
                    </Link>
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
                  Musica
                </h2>
                <h3 className="h3-headers">Discos</h3>
              </div>
            </div>
            <Music/>
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
          <div className="container pt-5">
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
                    className="col-sm-12 col-lg-4"
                    style={{ border: '1px solid #eaecee', padding: '1em 2em' }}
                    key={post.id}
                  >
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
    allMarkdownRemark(
      limit: 3
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ){
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

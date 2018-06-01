import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectGlobal } from 'styled-components'

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
      margin-bottom: 2rem;

      @media (max-width: 991.8px) {
        margin-bottom: 2rem;
      }
    }
  }
`;


export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (

      <section id = "blog" className = "header-push-down" > <div className="container pb-5">
        <div className="row">
          <div className="col">
            <h2 className="headers-h2">Blog</h2>
          </div>
        </div>
        <div className="card-columns">
          {
            posts.filter(post => post.node.frontmatter.templateKey === 'blog-post').map(({node: post}) => (<div className="card" style={{
                border: '1px solid #D1C7BD',
                backgroundColor: 'transparent',
                borderRadius: '0px'
              }} key={post.id}>


              <div className="card-body">
                <Link className="has-text-primary" to={post.fields.slug}>
                  <img className="img-fluid" src={post.frontmatter.image}/>
                </Link>
                <p style={{marginTop:'0.75rem', marginBottom: '0rem', fontSize:'1.5rem'}}>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </p>
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    <small>{post.frontmatter.date}</small>
                  </Link>
                </p>
                <p>
                  {post.excerpt}
                  <br/>
                  <br/>
                  <Link className="btn btn-outline-light btn-sm" to={post.fields.slug}>
                    Leer mas →
                  </Link>
                </p>
              </div>
            </div>))
          }
        </div>
      </div>
    </section>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 100)
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

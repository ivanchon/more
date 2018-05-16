import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (

      <section className="header-push-down">

        <section id="blog">

          <div className="container pb-5">
            <div className="row">
              <div className="col">
                <h2 className="headers-h2">Blog</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-9">

                <div className="row">
                  {posts
                    .filter(post => post.node.frontmatter.templateKey === 'blog-post')
                    .map(({ node: post }) => (
                      <div
                        className="col-12 col-sm-12"
                        style={{ border: '1px solid #eaecee', padding: '1em 2em', margin: '0.0em', marginBottom:'1em' }}
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
                          <Link className="btn btn-outline-light btn-sm" to={post.fields.slug}>
                            Keep Reading →
                          </Link>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <h4 className="text-center">TAGS</h4>

                </div>
              </div>
            </div>
          </section>

          <section>



          </section>


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

import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
//import ReactDisqusThread from 'react-disqus-thread'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  image,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content header-push-down blog-content pb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 style={{ color: 'white', fontFamily: 'Pathway Gothic One, sans-serif', fontSize: '3rem'}}>
              {title}
            </h1>
            <h5 className="mb-5" style={{ fontSize:'0.85rem', color: 'white'}}>Escrito por <strong>Carla Morrison</strong> el DATE </h5>
            <img src={image} className="mb-5"/>
            {/*<p>{description}</p>*/}
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h5 style={{ color: 'white', fontSize: '0.85rem' }}><span><i className="fa fa-tags"></i></span> Tags</h5>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}  style={{color: 'white', fontSize:'0.85rem', textDecoration:'none', textTransform:'uppercase', border: '1px solid white', borderRadius:'3px', padding:'3px 5px'}}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image
        description
        tags
      }
    }
  }
`

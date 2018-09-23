import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
//import Disqus from '../components/Disqus'
//import Disqus from '../components/DisqusCustom'
//import { v4 } from 'uuid'
//import { config } from '../../config.toml'

import { DiscussionEmbed } from "disqus-react";
import { disqusConfig } from  "../layouts/index.js"

//var idcom = v4();

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  image,
  helmet,
  templateKey,

}) => {
  const PostContent = contentComponent || Content



  return (
    <section className="section">
      {helmet || ''}
 
      <div className="container content header-push-down blog-content pb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light" style={{color:'white', marginBottom:'2rem'}}>
              {title} {templateKey}
            </h1>
            <img src={image} style={{marginBottom:'2rem'}}/>
            {/*<p>{description}</p>*/}
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

        </div>
        <div className="row">
          <div className="col-10 mx-auto">
          <DiscussionEmbed shortname={'carlamorrison'} config={disqusConfig} />

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
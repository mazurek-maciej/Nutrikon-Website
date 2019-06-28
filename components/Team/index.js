import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ProfileImage = styled(Img)`
  height: 20rem;
  overflow: hidden;
`

const Team = ({ posts, replacementImg }) => (
  <React.Fragment>
    {posts.map(post => (
      <div key={post.slug} className="column is-4">
        <Link to={post.slug}>
          <div style={{ borderRadius: '6px' }} className="card">
            <div className="card-image">
              <figure className="image">
                <ProfileImage
                  fluid={
                    post.photo
                      ? post.photo.fixed
                      : replacementImg.childImageSharp.fluid
                  }
                  alt={post.slug}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-5">{post.heading}</p>
                  <p className="subtitle is-6">{post.title}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </React.Fragment>
)

Team.propTypes = {
  posts: PropTypes.array.isRequired,
  replacementImg: PropTypes.object.isRequired,
}

export default Team

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const ProfileImage = styled(Img)`
  height: 20rem;
`

const TeamTile = ({ linkTo, img, alt, name }) => (
  <div className="column is-3">
    <Link to={linkTo}>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <ProfileImage fluid={img} alt={alt} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-6">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

TeamTile.propTypes = {
  img: PropTypes.object.isRequired,
  linkTo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TeamTile

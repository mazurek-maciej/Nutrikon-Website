import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import replacmentImage from '../images/backgroundLogo.jpg'
import H2 from './H2'
import Container from './Container'

const Wraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const ButtonWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const News = ({ posts }) => (
  <Wraper>
    <Container>
      <div className="columns is-centered is-multiline">
        {posts.map(post => (
          <div key={post.slug} className="column is-two-fifths">
            <div className="card">
              <div className="card-image">
                <figure className="image is-5by3">
                  <img
                    src={post.image ? post.image.resize.src : replacmentImage}
                    alt={post.slug}
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <H2 small news>
                      {post.title}
                    </H2>
                  </div>
                </div>
                <div className="content">
                  <p>{post.body.childMarkdownRemark.excerpt}</p>
                </div>

                <ButtonWraper>
                  <Link to={post.slug} className="button is-danger">
                    Dowiedz się więcej
                  </Link>
                </ButtonWraper>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Wraper>
)

export default News

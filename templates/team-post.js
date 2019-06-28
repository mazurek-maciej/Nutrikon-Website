import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import Container from '../components/Container'
import Section from '../components/Section'
import SEO from '../components/seo'
import { BackgroundGradient } from '../components/Backgrounds'
import H1 from '../components/Tags/H1'
import H2 from '../components/Tags/H2'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  display: block;
  max-height: 400px;
  box-shadow: 0px 5px 20px -4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`
const ContentPlaceholder = styled.article`
  max-width: 900px;
  width: 100%;
  li {
    list-style-type: decimal;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  ol,
  ul {
    padding-left: 2rem;
  }
  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.$secondary};
  }
  p {
    margin-bottom: 0.5rem;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`

const displayImage = (photo, slug) => {
  if (photo) {
    return <Image src={photo.resize.src} alt={slug} />
  }
}

class TeamPost extends Component {
  render() {
    const {
      heading,
      title,
      about,
      photo,
      slug,
    } = this.props.data.contentfulZespol
    return (
      <Layout>
        <SEO title={heading} />
        <BackgroundGradient>
          <Section>
            <Container>
              <Wrapper>
                <div style={{ maxWidth: '960px', width: '100%' }}>
                  <H1 flex red>
                    <Link to="/zespol">
                      <ion-icon
                        style={{ fontSize: '2rem' }}
                        name="ios-arrow-back"
                      />
                    </Link>
                    {heading}
                  </H1>
                  <H2 blue>{title}</H2>
                  <div className="columns">
                    <div className="column is-5">
                      {displayImage(photo, slug)}
                    </div>
                    <ContentPlaceholder
                      className="column is-7"
                      dangerouslySetInnerHTML={{
                        __html: about.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                </div>
              </Wrapper>
            </Container>
          </Section>
        </BackgroundGradient>
      </Layout>
    )
  }
}

TeamPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TeamPost

export const pageQuery = graphql`
  query teamMemberQuery($slug: String!) {
    contentfulZespol(slug: { eq: $slug }) {
      heading
      title
      slug
      about {
        childMarkdownRemark {
          html
        }
      }
      photo {
        resize(width: 1400) {
          src
        }
      }
    }
  }
`

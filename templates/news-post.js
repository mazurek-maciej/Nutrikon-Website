import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ImageZoom from 'react-medium-image-zoom'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import Container from '../components/Container'
import Section from '../components/Section'
import SEO from '../components/seo'
import BackgroundGradient from '../components/Backgrounds/BackgroundGradient'
import H1 from '../components/Tags/H1'

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    font-size: 2rem;
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
const Image = styled.img`
  width: ${props => (props.gallery ? '400px' : '900px')};
  height: ${props => (props.gallery ? '300px' : '600px')};
  margin-bottom: ${props => (props.gallery ? '1rem' : null)};
  padding: 1rem;
`
const GalleryWraper = styled.div`
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`
const BackButtonContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin-top: 1rem;
`

class NewsPost extends Component {
  render() {
    const { title, body, image } = this.props.data.contentfulAktualnosci
    console.log(image)
    return (
      <Layout>
        <SEO title={title} image={image.resize.src} />
        <BackgroundGradient>
          <Section>
            <Container>
              <Wraper>
                <H1 align="center">{title}</H1>
                {this.displayImage()}
                <BackButtonContainer>
                  <Link to="/">
                    <ion-icon name="ios-arrow-back" />
                    Wróc do strony głównej
                  </Link>
                </BackButtonContainer>
                <ContentPlaceholder
                  dangerouslySetInnerHTML={{
                    __html: body.childMarkdownRemark.html,
                  }}
                />
                {this.displayGallery()}
              </Wraper>
            </Container>
          </Section>
        </BackgroundGradient>
      </Layout>
    )
  }

  displayImage = () => {
    const alt = this.props.data.contentfulAktualnosci.slug
    if (this.props.data.contentfulAktualnosci.image) {
      return (
        <Image
          src={this.props.data.contentfulAktualnosci.image.resize.src}
          alt={alt}
        />
      )
    }
  }

  displayGallery = () => {
    const alt = this.props.data.contentfulAktualnosci.slug
    if (this.props.data.contentfulAktualnosci.gallery) {
      const { gallery } = this.props.data.contentfulAktualnosci
      return (
        <GalleryWraper>
          {gallery.map(post => (
            <ImageZoom
              image={{
                src: post.resize.src,
                alt,
                style: { width: '300px', height: '350px', padding: '1rem' },
              }}
              zoomImage={{
                src: post.resize.src,
                alt,
              }}
            />
          ))}
        </GalleryWraper>
      )
    }
  }
}

NewsPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default NewsPost

export const pageQuery = graphql`
  query newsPostQuery($slug: String!) {
    contentfulAktualnosci(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      image {
        resize(width: 1920) {
          src
        }
      }
      gallery {
        resize(width: 1920) {
          src
        }
      }
    }
  }
`

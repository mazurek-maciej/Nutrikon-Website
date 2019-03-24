import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Fade from 'react-reveal/Fade'
import SEO from '../components/seo'
import MainCarousel from '../components/Carousel/MainCarousel'
import Layout from '../components/Layout/layout'
import BackgroundIndex from '../components/Backgrounds/BackgroundGradient'
import News from '../components/news'
import logo from '../images/Nutrikon_Logo.svg'
import ZabiegiPromo from '../components/PromoTiles'
import H1 from '../components/Tags/H1'
import H2 from '../components/Tags/H2'
import Section from '../components/Section'
import Container from '../components/Container'

const TextWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  h1 {
    text-align: center;
  }
`
const TextContainer = styled.div`
  display: flex;
  max-width: 900px;
  justify-content: baseline;
  img {
    margin-right: 0.5rem;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column-reverse;
    img {
      margin: 0;
    }
  }
`
const Logo = styled.img`
  width: 3rem;
  height: 5rem;
`
const NewsWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default function IndexPage({ data }) {
  const posts = data.allContentfulAktualnosci.edges
    .slice(0, 4)
    .map(edge => edge.node)

  return (
    <Layout>
      <SEO
        title="Strona główna"
        keywords={[
          'Nutrikon, przychodnia opole, zabiegi opole, lekarz opole, mezoterapia, skleroterapia, laserowe leczenie elvt, fachowa pomoc',
        ]}
        lang="pl/PL"
      />
      <MainCarousel
        img={data.heroImage.childImageSharp.fluid}
        lectureImage={data.lectureImage.childImageSharp.fluid}
      />
      <main>
        <BackgroundIndex>
          <Section>
            <Container>
              <Fade big>
                <TextWraper>
                  <TextContainer>
                    <Logo src={logo} alt="Nutrikon logo" />
                    <H1 big>Przychodnia Nutrikon</H1>
                  </TextContainer>
                  <H2 big>
                    Traktujemy naszych Pacjentów z najwyższą troską oraz
                    zapewniamy fachową pomoc w wielu dziedzinach
                  </H2>
                </TextWraper>
              </Fade>
            </Container>
            <Container>
              <Fade>
                <ZabiegiPromo />
              </Fade>
            </Container>
          </Section>
          <section className="section">
            <Fade>
              <NewsWraper>
                <H2 big>Aktualności</H2>
                <News posts={posts} />
              </NewsWraper>
            </Fade>
          </section>
        </BackgroundIndex>
      </main>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "mezo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulAktualnosci(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 100)
            }
          }
          image {
            resize(width: 800) {
              src
            }
          }
        }
      }
    }
    lectureImage: file(relativePath: { eq: "lecture.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

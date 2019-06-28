import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import H1 from '../components/Tags/H1'
import { BackgroundGradient } from '../components/Backgrounds'
import Section from '../components/Section'
import Team from '../components/Team'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const TeamWrapper = styled.div`
  max-width: 900px;
  width: 100%;
`

const Zespol = ({ data }) => {
  const posts = data.allContentfulZespol.edges.map(edge => edge.node)
  return (
    <Layout>
      <SEO
        title="Zespół"
        keywords={['nutrikon, Krasowski, zespół']}
        lang="pl/PL"
      />
      <BackgroundGradient>
        <Section>
          <Wrapper>
            <H1 big>Nasz zespół</H1>
            <TeamWrapper>
              <div style={{ flexWrap: 'wrap' }} className="columns">
                <Team posts={posts} replacementImg={data.backgroundLogo} />
              </div>
            </TeamWrapper>
          </Wrapper>
        </Section>
      </BackgroundGradient>
    </Layout>
  )
}

Zespol.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Zespol

export const pageQuery = graphql`
  query {
    allContentfulZespol(sort: { fields: order }) {
      edges {
        node {
          slug
          heading
          title
          about {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          photo {
            fixed {
              src
            }
          }
        }
      }
    }
    backgroundLogo: file(relativePath: { eq: "backgroundLogo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

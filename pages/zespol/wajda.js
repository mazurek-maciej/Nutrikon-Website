import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../../components/Layout/layout'
import SEO from '../../components/seo'
import H1 from '../../components/Tags/H1'
import H2 from '../../components/Tags/H2'
import Background from '../../components/Backgrounds/BackgroundGradient'
import Section from '../../components/Section'
import Container from '../../components/Container'

const SmallColumn = styled.div``
const LargeColumn = styled.div``
const Image = styled(Img)`
  height: 400px;
  box-shadow: 0px 5px 20px -4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`

const Wajda = ({ data }) => (
  <Layout>
    <SEO
      title="Lek. med. Rober Wajda"
      keywords={['Robert Wajda']}
      lang="pl/PL"
    />
    <Background>
      <Section>
        <Container>
          <H1 red>
            <Link to="/zespol">
              <ion-icon style={{ fontSize: '2rem' }} name="ios-arrow-back" />
            </Link>
            lek. med. Robert Wajda
          </H1>
          <H2 blue>Specjalista chirurgii ogólnej</H2>
          <div className="columns">
            <SmallColumn className="column is-4">
              <Image fluid={data.person.childImageSharp.fluid} />
            </SmallColumn>
            <LargeColumn className="column is-8">
              <H2 blue>Życiorys</H2>
              <p>
                W 2005 r. ukończył Śląską Akademię Medyczną w Katowicach,
                kierunek lekarski na wydziale Lekarskim w Zabrzu. Na co dzień
                pracuje w Krapkowickim Centrum Zdrowia Sp. z o.o.
              </p>
              <H2 blue style={{ marginTop: '1rem' }}>
                Zainteresowania zawodowe
              </H2>
              <p>Żywienie pozajelitowe, dojelitowe.</p>
            </LargeColumn>
          </div>
        </Container>
      </Section>
    </Background>
  </Layout>
)

Wajda.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Wajda

export const pageQuery = graphql`
  query {
    person: file(relativePath: { eq: "RobertWajda.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

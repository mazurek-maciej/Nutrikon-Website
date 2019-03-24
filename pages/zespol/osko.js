import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'

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

const Osko = ({ data }) => (
  <Layout>
    <SEO title="Dr Andrzej Ośko" keywords={['Andrzej Ośko']} lang="pl/PL" />
    <Background>
      <Section>
        <Container>
          <H1 red>
            <Link to="/zespol">
              <ion-icon style={{ fontSize: '2rem' }} name="ios-arrow-back" />
            </Link>
            Dr Andrzej Ośko
          </H1>
          <H2 blue>Specjalista Ginekolog-Położnik</H2>
          <div className="columns">
            <SmallColumn className="column is-4">
              <Image fluid={data.person.childImageSharp.fluid} />
            </SmallColumn>
            <LargeColumn className="column is-8">
              <H2 blue>Życiorys</H2>
              <p>
                Jestem specjalistą w zakresie położnictwa i ginekologii oraz
                perinatologii, absolwentem Śląskiego Uniwersytetu Medycznego w
                Katowicach z Wydziałem Lekarskim w Zabrzu.
              </p>
              <p>
                Na co dzień pracuję w Centrum Położnictwa, Ginekologii oraz
                Neonatologii w Opolu jako starszy asystent. Posiadam
                specjalizację w dziedzinie Perinatologii (medycynie
                matczyno-płodowej) jako jeden z dwóch lekarzy w województwie
                Opolskim. Od paru lat wykonuje badania prenatalne oraz
                diagnostykę inwazyjną płodu.
              </p>
              <p>
                Interesuje mnie każdy problem, z którym przychodzi kobieta na
                wizytę, choć wiem że nie każdy problem można rozwiązać w łatwy i
                szybki sposób.
              </p>
            </LargeColumn>
          </div>
        </Container>
      </Section>
    </Background>
  </Layout>
)

Osko.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Osko

export const pageQuery = graphql`
  query {
    person: file(relativePath: { eq: "Osko.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

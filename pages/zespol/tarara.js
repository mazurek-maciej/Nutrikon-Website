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

const Tarara = ({ data }) => (
  <Layout>
    <SEO
      title="Lek. med. Katarzyna Tarara"
      keywords={['Katarzyna Tarara']}
      lang="pl/PL"
    />
    <Background>
      <Section>
        <Container>
          <H1 red>
            <Link to="/zespol">
              <ion-icon style={{ fontSize: '2rem' }} name="ios-arrow-back" />
            </Link>
            lek. med. Katarzyna Tarara
          </H1>
          <H2 blue>Specjalista położnictwa i ginekologii</H2>
          <div className="columns">
            <SmallColumn className="column is-4">
              <Image fluid={data.person.childImageSharp.fluid} />
            </SmallColumn>
            <LargeColumn className="column is-8">
              <H2 blue>Życiorys</H2>
              <p>
                Absolwentka wydziału lekarskiego Śląskiego Uniwersytetu
                Medycznego w Zabrzu, odbywająca staże zawodowe m.in. w Wiedniu i
                Monachium z biegłą znajomością języka niemieckiego i
                angielskiego, od 2015r. specjalista położnictwa i ginekologii.
              </p>
              <p>
                Obecnie asystent w Centrum Ginekologii, Położnictwa i
                Neonatologii w Opolu
              </p>
              <p>
                W obszarze zainteresowań znajduje się szeroko pojęta operatywa
                ginekologiczna, w tym zabiegi endoskopowe i laparoskopowe, a w
                ostatnim czasie również zabiegi z dziedziny ginekologii
                estetycznej.
              </p>
              <p>
                Od blisko 2 lat w trakcie specjalizacji z chirurgii ogólnej.
              </p>
            </LargeColumn>
          </div>
        </Container>
      </Section>
    </Background>
  </Layout>
)

Tarara.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Tarara

export const pageQuery = graphql`
  query {
    person: file(relativePath: { eq: "KatarzynaTarara.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

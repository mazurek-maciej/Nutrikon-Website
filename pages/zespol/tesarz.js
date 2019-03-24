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

const Tesarz = ({ data }) => (
  <Layout>
    <SEO
      title="Małgorzata Tesarz"
      keywords={['Małgorzata Tesarz']}
      lang="pl/PL"
    />
    <Background>
      <Section>
        <Container>
          <H1 red>
            <Link to="/zespol">
              <ion-icon style={{ fontSize: '2rem' }} name="ios-arrow-back" />
            </Link>
            Małgorzata Tesarz
          </H1>
          <div className="columns">
            <SmallColumn className="column is-4">
              <Image fluid={data.person.childImageSharp.fluid} />
            </SmallColumn>
            <LargeColumn className="column is-8">
              <H2 blue>Życiorys</H2>
              <p>
                Ukończyła Liceum Medyczne w Opolu z tytułem Pielęgniarka
                Dyplomowana. Prace zawodową rozpoczęła w 1989r na Oddziale
                Intensywnej Terapii Szpital Wojewódzkiego w Opolu kolejno
                Chirurgii Ogólnej. Od 2007r poszerza swoje kompetencje i zajmuje
                się pielęgniarską opieką długoterminową domową. Obecnie jest w
                trakcie specjalizacji geriatrycznej, zajmuje się ranami
                przewlekłymi, zarządza pracą pielęgniarek i położnych.
              </p>
              <H2 blue style={{ marginTop: '1rem' }}>
                Doświadczenie zawodowe
              </H2>
              <p>
                ・ Praca w oddziale Anestezjologii intensywnej Terapii, w
                oddziale Chirurgii Ogólnej,
              </p>
              <p>・ 10 lat pracy w opiece długoterminowej domowej,</p>
              <p>
                ・ Od 11 lat prowadzi własną działalność: usługi opiekuńcze i
                pielęgniarskie w miejscu zamieszkania podopiecznego.
              </p>
              <H2 blue style={{ marginTop: '1rem' }}>
                Kwalifikacje
              </H2>
              <p>
                Pielęgniarka dyplomowana, specjalista pielęgniarstwa
                zachowawczego, specjalizacja z pielęgniarstwa geriatrycznego,
                organizacja i zarządzanie dla pielęgniarek i położnych,
                pielęgniarstwo rodzinne dla pielęgniarek, leczenie ran,
                resuscytacji krążeniowo-oddechowej, pielęgniarstwo ratunkowe,
                opieka pielęgniarska nad pacjentem onkologicznym, opieka nad
                pacjentem z zaburzeniami psychicznymi, żywienie pozajelitowe i
                dojelitowe w warunkach domowych.
              </p>
            </LargeColumn>
          </div>
        </Container>
      </Section>
    </Background>
  </Layout>
)

Tesarz.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Tesarz

export const pageQuery = graphql`
  query {
    person: file(relativePath: { eq: "MałgorzataTasarz.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

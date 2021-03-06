import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/Layout/layout'
import Underline from '../components/Underline'
import H1 from '../components/Tags/H1'
import H2 from '../components/Tags/H2'
import { BackgroundGradient } from '../components/Backgrounds'
import SEO from '../components/seo'
import Section from '../components/Section'
import Container from '../components/Container'

const HeroOnas = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 50vh;
  img {
    object-fit: cover !important;
    object-position: 50% 30% !important;
  }
`
const AboutP = styled.p`
  width: 100%;
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
  .Span {
    color: ${({ theme }) => theme.colors.$secondaryBlue};
    font-weight: 600;
  }
  .check {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.$secondaryBlue};
    margin-right: 1rem;
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1.5rem;
`

const Onas = ({ data }) => (
  <Layout>
    <SEO
      title="O nas"
      keywords={['nutrikon, przychodnia, specjaliści, chirurg']}
      lang="pl/PL"
    />
    <HeroOnas fluid={data.onasImage.childImageSharp.fluid} />
    <BackgroundGradient>
      <Section>
        <Container>
          <Wrapper>
            <H1 red>Nutrikon</H1>
            <Underline long red />
            <H2 small>
              Nutrikon jest placówką o szerokim spektrum działalności medycznej
              i odbywa się na kilku płaszczyznach:
            </H2>

            <AboutP>
              <span className="check">✓</span>
              <span className="Span">W naszej przychodni</span> oferujemy
              najwyższy poziom usług i opieki medycznej znakomitego i wysoko
              specjalistycznego zespołu, zarówno lekarskiego jak i
              pielęgniarskiego z zakresu:
            </AboutP>
            <ListWrapper>
              <ul>
                <li>・ chirurgii ogólnie i onkologicznej</li>
                <li>・ ginekologii i położnictwa</li>
                <li>・ ginekologii estetycznej</li>
                <li>・ medycyny estetycznej</li>
                <li>・ żywienia</li>
                <li>・ interny</li>
                <li>・ gastroenterologii</li>
              </ul>
            </ListWrapper>

            <AboutP>
              W kręgu naszych specjalnych zainteresowań znajduje się
              problematyka chorób żylnych. Natomiast wychodząc na przeciw
              oczekiwaniom naszych pacjentów oferujemy także zabiegi laserowe z
              zakresu medycyny estetycznej: zabiegi mezoterapii, osocza
              bogatopłytkowego z fibryną, a także z zakresu ginekologii
              estetycznej np: leczenie atrofii pochwy, leczenie nietrzymania
              moczu.{' '}
            </AboutP>
            <AboutP>
              <span className="check">✓</span>W Nutrikonie oferujemy również
              pomoc osobom wymagającym odżywiania drogą sztuczną, zarówno do
              przewodu pokarmowego (gastrostomia lub jejunostomia), jak i drogą
              dożylną (pozajelitową). Z myślą o naszych pacjentach zajmujemy się
              leczeniem żywieniowym w warunkach domowych. W naszej Poradni
              Leczenia Żywieniowego, zgodnie z obowiązującymi przepisami, odbywa
              się klasyfikacja do żywienia dojelitowego. W tym zakresie działamy
              już od 2012 r.
            </AboutP>
            <AboutP>
              <span className="check">✓</span>Z doświadczenia, wiemy jak ważne
              jest nieustanne pogłębianie wiedzy, dlatego też zakres naszych
              usług poszerzyliśmy o działalność szkoleniową na indywidualne
              zlecenia podmiotów leczniczych, izb pielęgniarskich i innych
              zainteresowanych. Organizujemy szkolenia w dziedzinie leczenia
              żywieniowego oraz z innych zagadnień medycznych. Od 2009 roku
              organizujemy cyklicznie coroczne spotkania pod nazwą "Opolskie
              Warsztaty Medyczne" z zakresu aktualnych wytycznych w leczeniu ran
              przewlekłych oraz w leczeniu żywieniowym.
            </AboutP>
          </Wrapper>
        </Container>
      </Section>
    </BackgroundGradient>
  </Layout>
)

Onas.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Onas

export const pageQuery = graphql`
  query {
    onasImage: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    przychodnia: file(relativePath: { eq: "przychodnia.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

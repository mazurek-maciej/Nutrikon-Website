import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Layout from '../../components/Layout/layout'
import ZabiegiNav from '../../components/Navigation/zabiegi-nav'
import heartImg from '../../images/heart.svg'
import stopImg from '../../images/no-stopping.svg'
import H1 from '../../components/Tags/H1'
import H2 from '../../components/Tags/H2'
import Li from '../../components/Tags/Li'
import Red from '../../components/Red'
import Green from '../../components/Green'
import {
  BoxNegativeColor,
  BoxPositiveColor,
  BoxNeutralColor,
} from '../../components/Backgrounds'
import SEO from '../../components/seo'
import Section from '../../components/Section'
import Container from '../../components/Container'

const HeroZabiegi = styled(Img)`
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
const Divider = styled.div`
  content: '';
  width: 2px;
  height: inherit;
  background-color: #c1224f;
  margin: 0 20px 0 20px;
`
const Zabiegi = styled.div`
  background: linear-gradient(180deg, #f9f9f9 40%, #ddf5ff 80%);
  li {
    list-style-type: none;
  }
`

const Mezoterapia = ({ data }) => (
  <Layout>
    <SEO
      title="Mezoterapia"
      keywords={[
        'mezoterapia, regeneracja skóry, leczenie cellulitu, kolagen, skóra',
      ]}
      lang="pl/PL"
    />
    <HeroZabiegi fluid={data.zabieg.childImageSharp.fluid} />
    <Zabiegi>
      <Section>
        <Container>
          <div className="columns">
            <div className="column is-9">
              <H1 small red>
                Mezoterapia
              </H1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="tile is-child">
                      <p>
                        Mezoterapia - polega na wprowadzeniu bezpośrednio do
                        skóry właściwego preparatu zawierającego substancje
                        odżywcze, regenerujące albo lecznicze. Jest
                        niechirurgiczną metodą stosowaną dla regeneracji,
                        poprawy wyglądu skóry, jej odmłodzenia, w leczeniu
                        cellulitu, rozstępów a także w leczeniu i profilaktyce
                        łysienia. Dzięki śródskórnym wstrzyknięciom aktywnego
                        preparatu poprawia się mikrokrążenie w tkance podskórnej
                        oraz zwiększa metabolizm komórek tłuszczowych.
                        Powodzenie zabiegu zależy od jakości użytych preparatów
                        dlatego też w naszej praktyce stosujemy bezpieczne i
                        wysokiej jakości produkty firmy NEAUVIA. Więcej
                        informacji o stosowanych przez nas preparatach w
                        mezoterapii znajduje się na stronie www.neauvia.pl Do
                        osiągnięcia optymalnych rezultatów zalecana jest seria 4
                        zabiegów przeprowadzonych w odstępach 3 tygodni.
                      </p>
                    </div>
                    <BoxPositiveColor mT>
                      <H2 blue>
                        <img
                          style={{
                            width: '32px',
                            height: '32px',
                            margin: '0 5px',
                          }}
                          alt="Działanie pozytywne"
                          src={heartImg}
                        />
                        Działanie
                      </H2>
                      <Li>
                        <Green>✓</Green> Poprawa gęstości skóry;
                      </Li>
                      <Li>
                        <Green>✓</Green> Optymalne nawilżenie i odżywienie;
                      </Li>
                      <Li>
                        <Green>✓</Green> Regeneracja i korekta drobnych
                        zmarszczek;
                      </Li>
                      <Li>
                        <Green>✓</Green> Rewitalizacja i produkcja kolagenu.
                      </Li>
                    </BoxPositiveColor>
                    <BoxNeutralColor mT>
                      <div className="tile is-parent">
                        <article className="tile is-child golden-border">
                          <H2 blue>Przed zabiegiem</H2>
                          <Li>
                            ・ Na 5 dni przed zabiegiem należy odstawić aspirynę
                            i inne leki wpływające na krzepliwość krwi;
                          </Li>
                          <Li>
                            ・ Można stosować preparaty wzmacniające naczynia.
                          </Li>
                        </article>
                        <Divider />
                        <article className="tile is-child">
                          <H2 blue>Po zabiegu</H2>
                          <Li>
                            ・ Przez kilkanaście godzin może utrzymywać się
                            ślady wkłucia;
                          </Li>
                          <Li>・ Możliwe zasinienia;</Li>
                          <Li>
                            ・ W dniu zabiegu należy unikać sauny, solarium i
                            dużego wysiłku fizycznego.
                          </Li>
                        </article>
                      </div>
                    </BoxNeutralColor>
                    <BoxNegativeColor mT>
                      <H2 blue>
                        <img
                          style={{
                            width: '32px',
                            height: '32px',
                            margin: '0 5px',
                          }}
                          alt="Przeciwwskazania"
                          src={stopImg}
                        />
                        Przeciwwskazania
                      </H2>
                      <Li>
                        <Red>✕</Red> Infekcje (opryszczka, trądzik) i stany
                        zapalne skóry;
                      </Li>
                      <Li>
                        <Red>✕</Red> Zaburzenia układu odpornościowego (pacjenci
                        po przeszczepach, choroby z autoagresji);
                      </Li>
                      <Li>
                        <Red>✕</Red> Ciąża i okres karmienia;
                      </Li>
                      <Li>
                        <Red>✕</Red> Nadwrażliwość na składniki preparatu.
                      </Li>
                    </BoxNegativeColor>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-3">
              <ZabiegiNav />
            </div>
          </div>
        </Container>
      </Section>
    </Zabiegi>
  </Layout>
)

Mezoterapia.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Mezoterapia

export const pageQuery = graphql`
  query {
    zabieg: file(relativePath: { eq: "mezo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

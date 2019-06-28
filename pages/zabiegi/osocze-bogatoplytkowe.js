import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Layout from '../../components/Layout/layout'
import ZabiegiNav from '../../components/Navigation/zabiegi-nav'
import stopImg from '../../images/no-stopping.svg'
import H1 from '../../components/Tags/H1'
import H2 from '../../components/Tags/H2'
import Li from '../../components/Tags/Li'
import Red from '../../components/Red'
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
const OsoczeBogatoplytkowe = ({ data }) => (
  <Layout>
    <SEO
      title="Osocze bogatopłytkowe"
      keywords={[
        'lifting wampirzy, osocze bogatopłytkowe, wygładzanie zmarszczek',
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
                Osocze bogatopłytkowe
              </H1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="tile is-child">
                      <article>
                        Lifting wampirzy — bo również pod taką nazwą znany jest
                        zabieg z osoczem bogatopłytkowym, to innowacyjny i
                        wysoce skuteczny zabieg, który opiera się na uzyskaniu
                        osocza bogatopłytkowego z własnej krwi pacjenta.
                         Uzyskana stężona zawiesina autologicznych płytek krwi w
                        stosunkowo niewielkiej objętości osocza poprawia jej
                        gęstość, napięcie, fakturę i wyrównuje koloryt. Wygładza
                        zmarszczki na skórze twarzy, szyi, dekoltu i dłoni.
                        Pozostawia cerę odżywioną oraz w pełni zregenerowaną.
                        Przyspiesza procesy gojenia się ran.
                      </article>
                    </div>

                    <br />
                    <BoxPositiveColor mT>
                      <H2 blue>Wskazania</H2>
                      <p>
                        Ostrzykiwanie osoczem jest doskonałą alternatywą dla
                        osób, które ze względów zdrowotnych (alergia, lub inne
                        przeciwwskazania) nie mogą stosować innych wypełniaczy.
                        Zabieg zalecany jest w celu niwelowania oznak starzenia.
                        Doskonale wygładza fałdy, bruzdy, zmarszczki — również
                        kurze łapki w okolicach oczu. Skóra po zabiegu osoczem
                        bogatopłytkowym jest wyraźnie jędrniejsza,
                        zregenerowana, a jej gęstość zwiększona.
                      </p>
                      <p>
                        Mezoterapia osoczem bogatopłytkowym zalecana jest także
                        Pacjentom mającym problem z przesuszoną, zmęczoną skórą,
                        wyrównuje jej koloryt, usuwając przebarwienia, cienie i
                        blizny. Aplikowanie osocza bogatopłytkowego na włosy
                        również daje pozytywne efekty. Opóźnia proces łysienia,
                        pobudza włosy do wzrostu. Sprawia, że stają się gęste,
                        mocne i zdrowe.
                      </p>
                    </BoxPositiveColor>

                    <BoxNeutralColor mT>
                      <article>
                        <H2 blue>Przed zabiegiem</H2>
                        <p>
                          Zabieg osoczem bogatopłytkowym trwa około 35-45 minut
                          i jest mało bolesny. Przed zabiegiem Osoczem
                          bogatopłytkowym z uwagi na lepsze właściwości krwi
                          należy się do niego wcześniej przygotować. Na 2
                          tygodnie przed planowanym zabiegiem warto zrezygnować
                          z używek, zmienić żywność na zdrowszą i pić co
                          najmniej 1,5 l. wody w ciągu dnia. Jakość krwi i
                          osocza znajduje odzwierciedlenie w stylu i jakości
                          życia – wpływa to na lepsze i bardziej spektakularne
                          efekty terapii osoczem bogatopłytkowym. Istotne jest
                          również postępowanie po zabiegu co wpływa na
                          osiągnięciu maksymalnych efektów. Bezpośrednio po
                          zabiegu mogą pojawić się małe zaczerwienienia oraz
                          widoczne ślady wkłuć. Objawy znikają po kilu dniach, a
                          efekty widoczne są po upływie kilku tygodni. Skóry po
                          zabiegu nie wolno opalać ani korzystać z sauny. Zaleca
                          się wykonanie serii czterech zabiegów co 2-4 tygodni.
                          Zabieg osoczem bogatopłytkowym można łączyć z innymi
                          metodami rewitalizacji i odmładzania skóry.
                        </p>
                      </article>
                    </BoxNeutralColor>

                    <BoxNeutralColor mT>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <H2 blue>Przebieg zabiegu</H2>
                          <p>
                            W zabiegu można zastosować znieczulenie miejscowe a
                            substancje czynne podaje się pacjentowi w formie
                            mezoterapii lub wypełnienie wzdłuż linii fałdu lub
                            zmarszczki. W uzyskanym osoczy dochodzi do
                            koncentracji płytek, które po podaniu do skóry,
                            uwalniają czynniki wzrostu odpowiedzialne za
                            regenerację.
                          </p>
                        </article>
                        <Divider />
                        <article className="tile is-child">
                          <H2 blue>Efekty zabiegu</H2>
                          <Li>
                            ・ Rewitalizuje skórę twarzy, szyi, dekolty, rąk
                          </Li>
                          <Li>
                            ・ Poprawia ukrwienie skóry i wygładza zmarszczki;
                          </Li>
                          <Li>・ Hamuje proces łysienia</Li>
                          <Li>
                            ・ Przyspiesza gojenie również po innych zabiegach,
                            np. w stomatologii
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
                        <Red>✕</Red> Choroby autoimmunologiczne
                      </Li>
                      <Li>
                        <Red>✕</Red> Ciąża i laktacja
                      </Li>
                      <Li>
                        <Red>✕</Red> Zaburzenia krzepnięcia krwi
                      </Li>
                      <Li>
                        <Red>✕</Red> Ostre choroby zapalne
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

OsoczeBogatoplytkowe.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OsoczeBogatoplytkowe

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

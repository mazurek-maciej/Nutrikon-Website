import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../../components/Layout/layout'
import ZabiegiNav from '../../components/Navigation/zabiegi-nav'
import stopImg from '../../images/no-stopping.svg'
import H1 from '../../components/Tags/H1'
import H2 from '../../components/Tags/H2'
import Li from '../../components/Tags/Li'
import Red from '../../components/Red'
import BoxNeutralColor from '../../components/Backgrounds/BoxNeutralColor'
import BoxNegativeColor from '../../components/Backgrounds/BoxNegativeColor'
import BoxPositiveColor from '../../components/Backgrounds/BoxPositiveColor'
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
const Zabiegi = styled.div`
  background: linear-gradient(180deg, #f9f9f9 40%, #ddf5ff 80%);
  li {
    list-style-type: none;
  }
`

const Rewitalizacja = ({ data }) => (
  <Layout>
    <SEO
      title="Rewitalizacja pochwy"
      keywords={['rewitalizacja pochwy, menopauza, atrofia pochwy']}
      lang="pl/PL"
    />
    <HeroZabiegi fluid={data.zabieg.childImageSharp.fluid} />
    <Zabiegi>
      <Section>
        <Container>
          <Link to="/poradnie/ginekologiczno-poloznicza">
            <ion-icon name="ios-arrow-back" />
            Poradnia ginekologiczno-położnicza
          </Link>
          <div className="columns">
            <div className="column is-9">
              <H1 small red>
                Rewitalizacja pochwy
              </H1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="tile is-child">
                      <article>
                        <p>
                          Menopauza to nowy etap i wyjątkowy czas dla każdej
                          kobiety. Zmiany zachodzące w tym okresie dotyczą
                          również narządów intymnych, mając znaczący wpływ na
                          sferę samopoczucia. Atrofia pochwy to ubytek nabłonka
                          śluzówki do jej zaniku włącznie i dotyka aż ponad
                          połowę kobiet w wieku menopauzalnym. Najczęściej jest
                          efektem niedoboru lub zaburzeń w produkcji hormonów –
                          estrogenów. Błona śluzowa pochwy traci elastyczność,
                          staje się słabo nawilżona i odżywiona. Do objawów
                          atrofii pochwy zaliczamy uczucie suchości pochwy,
                          swędzenie, pieczenie, nawracające infekcje pochwy a
                          także ból odczuwany przy stosunku seksualnym.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                          Odpowiedzią na tego typu dolegliwości jest Laserowe
                          leczenie atrofii błony śluzowej pochwy. Zabieg może
                          zatrzymać lub zredukować procesy tego typu, a efektem
                          jest gruntowna odbudowa błony śluzowej pochwy.
                        </p>
                      </article>
                      <br />
                      <dfn
                        className="subtitle"
                        style={{ textDecoration: 'underline' }}
                      >
                        Wskazania:
                      </dfn>
                      <br />
                      <dfn>
                        Zabieg przeznaczony jest dla pacjentek odczuwających
                        dolegliwości m.in: suchość pochwy, ból przy odbywaniu
                        stosunku płciowego, nawracające infekcje pochwy i układu
                        moczowego
                      </dfn>
                    </div>
                    <br />
                    <BoxPositiveColor mT>
                      <H2 blue>Przebieg zabiegu</H2>
                      <p style={{ marginBottom: '1rem' }}>
                        Zabieg nie wymaga nie wymaga specjalnych przygotowań i w
                        większości jest bezbolesny. W pozostałych przypadkach
                        jest stosowane znieczulenie miejscowe.
                      </p>
                      <p>
                        Podczas zabiegu  do pochwy zostaje wprowadzona głowica
                        lasera. Dostarczona energia działa na kanał i okolice
                        ujścia pochwy i wpływa bezpośrednio na jej błonę
                        śluzową, stymulując aktywację fibroblastów, które
                        produkując nowy kolagen. Po zabiegu laserowego leczenia
                        atrofii pochwy pochwa staje się bardziej nawilżona i
                        elastyczna. Dolegliwości związane z atrofią ustępują,
                        czyli znika ból odczuwany podczas stosunku, uczucie
                        pieczenia i suchości pochwy.
                      </p>
                      <p style={{ marginTop: '1rem' }}>
                        Zabieg leczenia atrofii trwa kilkanaście minut
                      </p>
                      <p style={{ marginTop: '1rem' }}>
                        Zabieg wykonuje się w serii 3 w odstępach ci 4-6 tyg. Po
                        zabiegu pacjentki otrzymują miejscową terapię hormonalną
                        celem nasilenia i utrzymania efektów zabiegu
                      </p>
                    </BoxPositiveColor>

                    <BoxNeutralColor mT>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <H2 blue>Zalecenia po zabiegu</H2>
                          <p>
                            Po zabiegu niektóre pacjentki mogą odczuwać
                            niewielki dyskomfort. Stan ten jednak ulega
                            stopniowej zmianie – wraz z odbudową błony śluzowej
                            powraca komfort. Należy unikać kontaktów seksualnych
                            przez 7 dni.
                          </p>
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
                        <Red>✕</Red> Stan zapalny w obrębie układu
                        moczowo-płciowego lub zmiany chorobowe
                      </Li>
                      <Li>
                        <Red>✕</Red> Ciąża i laktacja
                      </Li>
                      <Li>
                        <Red>✕</Red> Miesiączka
                      </Li>
                      <Li>
                        <Red>✕</Red> Zmiany nowotworowe  lub leczenie
                        nowotworowe do 5 lat wstecz
                      </Li>
                      <Li>
                        <Red>✕</Red> Zmiany anatomiczne pochwy
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

Rewitalizacja.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Rewitalizacja

export const pageQuery = graphql`
  query {
    zabieg: file(relativePath: { eq: "gine.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

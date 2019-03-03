import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/Layout/layout'
import ZabiegiNav from '../../components/Navigation/zabiegi-nav'
import styled from 'styled-components'
import stopImg from '../../images/no-stopping.svg'
import H1 from '../../components/H1'
import H2 from '../../components/H2'
import Red from '../../components/Red'
import Li from '../../components/Li'
import BoxNeutralColor from '../../components/BoxNeutralColor'
import BoxNegativeColor from '../../components/BoxNegativeColor'
import BoxPositiveColor from '../../components/BoxPositiveColor'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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

const LaseroweLeczenieNietrzymania = ({ data }) => (
  <Layout>
    <SEO
      title={'Laserowe leczenie nietrzymania moczu'}
      keywords={[
        'nietrzymanie moczu, leczenie nietrzymania moczu, niemożliwość trzymania moczu',
      ]}
      lang={'pl/PL'}
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
                Laserowe leczenie nietrzymania moczu
              </H1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="tile is-child">
                      <article>
                        Wysiłkowe nietrzymanie moczu jest częstą dolegliwością
                        kobiet i objawia się mimowolną utratą moczu w trakcie
                        kichania, kaszlu, wysiłku fizycznego, a także w innych w
                        sytuacjach życia codziennego np. w czasie stosunku
                        płciowego. Problem dotyczy wielu kobiet w różnym wieku,
                        zarówno po porodzie naturalnym jak i po okresie
                        menopauzy. Zazwyczaj jest to kwestia osłabienia mięśni
                        dna miednicy (mięśni Kegla) oraz rozciągnięcia pochwy,
                        czego efektem jest zmiana kąta nachylenia cewki moczowej
                        w stosunku do pęcherza moczowego. W porównaniu do
                        dotychczas stosowanych metod (operacje wszywania taśm i
                        siatek), zabieg laserem jest metodą jest bezbolesną i
                        mało inwazyjną i nie wymaga znieczulenia ani
                        hospitalizacji (tzw. zabieg ambulatoryjny).
                      </article>
                    </div>
                    <BoxPositiveColor mT>
                      <H2 blue>Przebieg zabiegu</H2>
                      <p>
                        Laserowe leczenie nietrzymania moczu to fototermiczne,
                        nieablacyjne obkurczenie przedniej ściany pochwy. Do
                        zabiegu wykorzystuje się laser CO2, który powoduje
                        wzmocnienie ścian pochwy, powięzi wewnątrzmiedniczej
                        oraz obszar ujścia cewki moczowej. Wiązka laserowa
                        stymuluje włókna kolagenowe śluzówki, co w efekcie
                        prowadzi do ich namnażania i wzmocnienia. Pochwa staje
                        się naturalnie sprężysta i napięta. W efekcie dochodzi
                        do obkurczenie tkanek poddanych zabiegowi, a to prowadzi
                        do zmniejszenia kąta nachylenia cewki moczowej i
                        przywraca jej normalną funkcjonalność. W wyniku
                        działania lasera, błona śluzowa pochwy staje się
                        bardziej elastyczna i napięta. Zabieg jest najmniej
                        inwazyjnym i najbezpieczniejszym zabiegiem i jest
                        całkowicie bezbolesny dla Pacjentki.
                      </p>
                    </BoxPositiveColor>
                    <BoxNeutralColor mT>
                      <dfn blue style={{ textDecoration: 'underline' }}>
                        Wskazania:
                      </dfn>
                      <br />
                      <dfn>
                        niemożność utrzymania moczu podczas zwykłych czynności
                        jak np. kichnięcie, kaszel, wysiłek fizyczny
                      </dfn>
                    </BoxNeutralColor>

                    <BoxNeutralColor mT>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <H2 blue>Zalecenia pozabiegowe</H2>
                          <p>
                            Laserowe obkurczanie pochwy nie łączy się z długą
                            rekonwalescencją i Pacjentka może wrócić do
                            codziennych czynności bezpośrednio po zabiegu.
                            Istnieje jedynie kilka zaleceń pozabiegowych:
                          </p>
                          <Li>
                            ・ Możliwe jest wystąpienie przesięku surowiczego,
                            więc zaleca się stosowanie podpasek do momentu, aż
                            przesięk nie ustąpi
                          </Li>
                          <Li>
                            ・ Nie wolno utrzymywać stosunków płciowych przez 7
                            dni od zabiegu ani intensywnych ćwiczeń fizycznych
                          </Li>
                          <Li>
                            ・ Pacjentki po zabiegu otrzymują miejscową terapię
                            hormonalną w celu nasilenia i utrzymania efektu
                            zabiegu
                          </Li>
                        </article>
                        <Divider />
                        <article className="tile is-child golden-border">
                          <H2 blue>Częstotliwość</H2>
                          <p>
                            Zabiegi wykonuje się w serii 3 w odstępach co 4-6
                            tygodni, co daje najlepsze efekty kliniczne
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
                        <Red>✕</Red> Infekcje pochwy
                      </Li>
                      <Li>
                        <Red>✕</Red> Ciąża i okres laktacji
                      </Li>
                      <Li>
                        <Red>✕</Red> Menstruacja
                      </Li>
                      <Li>
                        <Red>✕</Red> Choroby nowotworowe, poniżej 5 lat od
                        rozpoznania
                      </Li>
                      <Li>
                        <Red>✕</Red> Ciężkie choroby ogólnoustrojowe
                      </Li>
                      <Li>
                        <Red>✕</Red> Przyjmowanie leków, ziół i innych środków
                        wrażliwych na promieniowanie
                      </Li>
                      <Li>
                        <Red>✕</Red> spożywanie alkoholu na 24 godz. przed
                        zabiegiem
                      </Li>
                      <Li>
                        <Red>✕</Red> depilacja, peeling i inne działania
                        drażniące okolicy poddanej zabiegowi laserowemu na 24
                        godz. przed zabiegiem
                      </Li>
                      <Li>
                        <Red>✕</Red> Choroba zakrzepowo-zatorowa
                      </Li>
                    </BoxNegativeColor>
                    <dfn>~Należy posiadać aktualny wynik cytologii.</dfn>
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

export default LaseroweLeczenieNietrzymania

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

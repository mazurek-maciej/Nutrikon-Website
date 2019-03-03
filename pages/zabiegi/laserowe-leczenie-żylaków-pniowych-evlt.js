import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/Layout/layout'
import ZabiegiNav from '../../components/Navigation/zabiegi-nav'
import styled from 'styled-components'
import BoxNegativeColor from '../../components/BoxNegativeColor'
import BoxNeutralColor from '../../components/BoxNeutralColor'
import BoxPositiveColor from '../../components/BoxPositiveColor'
import H1 from '../../components/H1'
import H2 from '../../components/H2'
import Red from '../../components/Red'
import Green from '../../components/Green'
import Li from '../../components/Li'
import heartImg from '../../images/heart.svg'
import stopImg from '../../images/no-stopping.svg'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
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

const LaseroweLeczenieELVT = ({ data }) => (
  <Layout>
    <SEO
      title={'Laserowe leczenie żylaków pniowych ELVT'}
      keywords={[
        'leczenie żylaków pniowych, laserowe leczenie elvt, żylaki kończyn, żylaki, naczynia żylne',
      ]}
      lang={'pl/PL'}
    />
    <HeroZabiegi fluid={data.zabieg.childImageSharp.fluid} />
    <Zabiegi>
      <Section>
        <Container>
          <Link to="/poradnie/chirurgia-ogolna">
            <ion-icon name="ios-arrow-back" />
            Poradnia chirurgi ogólnej
          </Link>
          <div className="columns">
            <div className="column is-9">
              <H1 small red>
                Laserowe leczenie żylaków pniowych EVLT
              </H1>
              <div className="tile is-ancestor">
                <div className="tile ">
                  <div className="tile is-parent is-vertical">
                    <div className="tile is-child">
                      <p>
                        Technika leczenia żylaków kończyn dolnych znacznie
                        zmieniła się w ostatnich latach.  Zabieg
                        wewnątrznaczyniowy EVLT (z ang.Endo Venous Laser
                        Treatment), który Państwu proponujemy jest nowoczesną,
                        ambulatoryjną techniką leczenia żylaków pniowych
                        (dotyczących dużych naczyń żylnych, głównie żyły
                        odpiszczelowej lub odstrzałkowej).  EVLT zastąpiła
                        tradycyjną technikę chirurgiczną wiążącą się z
                        hospitalizacją pacjenta. W technice ambulatoryjnej
                        Pacjent przychodzi na zabieg i po zabiegu opuszcza
                        placówkę leczącą „na własnych nogach”.{' '}
                      </p>
                      <p>
                        Nasza placówka posiada nowoczesny laser
                        wewnątrznaczyniowy o długości fali świetlnej 1470nm.
                        Istota zabiegu polega na wprowadzeniu do wnętrza chorej
                        żyły włókna światłowodu, który emitując impulsy energii
                        lasera powoduje obkurczenie i zamknięcie naczynia.{' '}
                      </p>
                      <br />
                      <H2>
                        Nasza placówka posiada nowoczesny i najwyższej klasy
                        sprzęt ultrasonograficzny. Pracujący specjaliści
                        posiadają duże doświadczenie zarówno diagnostyczne jak i
                        lecznicze.
                      </H2>
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
                        Zalety zabiegu
                      </H2>
                      <p>
                        Zabieg wykonywany jest ambulatoryjnie-bezpośredni po
                        zabiegu pacjent „na własnych nogach” idzie do domu.
                      </p>
                      <Li>
                        <Green>✓</Green> Jest dla Pacjenta prawie bezbolesny,
                        wymaga jednie znieczulenia miejscowego
                      </Li>
                      <Li>
                        <Green>✓</Green> Nie wymaga cięć chirurgicznych i nie
                        wiąże się z pozostawieniem blizn pooperacyjnych
                      </Li>
                      <Li>
                        <Green>✓</Green> Pozwalana na szybki (następnego dnia)
                        powrót do normalnej aktywności ruchowej
                      </Li>
                      <Li>
                        <Green>✓</Green> Wiąże się z małym ryzykiem powikłań
                        pooperacyjnych
                      </Li>
                      <Li>
                        <Green>✓</Green> Jest zabiegiem o dużej skuteczności
                      </Li>
                      <Li>
                        <Green>✓</Green> Wiek nie jest ograniczeniem w terapii
                        EVLT
                      </Li>
                      <Li>
                        <Green>✓</Green> Można wykonywać zabieg laserowy u
                        pacjentów z aktywnym owrzodzeniem żylnym
                      </Li>
                    </BoxPositiveColor>

                    <div className="tile is-child">
                      <BoxNeutralColor mT>
                        <H2 blue>Przebieg zabiegu</H2>
                        <p>
                          Od momentu przybycia do Placówki celem wykonania
                          zabiegu upłynie około 1 godziny.  Bezpośrednio po
                          przybyciu Pacjent udzieli wywiadu epidemiologicznego i
                          zostanie skonsultowany przez lekarza wykonującego
                          zabieg. Miejsce zostanie znieczulone zastrzykiem
                          roztworu lignokainy.  Pod kontrolą USG naczynie,
                          poprzez znieczulone miejsce, zostanie podkłute, a
                          następnie zostanie wprowadzony do naczynia prowadnik,
                          po nim cewnik. Prowadnik zostanie usunięty i
                          zastąpiony włóknem światłowodu. Światłowód zostanie
                          ułożony pod kontrolą USG. Z pojedynczych nakłóć cienką
                          igłą zostanie podany płyn znieczulający i chłodzący
                          okoliczne tkanki w trakcie zabiegu. Następnie usuwając
                          włókno światłowodu z naczynia będzie emitowana energia
                          zamykająca chore naczynie żylne.  Zabieg EVLT może być
                          uzupełniony o sklerotezacje płynem lub pianą
                          pozostałych zmian żylakowatych. Na miejsce po wkłuciu
                          zostanie naklejony plaster. Na kończynę zostanie
                          nałożona pończocha kompresyjna.
                        </p>
                      </BoxNeutralColor>
                    </div>

                    <BoxNeutralColor mT>
                      <H2 blue>Możliwe powikłania</H2>
                      <p>
                        Powikłania są zdarzeniami niepożądanymi, które mogą, ale
                        nie muszą się przydarzyć w trakcie lub po zabiegu.
                        Prawdopodobieństwo ich wystąpienia jest małe. Należą do
                        nich:
                      </p>
                      <Li>
                        <Red>・</Red> Oparzenie skóry
                      </Li>
                      <Li>
                        <Red>・</Red> Zakrzepica żylna głębokiego układu{' '}
                      </Li>
                      <Li>
                        <Red>・</Red> Stwardnienia i bolesne guzki wzdłuż
                        przebiegu po zamykanym chorym naczyniu żylnym
                        najczęściej są krwiakami lub odcinkami zamykanego
                        naczynia żylnego wypełnionymi krwiakiem.
                      </Li>
                      <Li>
                        <Red>・</Red> Niezamknięcie naczynia żylnego przydarza
                        się rzadko. Wymaga albo powtórnej interwencji lub
                        połączenia zabiegu z inną techniką np. skleroterapią
                      </Li>
                      <Li>
                        <Red>・</Red> Reakcja alergiczna na stosowana w
                        znieczuleniu 0,125% lignocainę
                      </Li>
                    </BoxNeutralColor>

                    <BoxNegativeColor mT>
                      <H2 blue>Przeciwwskazania względem zabiegu</H2>
                      <p>
                        Wykonie procedury EVLT poprzedzone jest wywiadem z
                        pacjentem, badaniem lekarskim, oraz USG Doppler. W
                        trakcie tego postepowania ustalane są wskazania do
                        terapii laserowej (EVLT). Przeciwwskazania występują
                        rzadko:
                      </p>
                      <Li>
                        <Red>・</Red> Przebyte uprzednio leczenie chirurgiczne
                        (tu istotna jest ocena USG Doppler, która może jednak
                        zdecydować o skuteczności EVLT)
                      </Li>
                      <Li>
                        <Red>・</Red> Uczulenie na lignocainę ( można zastosować
                        inne leki znieczulające){' '}
                      </Li>
                      <Li>
                        <Red>・</Red> Stosowanie leków obniżających krzepliwość
                        ( należy odstawić je przed zabiegiem po konsultacji z
                        Lekarzem)
                      </Li>
                      <Li>
                        <Red>・</Red> Stosowanie hormonów antykoncepcyjnych lub
                        hormonalnej terapii substytucyjnej nieznacznie podnosi
                        ryzyko zakrzepowe, ale nie jest bezwzględnym
                        przeciwwskazaniem do zabiegu laserowego (EVLT)
                      </Li>
                    </BoxNegativeColor>

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

export default LaseroweLeczenieELVT

export const pageQuery = graphql`
  query {
    zabieg: file(relativePath: { eq: "skleroelvt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

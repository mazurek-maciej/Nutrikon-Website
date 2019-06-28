import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/Layout/layout'
import ZabiegiNav from '../../components/Navigation/zabiegi-nav'
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
import heartImg from '../../images/heart.svg'
import heroImg from '../../images/mezoterapia.jpg'
import SEO from '../../components/seo'
import Section from '../../components/Section'
import Container from '../../components/Container'

const Hero = styled.div`
  width: 100vw;
  height: 45vh;
  background: url(${heroImg});
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-size: cover;
`
const Zabiegi = styled.div`
  background: linear-gradient(180deg, #f9f9f9 40%, #ddf5ff 80%);
  li {
    list-style-type: none;
  }
`
const LaseroweUsuwanieBrodawek = () => (
  <Layout>
    <SEO
      title="Laserowe usuwanie brodawek i znamion"
      keywords={[
        'usuwanie znamion, usuwanie brodawek, usuwanie pieprzyków, znamię, brodawka',
      ]}
      lang="pl/PL"
    />
    <Hero />
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
                Laserowe usuwanie znamion, pieprzyków, brodawek
              </H1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="tile is-child">
                      <p>
                        Pieprzyki, brodawki czy inne narośla skórne na ciele
                        sprawiają, że czujemy dyskomfort. Często usuwa się je
                        nie tylko ze względów estetycznych, ale przede wszystkim
                        ze wskazań klinicznych. Obecne metody pozwalają na ich
                        szybkie, skuteczne i nieinwazyjne ich usunięcie.
                      </p>
                    </div>
                    <BoxPositiveColor mT>
                      <H2 blue>Wskazania do zabiegu</H2>
                      <p>
                        W naszej przychodni przy użyciu lasera CO2 usuwamy
                        wszelkiego rodzaju narośla skórne:
                      </p>
                      <Li>
                        <Green>✓</Green> Znamiona barwnikowe (zwane potocznie
                        pieprzykami)
                      </Li>
                      <Li>
                        <Green>✓</Green> Brodawki
                      </Li>
                      <Li>
                        <Green>✓</Green> Brodawki wirusowe popularnie nazywane
                        kurzajkami, płaskie
                      </Li>
                      <Li>
                        <Green>✓</Green> Włókniaki
                      </Li>
                      <Li>
                        <Green>✓</Green> Inne (kaszaczki, zaskórniki, prosaki,
                        grudki perliste)
                      </Li>
                    </BoxPositiveColor>
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
                      <Li>
                        <Green>✓</Green> Jest to metoda bezpieczna i skuteczna,
                        bezbolesna. Pacjent może czuć delikatne pieczenie. Przy
                        większych zmianach stosujemy znieczulenie miejscowe
                      </Li>
                      <Li>
                        <Green>✓</Green> Gojenie jest szybkie i bezbolesne,
                        strupek odpada zwykle po 10-14 dniach. Nie ma blizn.
                      </Li>
                      <Li>
                        <Green>✓</Green> Po zabiegu można normalnie funkcjonować
                        i wykonywać codzienne czynności
                      </Li>
                      <Li>
                        <Green>✓</Green> Nie ma ryzyka zakażenia żółtaczką i
                        wirusem HIV.
                      </Li>
                    </BoxPositiveColor>
                    <BoxNeutralColor mT>
                      <div className="tile is-parent">
                        <article className="tile is-child golden-border">
                          <H2 blue>Przebieg zabiegu</H2>
                          <p>
                            Zabieg laserem CO2 wykonywany jest w znieczuleniu
                            miejscowym. Jest bezbolesny i zazwyczaj jednorazowy.
                            Przy większych zmianach może być konieczna ponowna
                            wizyta. Wiązka lasera CO2 zamienia się w ciepło,
                            które jest absorbowane przez tkankę, w której
                            dochodzi do odparowania znajdującej się wewnątrz
                            wody bez naruszenia głębszych tkanek,. Po zabiegu
                            proces gojenia przebiega łagodnie, a w miejscu
                            usuniętych zmian, na skórze pozostanie strupek,
                            który może utrzymać się do około dwóch tygodni.
                          </p>
                        </article>
                      </div>
                    </BoxNeutralColor>
                    <BoxNegativeColor mT>
                      <H2 blue>Możliwe powikłania</H2>
                      <p>
                        Zdarzenia niepożądane mogą, ale nie muszą się przydarzyć
                        w trakcie lub po zabiegu. Prawdopodobieństwo ich
                        wystąpienia jest małe. Należą do nich:
                      </p>
                      <Li>
                        <Red>✕</Red> Zakażenie
                      </Li>
                      <Li>
                        <Red>✕</Red> Przedłużone gojenie
                      </Li>
                      <Li>
                        <Red>✕</Red> Blizna
                      </Li>
                      <p>Skontaktuj się z lekarzem</p>
                      <p>
                        Jeśli mamy na ciele przebarwienia, zmiany skórne, które
                        wzbudzają nasze podejrzenia, należy koniecznie
                        skontaktować się z lekarzem. Nie należy lekceważyć
                        przebarwień, pieprzyków i innych zmian na ciele,
                        szczególnie wówczas, gdy ich kształt się zmienia.
                      </p>
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

export default LaseroweUsuwanieBrodawek

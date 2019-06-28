import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import Layout from '../../components/Layout/layout'
import ZabiegiNav from '../../components/Navigation/zabiegi-nav'
import heartImg from '../../images/heart.svg'
import stopImg from '../../images/no-stopping.svg'
import {
  BoxNegativeColor,
  BoxPositiveColor,
  BoxNeutralColor,
} from '../../components/Backgrounds'
import H1 from '../../components/Tags/H1'
import H2 from '../../components/Tags/H2'
import Li from '../../components/Tags/Li'
import Red from '../../components/Red'
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
const Blue = styled.span`
  color: ${({ theme }) => theme.colors.$secondaryBlue};
  margin-right: 0.5rem;
`
const Zabiegi = styled.div`
  background: linear-gradient(180deg, #f9f9f9 40%, #ddf5ff 80%);
  li {
    list-style-type: none;
  }
`
const BS = styled.h2`
  color: ${({ theme }) => theme.colors.$secondaryBlue};
  font-size: 1.1rem;
`

const LaseroweOdladzanieSkory = ({ data }) => (
  <Layout>
    <SEO
      title="Laserowe usuwanie blizn i odmładzania skóry"
      keywords={['usuwanie blizn, odmładzanie skóry, regeneracja skóry']}
      lang="pl/PL"
    />
    <HeroZabiegi fluid={data.zabiegiImage.childImageSharp.fluid} />
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
                Laserowe usuwanie blizn i odmładzania skóry
              </H1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="tile is-child">
                      <p>
                        Laser frakcyjny CO2 to ultra nowoczesne urządzenie
                        służące do trwałej i całkowitej regeneracji skóry oraz
                        intensywnej stymulacji syntezy nowego kolagenu.
                        Frakcyjne wygładzanie skóry redukuje drobne zmarszczki,
                        poprawia odcień i teksturę skóry, przywraca jej jędrność
                        i zamyka duże pory. Laser frakcyjny spłyca również
                        głębokie zmarszczki i blizny.
                      </p>
                    </div>

                    <br />
                    <BoxPositiveColor mt>
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
                        Wskazania do zabiegu
                      </H2>
                      <BS>
                        <Blue>✓</Blue>Odmładzanie skóry
                      </BS>
                      <Li style={{ marginLeft: '1rem' }}>
                        ・ wiotkość skóry – głębokie zmarszczki
                      </Li>
                      <Li style={{ marginLeft: '1rem' }}>
                        ・ drobne zmarszczki, w tym zmarszczki wokół oczu i
                        zmarszczki wokół ust "worki" pod oczami
                      </Li>
                      <Li style={{ marginLeft: '1rem' }}>
                        ・ poszerzone pory i niejednolity odcień skóry
                      </Li>
                      <BS>
                        <Blue>✓</Blue>Usuwanie blizn
                      </BS>
                      <Li style={{ marginLeft: '1rem' }}>・ potrądzikowe</Li>
                      <Li style={{ marginLeft: '1rem' }}>・ pooparzeniowe</Li>
                      <Li style={{ marginLeft: '1rem' }}>
                        ・ pooperacyjne i pourazowe
                      </Li>
                      <Li style={{ marginLeft: '1rem' }}>
                        ・ blizny przerosłe i keloidy
                      </Li>
                      <Li style={{ marginLeft: '1rem' }}>・ rozstępy</Li>
                      <BS>
                        <Blue>✓</Blue>Przebarwienia, plamy starcze,
                        niejednorodny koloryt skóry
                      </BS>
                    </BoxPositiveColor>
                    <BoxNeutralColor mT>
                      <H2 blue>Opis zabiegu</H2>
                      <p>
                        Zabieg przeprowadzany jest w znieczuleniu miejscowym,
                        dlatego nie jest on szczególnie bolesny. Krem
                        znieczulający nakłada się na 30–40 minut przed
                        zabiegiem. Następnie mikroskopijna, prowadzona skanerem
                        wiązka laserowa „dziurkuje” skórę tysiącami mikro
                        kraterów, pozostawiając pomiędzy nimi siatkę
                        nieuszkodzonej tkanki. Od tych nieuszkodzonych stref
                        rozpoczyna się gwałtowny proces gojenia, w trakcie
                        którego następuje intensywna regeneracja skóry. Efektem
                        działania jest odmładzanie skóry z uszkodzeniami
                        posłonecznymi, wygładzanie zmarszczek oraz blizn bez
                        tworzenia widocznych ran z długim okresem bolesnego
                        leczenia.
                      </p>
                    </BoxNeutralColor>
                    <BoxNeutralColor mT>
                      <H2 blue>Przebieg zabiegu</H2>
                      <p>
                        W jednym zabiegu laser działa tylko na 10 -20 %
                        powierzchni wybranego obszaru skóry. Żeby doprowadzić do
                        pełnej wymiany skóry na nową, zabieg należy powtórzyć
                        2-4 razy w odstępach 4-5 tygodni (w zależności od tego
                        jak inwazyjny był poprzedni zabieg).
                      </p>
                    </BoxNeutralColor>
                    <BoxNegativeColor mT>
                      <H2 blue>Zalecenia pozabiegowe</H2>
                      <p>
                        Po zabiegu na skórze pojawia się zaczerwienienie i
                        lekkie opuchnięcie. Może też pojawić się przejściowa
                        wysypka, jak przy uczuleniach. Skóra wygląda, jak po
                        przesadnym opalaniu, ze wszystkimi charakterystycznymi
                        dla tego stanu dolegliwościami, które mijają po kilku
                        godzinach, tym szybciej im konsekwentniej stosujemy
                        wszystkie środki używane przy poparzeniu słonecznym.
                      </p>
                      <p>
                        Zaczerwienienie mija po 3-5 dniach, obrzęk nasila się po
                        2 dniach i po 3-4 znika. Później skóra nieco brązowieje
                        i się złuszcza. Po tygodniu skóra wraca do normalnego
                        wyglądu. Jeżeli stosowano znieczulenie iniekcją, to w
                        miejscu wkłucia mogą pojawić się przejściowe siniaki.
                      </p>
                      <p>
                        Bardzo rzadko, przy najwyższych mocach, na pewnych
                        obszarach skóry pęcherze mogą się wygajać tworząc
                        strupki. Jeżeli u pacjentki zastosowano doustne środki
                        znieczulające, to nie może ona prowadzić samochodu do
                        następnego dnia. W innym wypadku można natychmiast po
                        zabiegu powrócić do normalnej aktywności życiowej,
                        unikając: słońca i gorących kąpieli.
                      </p>
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
                        <Red>✕</Red> Nie realistyczne oczekiwania pacjenta
                      </Li>
                      <Li>
                        <Red>✕</Red> Choroba nowotworowa skóry
                      </Li>
                      <Li>
                        <Red>✕</Red> Ciąża
                      </Li>
                      <Li>
                        <Red>✕</Red> Czynna infekcja
                      </Li>
                      <Li>
                        <Red>✕</Red> Czynna opryszczka
                      </Li>
                      <Li>
                        <Red>✕</Red> Zmiany ropne na skórze
                      </Li>
                      <Li>
                        <Red>✕</Red> Infekcja ogólnoustrojowa
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

LaseroweOdladzanieSkory.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LaseroweOdladzanieSkory

export const pageQuery = graphql`
  query {
    zabiegiImage: file(relativePath: { eq: "mezoterapia.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

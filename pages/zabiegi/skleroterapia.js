import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
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

const Skleroterapia = ({ data }) => (
  <Layout>
    <SEO
      title="Skleroterapia"
      keywords={[
        'skleroterapia, leczenie żylaków, pajęczyki żylne, zmiany żylakowate',
      ]}
      lang="pl/PL"
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
                Skleroterapia
              </H1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="tile is-child">
                      <article>
                        Skleroterapia jest jedną z ambulatoryjnych metod
                        leczenia zmian żylakowatych. Technika ta polega na
                        wprowadzeniu w wyniku iniekcji do światła zmienionego
                        chorobowo naczynia preparatu zamykającego go (
                        sklerozantu). Stosowany przez nas preparat
                        sklerotyzujacy to aethoxysclerol. Po podaniu go do
                        naczynia następuje chemiczne uszkodzenie śródbłonka
                        zmienionego żylakowato naczynia i jego zarośnięcie.
                        Preparat w zależności od szerokości zamykanego naczynia
                        podajemy w płynie w stężeniach 0,5%-1%-2%-3%, lub w
                        formie piany. Podany do naczynia płyn aktywny jest
                        jedynie przez kilka sekund i zamyka naczynia w miejscu
                        iniekcji.
                      </article>
                      <br />
                      <dfn>
                        Technika ta szczególnie nadaje się do zamykania zmian:
                      </dfn>
                      <dfn>
                        <Li>・ o charakterze pajączków żylnych</Li>
                        <Li>・ żył siatkowatych</Li>
                        <Li>・ pojedynczych zmian żylakowatych</Li>
                      </dfn>
                      <br />
                      <article>
                        Nie mniej może być też stosowana w leczeniu żylaków
                        pniowych (dużych naczyń żylnych- żyła odpiszczelowa,
                        żyła odstrzałkowa). Stężenie rośnie w miarę zamykania
                        coraz szerszych naczyń. Przygotowanie w formie piany
                        powoduje zwiększenie jego objętości, a po iniekcji
                        preparat pozostaje w miejscu podania. Dodatkowo forma
                        piany jest widoczna w badaniu USG, co umożliwia
                        zamykanie niewydolnych naczyń żylnych położonych głębiej
                        pod skórą (niewydolne naczynia pniowe, niewydolne
                        perforatory).{' '}
                      </article>
                    </div>

                    <br />
                    <BoxPositiveColor>
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
                        <Green>✓</Green> Zabieg sklerotyzacji wykonywany jest w
                        technice ambulatoryjnej. Pacjent natychmiast po zabiegu
                        wstaje i samodzielnie porusza się
                      </Li>
                      <Li>
                        <Green>✓</Green> Zabieg jest prawie bezbolesny – za
                        wyjątkiem drobnego ukłucia cienka igłą celem podania
                        preparatu
                      </Li>
                      <Li>
                        <Green>✓</Green> Na jednej sesji możemy zamknąć
                        niewydolne naczynia żylne w wielu obszarach
                      </Li>
                      <Li>
                        <Green>✓</Green> Wiąże się z małym ryzykiem
                      </Li>
                      <Li>
                        <Green>✓</Green> Może być łączony z innymi technikami
                        np. laserową ablacja naczyń pniowych EVLT, laserową
                        terapia zamykająca naczynia w technice przezskórnej
                        (laser ndyag)
                      </Li>
                      <Li>
                        <Green>✓</Green> Nie wymaga chirurgicznych cięć
                        wiążących się z pozostawieniem blizn
                      </Li>
                      <Li>
                        <Green>✓</Green> Cechuje się dużą skutecznością
                      </Li>
                      <Li>
                        <Green>✓</Green> Może być stosowany u pacjentów z
                        aktywnymi owrzodzeniami
                      </Li>
                    </BoxPositiveColor>

                    <BoxNeutralColor mT>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <H2 blue>Przebieg zabiegu</H2>
                          <p>
                            Po dezynfekcji skóry wybrane zmienione chorobowo
                            naczynie podkłuwane jest cienką igłą. Następnie
                            powoli wstrzykiwany jest preparat sklerotyzujacy
                            (zamykający niewydolne naczynie żylne). Pojawienie
                            się pieczenia w trakcie iniekcji jest ważną
                            informacją dla operatora. Wskazuje na przeciekanie
                            preparatu poza światło naczynia. Należy o tym
                            niezwłocznie poinformować. W takiej sytuacji czasami
                            trzeba wybrać nowe miejsce podkłucia. Po podaniu
                            preparatu jest on rozprowadzany w leczonym obszarze
                            poprzez pocieranie gazikiem po skórze z uciskiem.
                          </p>
                        </article>
                        <Divider />
                        <article className="tile is-child">
                          <H2 blue>Czas zabiegu</H2>
                          <p>
                            Zależy od ilości wstrzykiwanego preparatu i
                            możliwości wprowadzenia go do naczynia z jednego lub
                            większej liczby ukłuć. Naczynia zamykają się i
                            ulegają zarośnięciu, a końcowy efekt ocenia się za 6
                            tygodni. Ponieważ w leczonym obszarze po iniekcji
                            pojawia się przejściowy odczyn zapalny trudno ocenić
                            jest, do których naczyń dostał się preparat, a do
                            których nie. Będzie to możliwe dopiero za 14 dni. W
                            związku z tym terapie prowadzi się w cyklach co 14
                            dni. W trakcie procedury Pacjent nie jest dodatkowo
                            obciążany kosztami wizyty i płaci jedynie za zużyty
                            preparat ( liczba użytych ampułek).
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
                        Możliwe powikłania
                      </H2>
                      <p>
                        Powikłania są zdarzeniami niepożądanymi, które mogą, ale
                        nie muszą się przydarzyć w trakcie lub po zabiegu.
                        Prawdopodobieństwo ich wystąpienia w trakcie
                        sklerotyzacji jest niewielkie. Wyrażając jednak świadomą
                        zgodę na zabieg należy się z nimi zapoznać:
                      </p>
                      <Li>
                        <Red>✕</Red> Przebarwienia w miejscu zamykanego naczynia
                        w formie kakaowych plam. Pojawienie się tych plam wiąże
                        się z żelazem zawartym w hemoglobinie czerwonych
                        krwinek. Najczęściej plamy te ustępują w wyniku
                        wcierania w nie preparatów z heparyną ( np. Keladerm),
                        można też stosować piajwki
                      </Li>
                      <Li>
                        <Red>✕</Red> Zakrzepica żylna głębokiego układu żylnego
                        może rozwinąć się po każdej interwencji chirurgicznej.
                        Istotne jest wdrożenie profilaktyki przeciwzakrzepowej
                        aby obniżyć prawdopodobieństwo jej powstania. W
                        przypadku tego zabiegu ryzyko jest małe, a stosowana
                        profilaktyka polega na stosowaniu wyrobów kompresyjnych
                        i wczesnej aktywności ruchowej
                      </Li>
                      <Li>
                        <Red>✕</Red> Stwardnienia i bolesne guzki wzdłuż
                        przebiegu po zamykanym chorym naczyniu żylnym
                        najczęściej są krwiakami lub odcinkami zamykanego
                        naczynia żylnego wypełnionymi krwiakiem. Najczęściej
                        ulegają samowchłonięciu lub mogą być nakłute i
                        ewakuowane przez leczącego Lekarza w trakcie wizyty
                        kontrolnej
                      </Li>
                      <Li>
                        <Red>✕</Red> Niezamknięcie naczynia żylnego przydarza
                        się rzadko. Wymaga albo powtórnej interwencji z użyciem
                        większego stężenia preparatu, lub połączenia zabiegu z
                        inną techniką np. miniflebektomią
                      </Li>
                      <Li>
                        <Red>✕</Red> Reakcja alergiczna na stosowana preparat
                        Aethoxysclerol zdarza się rzadko, lecz nie można jej
                        całkowicie wykluczyć
                      </Li>
                      <Li>
                        <Red>✕</Red> Owrzodzenie w miejscu wkłucia to rzadkie
                        powikłanie, ale możliwe z powodu przedostania się
                        preparatu poprzez połączenia tętniczo-żylne do układu
                        tętniczego. Pomimo krótkotrwałego działania preparat
                        sklerotyzujący może przedostać się do naczyń
                        mikrokrążenia tętniczego i spowodować ich zamkniecie, co
                        powoduje powstanie drobnego owrzodzenia. To rzadkie
                        powikłanie związane jest najczęściej ze zbyt wysokim
                        stężeniem używanego preparatu. Stąd leczenie
                        rozpoczynamy od bezpiecznych małych stężeń, zwiększając
                        je w miarę potrzeb.
                      </Li>
                    </BoxNegativeColor>
                    <BoxNeutralColor mT>
                      <H2 blue>Zalecenia po zabiegowe</H2>
                      <article>
                        Po zabiegu będziecie Państwo proszeni o noszenie wyrobów
                        uciskowych przez 7 dni z przerwa jedynie na toaletę,
                        wyroby będą założone również w nocy. Po 7 dniach proszę
                        wyroby zakładać na czas dziennej aktywności. W razie
                        nieznacznych dolegliwości (szczypanie, pieczenie) w
                        pierwszej dobie po zabiegu proszę przyjąć 400mg
                        Ibuprofenu (dostępny bez recepty). Od następnej doby po
                        zabiegu w siniaki i pojawiające się ewentualnie
                        stwardnienia należy wcierać 2 razy na dobę preparaty z
                        Heparyna ( np. Keladerm). Ponieważ noszone wyroby
                        kompresyjne wysuszają skórę, prosimy zadbać o właściwe
                        jej nawilżenia w trakcie przerwy w noszeniu wyrobów
                        kompresyjnych. W razie nasilania, utrzymywania się
                        dolegliwości, narastającego obrzęku, gorączki proszę
                        skontaktować się z lekarzem wykonującym zabieg
                      </article>
                    </BoxNeutralColor>
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

Skleroterapia.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Skleroterapia

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

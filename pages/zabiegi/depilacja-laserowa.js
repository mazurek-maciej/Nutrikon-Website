import React from 'react'
import Layout from '../../components/Layout/layout'
import ZabiegiNav from '../../components/Navigation/zabiegi-nav'
import styled from 'styled-components'
import stopImg from '../../images/no-stopping.svg'
import H1 from '../../components/H1'
import H2 from '../../components/H2'
import BoxNegativeColor from '../../components/BoxNegativeColor'
import BoxPositiveColor from '../../components/BoxPositiveColor'
import Red from '../../components/Red'
import Green from '../../components/Green'
import Li from '../../components/Li'
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

const DepilacjaLaserowa = ({ data }) => (
  <Layout>
    <SEO
      title={'Depilacja laserowa'}
      keywords={[
        'depilacja laserowa, depilacja, laser neodymowy, włosy, skóra',
      ]}
      lang={'pl/PL'}
    />
    <HeroZabiegi fluid={data.zabiegiImage.childImageSharp.fluid} />
    <Zabiegi>
      <Section>
        <Container>
          <div className="columns">
            <div className="column is-9">
              <H1 small red>
                Depilacja laserowa
              </H1>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <div className="tile is-child">
                      <article>
                        <p>
                          Zasada działania epilacji, czyli trwałej depilacji
                          (usuwania owłosienia) jest bardzo prosta. W cebulce
                          produkującej włos jest duża ilość melaniny. Światło o
                          długości fali 755 nm, przechodząc przez skórę
                          rozpoznaje barwnik brązowy i w kontakcie z cebulką
                          zamienia się w energię cieplną. Dochodzi do wybuchu –
                          rozpadu cebulki.
                        </p>
                        <p>
                          Po zabiegu epilacji, w którym trwale likwidujemy
                          dojrzałe cebulki, jeszcze przez około 10 dni wychodzą
                          włosy. Później jest okres całkowitego spokoju – włosy
                          nie rosną, a w dalszym etapie zaczynają dojrzewać
                          kolejne cebulki. Jednak ich ilość jest ograniczona i z
                          tego też względu już po trzech zabiegach widać
                          znaczący spadek ilości włosów.
                        </p>
                        <p>
                          Ze względu na długość fali świetlnej, którą pracujemy
                          bardzo ważne jest, aby skóra w trakcie zabiegu miała
                          naturalny kolor. Melanina, która jest na powierzchni
                          skóry jest tą samą melaniną, która występuje w
                          cebulkach i to sprawia, że światło lasera częściowo
                          skupia się na skórze a tylko część trafia do mieszka
                          włosa. Dlatego tak ważne jest, aby skóra nie była
                          opalona
                        </p>
                      </article>
                    </div>
                    <br />
                    <BoxPositiveColor mT>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <H2 blue>Przed zabiegiem</H2>
                          <p>
                            Przed zabiegiem depilacji laserowej należy się do
                            niego wcześniej przygotować.
                          </p>
                          <Li>
                            <Green>✓</Green> Istotne jest odstawienie na miesiąc
                            przed zabiegiem leków światłouczulających z uwagi na
                            zagrożenie wystąpienia uczulenia i poparzenia
                          </Li>
                          <Li>
                            <Green>✓</Green> Na miesiąc przed planowanym
                            zabiegiem należy zaprzestać depilacji depilatorem,
                            woskiem, kremami do depilacji, wyrywania włosów
                            pęsetą. Zamiennie można stosować w tym okresie
                            golenie maszynką.
                          </Li>
                          <Li>
                            <Green>✓</Green> Na dzień przed zabiegiem zaleca się
                            aby włosy zostały zgolone maszynką oraz skóra nie
                            może być opalona.
                          </Li>
                        </article>
                        <Divider />
                        <article className="tile is-child">
                          <H2 blue>Przebieg zabiegu</H2>
                          <p>
                            Zabieg laserem neodymowym jest krótki i mało bolesny
                            Ważne – podczas pierwszej konsultacji, specjalista
                            zwraca uwagę na następujące rzeczy: świeża
                            opalenizna, ciąża, przerwana ciągłość naskórka,
                            epilepsja, leki/zioła fotouczulające, terapia
                            retinoidami (witamina A), przyjmowanie leków
                            obniżających krzepliwość krwi, łuszczyca, bielactwo,
                            przebarwienia, cukrzyca, bliznowce, infekcje skórne,
                            rozrusznik serca, świeże zabiegi chirurgiczne. Po
                            przeprowadzonym wywiadzie oraz ocenie stanu skóry
                            osobom zakwalifikowanym do zabiegu wykonuje się
                            próbę laserową – jeżeli odczyn skóry jest prawidłowy
                            zabieg można wykonać już po kilku minutach. Istnieje
                            możliwość skorzystania ze środka znieczulającego.
                          </p>
                        </article>
                      </div>
                    </BoxPositiveColor>

                    <BoxNegativeColor mT>
                      <H2 blue>
                        <Red>! </Red>Bezpośrednio po zabiegu depilacji
                        laserowej:
                      </H2>
                      <Li>
                        ・ Bezpośrednio po zabiegu mogą pojawić się małe
                        zaczerwienienia, które do godzinny ustąpią. Skórę po
                        zabiegu nie wolno opalać. Zabieg nie jest przeznaczony
                        dla osób z licznymi zmianami barwnikowymi oraz kobiet w
                        ciąży. Pacjenci z chorobami przewlekłymi wymagają
                        konsultacji lekarskiej przed zabiegiem
                      </Li>
                      <Li>
                        ・ Nie korzystać z kąpieli słonecznych{' '}
                        <Red>NIE WOLNO SIĘ OPALAĆ!</Red>
                      </Li>
                      <Li>
                        ・ Nie korzystać z basenu, sauny, gorących kąpieli{' '}
                      </Li>
                      <Li>
                        ・ Kosmetyki, zioła, kremy fotouczulające nie powinny
                        być stosowane do dwóch tygodni po zabiegu
                      </Li>
                      <p>
                        Czas trwania poszczególnych faz wzrostu włosa sugeruje
                        stosowanie zabiegów w odstępach 6-8 tygodni. Liczba
                        zabiegów niezbędna do uzyskania optymalnego efektu jest
                        trudna do określenia, gdyż pacjenci różnią się między
                        sobą nie tylko karnacją i kolorem włosów, lecz także
                        gospodarką hormonalną.
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
                        <Red>✕</Red> Ciąża
                      </Li>
                      <Li>
                        <Red>✕</Red> Opalenizna świeża i mocna
                      </Li>
                      <Li>
                        <Red>✕</Red> Kremy z retinolem (odstawić 3 tyg. przed
                        zabiegiem)
                      </Li>
                      <Li>
                        <Red>✕</Red> Leki światłouczulające, retinoidy
                      </Li>
                      <Li>
                        <Red>✕</Red> Zioła (nagietek, dziurawiec – odstawić 3
                        tyg. przed zabiegiem)
                      </Li>
                      <Li>
                        <Red>✕</Red> Depilacja woskiem lub pęsetą (min 1 miesiąc
                        przerwy)
                      </Li>
                      <Li>
                        <Red>✕</Red> Bielactwo, łuszczyca
                      </Li>
                      <Li>
                        <Red>✕</Red> Peeling (odstawić tydzień przed zabiegiem)
                      </Li>
                      <Li>
                        <Red>✕</Red> Inne
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

export default DepilacjaLaserowa

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

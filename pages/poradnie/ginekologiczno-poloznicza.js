import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Image from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import PoradnieNav from '../../components/Navigation/poradnie-nav'
import H2 from '../../components/Tags/H2'
import H1 from '../../components/Tags/H1'
import BoxNegativeColor from '../../components/Backgrounds/BoxNegativeColor'
import BoxNeutralColor from '../../components/Backgrounds/BoxNeutralColor'
import BackgroundGradient from '../../components/Backgrounds/BackgroundGradient'
import Scroll from '../../components/Scroll'
import DoctorInfo from '../../components/DoctorInfoIcon'
import SEO from '../../components/seo'
import Section from '../../components/Section'
import Container from '../../components/Container'

const HeroPoradnie = styled(Image)`
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
const Star = styled.span`
  color: gold;
`

const navList = [
  'Laserowe leczenie nietrzymania moczu',
  'Rewitalizacja pochwy',
  'Usuwanie zmian skórnych o różnej etiologii z okolicy sromu i krocza',
]

class Index extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  scrollTo = () => this.myRef.current.scrollIntoView({ behavior: 'smooth' })

  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO
          title="Poradnia Ginekologiczno-Położnicza"
          keywords={[
            'poradnia ginekologiczna, usługi ginekologiczne, położnictwo',
          ]}
          lang="pl/PL"
        />
        <HeroPoradnie fluid={data.poradnieImage.childImageSharp.fluid} />
        <BackgroundGradient>
          <Section>
            <Container>
              <div className="columns">
                <div className="column is-9">
                  <div className="container">
                    <H1 small red>
                      Poradnia Ginekologiczno-Położnicza
                      <Scroll onClick={this.scrollTo} />
                    </H1>
                    <div className="tile is-ancestor">
                      <div className="tile is-vertical is-9">
                        <div className="tile">
                          <div className="tile is-parent is-vertical">
                            <article className="tile is-child">
                              <H2 isBlue>
                                <ion-icon name="information-circle-outline" />
                                Informacje ogólne
                              </H2>
                              <p>
                                Oferujemy szeroki zakres kompleksowych usług
                                ginekologicznych, położniczych oraz badań
                                laboratoryjnych.
                              </p>
                            </article>

                            <H2 isBlue>
                              <ion-icon name="medkit" />
                              Profil leczenia oraz zakres usług
                            </H2>
                            <BoxNeutralColor style={{ marginBottom: '1.5rem' }}>
                              <p>Badania ginekologiczne:</p>
                              <li>
                                ・ Badanie ginekologiczne okresowe (tzw.
                                profilaktyczne)
                              </li>
                              <li>
                                ・ Porada antykoncepcyjna - wybór metody
                                antykoncepcyjnej
                              </li>
                              <li>
                                ・ Ocena biocenozy pochwy obejmująca obraz
                                mikroskopowy i odczyn pH wydzieliny pochwowej
                              </li>
                              <li>
                                ・ Posiew bakteriologiczny wydzieliny pobranej z
                                pochwy i z szyjki macicy z antybiogramem,
                                mykogramem
                              </li>
                              <li>
                                ・ Badanie cytologiczne rozmazu pobranego z
                                szyjki macicy. Diagnostyka cytologiczna
                                cienkowarstwowa (LBC)
                              </li>
                              <li>
                                ・ LBC rozszerzona o test w kierunku infekcji
                                HPV (LBC+ test HPV)
                              </li>
                              <li>
                                ・ LBC + test w kierunku zakażenia Chlamydia
                                trachomatis (LBC+ test Chl.tr.)
                              </li>
                              <li>
                                ・ Biopsja endocervix i endometrium. Pobranie
                                wycinków z szyjki macicy
                              </li>
                              <li>・ Wycięcie drobnych zmian ze sromu</li>
                              <li>
                                ・ Elektrochirurgiczne usuwanie zmian w obszarze
                                krocza, sromu, szyjki macicy
                              </li>
                              <li>
                                ・ Nacięcie i sączkowanie ropnia gruczołu
                                Bartholina
                              </li>
                              <li>
                                ・ Diagnostyka ultrasonograficzna narządu
                                rodnego (USG sondą przezbrzuszną i dopochwową)
                              </li>
                              <li>
                                ・ Badanie ultrasonograficzne gruczołów
                                piersiowych
                              </li>
                              <li>
                                ・ Zakładanie i usuwanie kształtki
                                wewnątrzmacicznej IUD
                              </li>
                              <li>・ Diagnostyka niepłodności małżeńskiej</li>
                              <li>
                                ・ Diagnostyka i leczenie objawów związanych z
                                okresem przekwitania
                              </li>
                            </BoxNeutralColor>
                            <BoxNeutralColor>
                              <p>Badania położnicze:</p>
                              <li>
                                ・ Ocena biocenozy pochwy u kobiety w ciąży
                                (obraz mikroskopowy i pH wydzieliny pochwowej)
                              </li>
                              <li>
                                ・ Badanie cytologiczne rozmazu pobranego z
                                szyjki macicy
                              </li>
                              <li>
                                ・ Posiew bakteriologiczny wydzieliny pobranej z
                                pochwy i z szyjki macicy z antybiogramem i
                                mykogramem
                              </li>
                              <li>
                                ・ Diagnostyka wczesnej ciąży (badanie
                                ginekologiczne, testy ciążowe, ocena poziomu
                                HCG, USG (TV))
                              </li>
                              <li>
                                ・ Nadzór nad ciążą przebiegającą prawidłowo od
                                momentu poczęcia do rozwiązania
                              </li>
                              <li>
                                ・ Nadzór nad ciążą o podwyższonym ryzyku (ciąża
                                mnoga, u kobiet obciążonych chorobowo, lub z
                                obciążonym wywiadem położniczym)
                              </li>
                              <li>
                                ・ Badanie USG położnicze głowicą przezbrzuszną
                                i dopochwową
                              </li>
                              <li>
                                ・ Badanie USG położnicze 11-14 hbd wg.
                                standardów PTG (tzw. genetyczne)
                              </li>
                              <li>
                                ・ Badanie USG położnicze 18-22 hbd wg.
                                standardów PTG (tzw. połówkowe)
                              </li>
                              <li>
                                ・ Badanie USG położnicze 28-32 hbd wg.
                                standardów PTG (tzw. III trymestru)
                              </li>
                              <li>
                                ・ Badanie USG z użyciem przepływów
                                dopplerowskich – ocena przepływu krwi w
                                naczyniach macicznych i płodowym układzie
                                krążenia
                              </li>
                              <li>
                                ・ Kardiotokografia płodowa- test bezstresowy
                              </li>
                              <li>
                                ・ Kontrolny wymaz z pochwy, kanału szyjki,
                                odbytu na posiew i antybiogram w 35-38 hbd w
                                kierunku Streptoccocus agalactiae (GBS)
                              </li>
                            </BoxNeutralColor>
                          </div>
                        </div>
                        <BoxNegativeColor mT>
                          <div className="tile is-parent">
                            <div className="tile is-child">
                              <H2 isBlue>
                                <ion-icon name="person" />
                                Personel
                              </H2>
                              <li>
                                <Star>★</Star> Lek. med. Katarzyna Tarara -
                                Specjalista położnictwa i ginekologii{' '}
                                <Link to="/zespol/tarara">
                                  <DoctorInfo />
                                </Link>
                              </li>
                              <li>
                                <Star>★</Star> Lek. med. Andrzej Ośko -
                                Specjalista położnictwa i ginekologii{' '}
                                <Link to="/zespol/osko">
                                  <DoctorInfo />
                                </Link>
                              </li>
                            </div>
                          </div>
                        </BoxNegativeColor>
                      </div>
                    </div>
                  </div>
                </div>
                <div ref={this.myRef} className="column is-3">
                  <PoradnieNav navList={navList} />
                </div>
              </div>
            </Container>
          </Section>
        </BackgroundGradient>
      </Layout>
    )
  }
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const pageQuery = graphql`
  query {
    poradnieImage: file(relativePath: { eq: "ginekologia.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
